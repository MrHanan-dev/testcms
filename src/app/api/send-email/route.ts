import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure the Gmail SMTP transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // This must be an "App Password", not your regular password
    },
});

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Log submission to terminal for dev visibility
        console.log('--- NEW GMAIL FORM SUBMISSION ---', data.formType);
        console.log(JSON.stringify(data, null, 2));

        // If credentials are provided, send the actual email
        if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
            // Filter out base64 content from the terminal log/JSON preview for readability
            const cleanData = {
                ...data,
                files: data.files?.map((f: any) => ({ name: f.name, type: f.type, status: 'Attached' })) || []
            };

            const mailOptions: any = {
                from: `TotalPMP Site <${process.env.GMAIL_USER}>`,
                to: process.env.NOTIFICATION_EMAIL || 'contact@totalpmp.com',
                subject: `Website Lead: ${data.formType}`,
                attachments: data.files?.map((file: any) => ({
                    filename: file.name,
                    content: file.content,
                    encoding: 'base64',
                    contentType: file.type
                })),
                html: `
                    <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px;">
                        <h1 style="color: #002D5B; margin-bottom: 24px; border-bottom: 2px solid #002D5B; padding-bottom: 10px;">New ${data.formType}</h1>
                        <div style="background: #fdfdfd; padding: 24px; border-radius: 12px; border: 1px solid #f0f0f0;">
                            <h3 style="margin-top: 0; color: #555;">Submission Details:</h3>
                            <pre style="white-space: pre-wrap; margin: 0; font-size: 14px; color: #444; background: #fff; padding: 15px; border-radius: 8px;">${JSON.stringify(cleanData, null, 2)}</pre>
                        </div>
                        <p style="margin-top: 24px; font-size: 12px; color: #888; text-align: center;">
                            Sent from your TotalPMP corporate website enquiry system.
                        </p>
                    </div>
                `,
            };

            await transporter.sendMail(mailOptions);
        } else {
            console.warn('Gmail credentials missing. Submission logged but not emailed.');
        }

        return NextResponse.json({
            success: true,
            message: 'Enquiry processed via Gmail'
        });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        return NextResponse.json(
            { success: false, message: 'Submission failed' },
            { status: 500 }
        );
    }
}
