import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getPayload } from 'payload';
import config from '@payload-config';

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
    try {
        const data = await req.json();

        // Log submission to terminal for dev visibility
        console.log('--- NEW FORM SUBMISSION ---', data.formType);
        console.log('Submission Data:', JSON.stringify(data, null, 2));

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

            // Generate HTML rows only for mapped fields
            const dataRows = Object.entries(data)
                .filter(([key]) => mapping[key]) // Only include fields that have a mapping
                .map(([key, value]) => `
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                            <strong style="color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">${mapping[key]}</strong>
                            <div style="color: #333; font-size: 16px; margin-top: 4px; font-weight: 500; white-space: pre-wrap;">${value || 'Not provided'}</div>
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
                subject: `[${data.formType}] Lead from ${data.fullName || data.firstName || 'New Inquiry'}`,
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
                                <p style="color: #93c5fd; margin: 8px 0 0 0; text-transform: uppercase; font-size: 12px; font-weight: 700; letter-spacing: 1px;">${data.formType}</p>
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
                                                <span style="color: #3b82f6; margin-right: 8px;">📎</span> ${f.name}
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

