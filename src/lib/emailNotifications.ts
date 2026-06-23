import type { CollectionAfterChangeHook } from "payload";

/**
 * Email Notifications — Send notifications for important events.
 * WordPress-style email alerts for new leads and comments.
 */

interface EmailPayload {
  to: string[];
  subject: string;
  html: string;
}

/**
 * Send email notification (placeholder - implement with your email provider)
 * Supports: Resend, SendGrid, Mailgun, SMTP, etc.
 */
async function sendEmail(email: EmailPayload): Promise<boolean> {
  // Check if we have Resend configured
  const resendApiKey = process.env.RESEND_API_KEY;
  
  if (resendApiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || "CMS <noreply@theagilenest.co.nz>",
          to: email.to,
          subject: email.subject,
          html: email.html,
        }),
      });
      return response.ok;
    } catch (error) {
      console.error("Email send error:", error);
      return false;
    }
  }

  // Fallback: just log to console
  console.log("📧 Email notification (no provider configured):", {
    to: email.to,
    subject: email.subject,
  });
  return true;
}

/**
 * Get notification recipients from site settings
 */
async function getNotificationEmails(payload: any): Promise<string[]> {
  try {
    const settings = await payload.findGlobal({ slug: "siteSettings" });
    const emails = settings?.notificationEmails?.map((e: any) => e.email) || [];
    return emails.length > 0 ? emails : [process.env.ADMIN_EMAIL || "admin@theagilenest.co.nz"];
  } catch {
    return [process.env.ADMIN_EMAIL || "admin@theagilenest.co.nz"];
  }
}

/**
 * Hook: Send email when new lead is created
 */
export const notifyNewLead: CollectionAfterChangeHook = async ({
  doc,
  req,
  operation,
}) => {
  if (operation !== "create") return doc;

  // Never block lead creation — email runs in background (Neon transaction safety).
  void (async () => {
    const { payload } = req;
    try {
      const settings = await payload.findGlobal({ slug: "siteSettings" });
      if (!settings?.emailNotifyNewLead) return;

      const recipients = await getNotificationEmails(payload);
      await sendEmail({
        to: recipients,
        subject: `🔔 New Enquiry from ${doc.name || "Website Visitor"}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0B3C5D 0%, #1a5a7a 100%); padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📬 New Website Enquiry</h1>
          </div>
          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 100px;">Name:</td>
                <td style="padding: 8px 0; font-weight: 600;">${doc.name || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${doc.email}" style="color: #0B3C5D;">${doc.email || "N/A"}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;">Phone:</td>
                <td style="padding: 8px 0;">${doc.phone || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;">Subject:</td>
                <td style="padding: 8px 0;">${doc.subject || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;">Source:</td>
                <td style="padding: 8px 0;">${doc.source || "Website"}</td>
              </tr>
            </table>
            ${doc.message ? `
              <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="color: #64748b; margin: 0 0 8px 0; font-size: 12px;">MESSAGE:</p>
                <p style="margin: 0; white-space: pre-wrap;">${doc.message}</p>
              </div>
            ` : ""}
            <div style="margin-top: 24px; text-align: center;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL || ""}/admin/collections/leads/${doc.id}" 
                 style="display: inline-block; background: #0B3C5D; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600;">
                View in CMS →
              </a>
            </div>
          </div>
          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 16px;">
            TheAgileNest CMS Notification
          </p>
        </div>
      `,
      });
    } catch (error) {
      console.error("Failed to send lead notification:", error);
    }
  })();

  return doc;
};

/**
 * Hook: Send email when new comment is submitted
 */
export const notifyNewComment: CollectionAfterChangeHook = async ({
  doc,
  req,
  operation,
}) => {
  if (operation !== "create") return doc;

  void (async () => {
    const { payload } = req;
    try {
      const settings = await payload.findGlobal({ slug: "siteSettings" });
      if (!settings?.emailNotifyNewComment) return;

      const recipients = await getNotificationEmails(payload);

      let postTitle = "Unknown Post";
      if (doc.post) {
        try {
          const post = await payload.findByID({ collection: "posts", id: doc.post });
          postTitle = post?.title || "Unknown Post";
        } catch {}
      }

      await sendEmail({
        to: recipients,
        subject: `💬 New Comment on "${postTitle}"`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">💬 New Comment</h1>
          </div>
          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
            <p style="margin: 0 0 8px 0; color: #64748b;">On article:</p>
            <p style="margin: 0 0 16px 0; font-weight: 600; font-size: 18px;">${postTitle}</p>
            
            <div style="padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="margin: 0 0 8px 0;"><strong>${doc.author}</strong> <span style="color: #64748b;">(${doc.email})</span></p>
              <p style="margin: 0; white-space: pre-wrap;">${doc.content}</p>
            </div>
            
            <div style="margin-top: 24px; text-align: center;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL || ""}/admin/collections/comments/${doc.id}" 
                 style="display: inline-block; background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600;">
                Moderate Comment →
              </a>
            </div>
          </div>
        </div>
      `,
      });
    } catch (error) {
      console.error("Failed to send comment notification:", error);
    }
  })();

  return doc;
};
