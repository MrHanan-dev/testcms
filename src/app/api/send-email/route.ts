import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

        // If credentials are provided, send the actual email
        if (gmailUser && gmailPass) {
            // Filter out base64 content for clean terminal logs
            const cleanData = {
                ...data,
                files: data.files?.map((f: any) => ({ name: f.name, type: f.type, status: 'Attached' })) || []
            };

            const mailOptions: any = {
                from: `"TheAgileNest Support" <${gmailUser}>`,
                to: process.env.NOTIFICATION_EMAIL || 'info@totalqs.co.nz',
                subject: `[${data.formType}] Lead from theagilenest.com`,
                attachments: data.files?.map((file: any) => ({
                    filename: file.name,
                    content: file.content,
                    encoding: 'base64',
                    contentType: file.type
                })),
                html: `
                    <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px;">
                        <h1 style="color: #002D5B; margin-bottom: 24px; border-bottom: 2px solid #002D5B; padding-bottom: 10px;">New Website Inquiry</h1>
                        <div style="background: #fdfdfd; padding: 24px; border-radius: 12px; border: 1px solid #f0f0f0;">
                            <h3 style="margin-top: 0; color: #555; text-transform: uppercase; font-size: 13px;">Inquiry Type: <span style="color: #002D5B;">${data.formType}</span></h3>
                            <div style="background: #fff; padding: 15px; border-radius: 8px; border: 1px solid #eee;">
                                <pre style="white-space: pre-wrap; margin: 0; font-size: 14px; color: #444;">${JSON.stringify(cleanData, null, 2)}</pre>
                            </div>
                        </div>
                        <p style="margin-top: 24px; font-size: 12px; color: #888; text-align: center;">
                            Sent from THEAGILENEST digital systems.
                        </p>
                    </div>
                `,
            };

            await transporter.sendMail(mailOptions);
            console.log('✓ Email sent successfully via Gmail');
        } else {
            console.warn('⚠ Gmail credentials missing. Check your .env.local file.');
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

