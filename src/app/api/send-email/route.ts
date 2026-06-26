import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getPayload } from 'payload';
import config from '@payload-config';

/**
 * Escape HTML special characters to prevent HTML injection in email templates.
 */
function escapeHtml(text: string | undefined | null): string {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Simple in-memory rate limiter (resets on cold start).
 * For production at scale, consider Vercel KV or similar.
 */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // requests
const RATE_WINDOW = 60 * 1000; // per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || record.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

// Configure the Gmail SMTP transporter with more robust settings
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use SSL
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // This must be an "App Password", not your regular password
    },
});

export async function POST(req: Request) {
    // Rate limiting: Get client IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ||
               req.headers.get('x-real-ip') ||
               'unknown';

    if (!checkRateLimit(ip)) {
        return NextResponse.json(
            { success: false, message: 'Too many requests. Please try again later.' },
            { status: 429 }
        );
    }

    try {
        const data = await req.json();

        // Input validation: email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (data.email && !emailRegex.test(data.email)) {
            return NextResponse.json(
                { success: false, message: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Validate required fields based on form type
        const requiredFields: Record<string, string[]> = {
            contact: ['name', 'email', 'message'],
            booking: ['name', 'email', 'preferredDate'],
            partner: ['companyName', 'email'],
            training: ['email'],
            general: ['email'],
        };

        const required = requiredFields[data.formType] || ['email'];
        const missing = required.filter(
            (field) => !data[field] && !data.fullName && !data.firstName
        );

        if (missing.length > 0 && !data.email) {
            return NextResponse.json(
                { success: false, message: `Missing required fields: ${missing.join(', ')}` },
                { status: 400 }
            );
        }

        // Conditional logging: full data only in development
        if (process.env.NODE_ENV !== 'production') {
            console.log('--- NEW FORM SUBMISSION ---', data.formType);
            console.log('Submission Data:', JSON.stringify(data, null, 2));
        } else {
            console.log(`Form submission received: ${data.formType} from ${data.email ? '[email provided]' : '[no email]'}`);
        }

        const gmailUser = process.env.GMAIL_USER;
        const gmailPass = process.env.GMAIL_APP_PASSWORD;

        // Filter out base64 content for clean terminal logs
        const cleanData = {
            ...data,
            files: data.files?.map((f: any) => ({ name: f.name, size: f.size, type: f.type })) || []
        };

        // Persist the enquiry into the CRM (Leads). Wrapped so a CMS/DB hiccup can
        // never break the visitor-facing form — the email + response are unchanged.
        try {
            const payload = await getPayload({ config });
            const name =
                data.fullName ||
                [data.firstName, data.lastName].filter(Boolean).join(' ').trim() ||
                data.email ||
                'Unknown';
            await payload.create({
                collection: 'leads',
                overrideAccess: true,
                data: {
                    name,
                    email: data.email,
                    phone: data.phone,
                    company: data.organization || data.company,
                    formType: data.formType,
                    subject: data.courseName || data.projectName || data.preferredBatch,
                    message: data.message,
                    status: 'new',
                    raw: cleanData,
                },
            });
            console.log('✓ Lead saved to CRM');
        } catch (crmError: any) {
            console.error('Lead persistence failed (non-fatal):', crmError?.message);
        }

        // If credentials are provided, send the actual email
        if (gmailUser && gmailPass) {
            console.log(`--- Processing [${data.formType}] Lead ---`);

            // Helper to format field name and filter allowed fields
            const mapping: { [key: string]: string } = {
                fullName: 'Full Name',
                firstName: 'First Name',
                lastName: 'Last Name',
                email: 'Email Address',
                phone: 'Phone Number',
                organization: 'Organization',
                company: 'Company',
                projectName: 'Project Name',
                courseName: 'Course Name',
                preferredBatch: 'Preferred Batch',
                message: 'Message/Inquiry'
            };

            const formatFieldName = (key: string) => mapping[key];

            // Generate HTML rows only for mapped fields (with HTML escaping)
            const dataRows = Object.entries(data)
                .filter(([key]) => mapping[key]) // Only include fields that have a mapping
                .map(([key, value]) => `
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                            <strong style="color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">${escapeHtml(mapping[key])}</strong>
                            <div style="color: #333; font-size: 16px; margin-top: 4px; font-weight: 500; white-space: pre-wrap;">${escapeHtml(String(value)) || 'Not provided'}</div>
                        </td>
                    </tr>
                `).join('');

            // Generate text-only version for fallback
            const textVersion = Object.entries(data)
                .filter(([key]) => mapping[key])
                .map(([key, value]) => `${mapping[key]}: ${value}`)
                .join('\n');

            const mailOptions: any = {
                from: `"TheAgileNest Support" <${gmailUser}>`,
                to: process.env.NOTIFICATION_EMAIL || 'agilenestconsultants@gmail.com',
                subject: `[${escapeHtml(data.formType)}] Lead from ${escapeHtml(data.fullName || data.firstName) || 'New Inquiry'}`,
                text: textVersion,
                attachments: data.files?.map((file: any) => ({
                    filename: file.name,
                    content: file.content,
                    encoding: 'base64',
                    contentType: file.type
                })),
                html: `
                    <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px 20px; background-color: #f9fafb; color: #1f2937;">
                        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                            <div style="background: #002D5B; padding: 32px; text-align: center;">
                                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">NEW INQUIRY</h1>
                                <p style="color: #93c5fd; margin: 8px 0 0 0; text-transform: uppercase; font-size: 12px; font-weight: 700; letter-spacing: 1px;">${escapeHtml(data.formType)}</p>
                            </div>
                            
                            <div style="padding: 40px;">
                                <table style="width: 100%; border-collapse: collapse;">
                                    ${dataRows}
                                </table>

                                ${data.files && data.files.length > 0 ? `
                                <div style="margin-top: 32px; padding: 20px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
                                    <h4 style="margin: 0 0 12px 0; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Attached Documents</h4>
                                    <ul style="margin: 0; padding: 0; list-style: none;">
                                        ${data.files.map((f: any) => `
                                            <li style="font-size: 14px; color: #1e293b; padding: 4px 0; display: flex; align-items: center;">
                                                <span style="color: #3b82f6; margin-right: 8px;">📎</span> ${escapeHtml(f.name)}
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                                ` : ''}

                                <div style="margin-top: 40px; text-align: center; border-top: 1px solid #f3f4f6; padding-top: 24px;">
                                    <p style="font-size: 13px; color: #9ca3af; margin: 0;">
                                        This lead was generated from <strong>theagilenest.com</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
            };

            await transporter.sendMail(mailOptions);
            console.log('✓ Email sent successfully via Gmail');
        } else {
            console.warn('⚠ Gmail credentials missing. Check your .env environment variables.');
        }

        return NextResponse.json({
            success: true,
            message: 'Inquiry received successfully'
        });
    } catch (error: any) {
        console.error('CRITICAL: API Error:', error);
        
        // Return a more descriptive error in development if you want, 
        // but for now let's keep it safe.
        return NextResponse.json(
            { 
                success: false, 
                message: 'Failed to process inquiry',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            },
            { status: 500 }
        );
    }
}

