import { Resend } from "resend";
import { siteConfig } from "./siteConfig";

const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024;
const MAX_ATTACHMENTS = 5;

const FIELD_LABELS: Record<string, string> = {
  name: "Full Name",
  phone: "Phone",
  email: "Email",
  projectLocation: "Project Address / ZIP",
  projectType: "Project Type",
  desiredStartDate: "Desired Start Date",
  investmentRange: "Approximate Investment",
  leadSource: "How They Heard About Us",
  message: "Project Details",
};

export type ContactLead = {
  fields: Record<string, string>;
  photos: File[];
};

export async function sendLeadEmail({ fields, photos }: ContactLead) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);

  const rows = Object.entries(FIELD_LABELS)
    .map(([key, label]) => {
      const value = fields[key]?.trim();
      if (!value) return null;
      return `<tr><td style="padding:4px 12px 4px 0;color:#5b6b76;white-space:nowrap;vertical-align:top;"><strong>${label}</strong></td><td style="padding:4px 0;">${escapeHtml(value)}</td></tr>`;
    })
    .filter(Boolean)
    .join("");

  const attachments = [];
  let attachmentBytes = 0;
  for (const photo of photos.slice(0, MAX_ATTACHMENTS)) {
    if (photo.size > MAX_ATTACHMENT_BYTES) continue;
    if (attachmentBytes + photo.size > MAX_ATTACHMENT_BYTES * MAX_ATTACHMENTS) break;
    attachmentBytes += photo.size;
    attachments.push({
      filename: photo.name || "photo.jpg",
      content: Buffer.from(await photo.arrayBuffer()),
    });
  }

  const { error } = await resend.emails.send({
    from: `${siteConfig.name} Website <leads@siskadesignbuild.com>`,
    to: siteConfig.contact.email,
    replyTo: fields.email || undefined,
    subject: `New lead: ${fields.name || "Website contact form"}`,
    html: `<table cellpadding="0" cellspacing="0">${rows}</table>`,
    attachments: attachments.length > 0 ? attachments : undefined,
  });

  if (error) {
    throw new Error(`Resend API error: ${error.message}`);
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
