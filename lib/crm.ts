// Pushes a new website lead straight into Siska CRM (crm.siskadesignbuild.com)
// as a contact + a "New" stage deal, via a shared-secret endpoint rather
// than the CRM's normal login session — see siska-crm/server.js's
// /api/leads/intake route. Best-effort: a failure here is logged but never
// blocks the customer's submission, since the email in lib/mail.ts is the
// primary, must-succeed notification.

export async function pushLeadToCrm(fields: Record<string, string>) {
  const baseUrl = process.env.CRM_API_URL;
  const secret = process.env.CRM_INTAKE_SECRET;
  if (!baseUrl || !secret) {
    console.warn("CRM_API_URL/CRM_INTAKE_SECRET not configured — skipping CRM lead sync");
    return;
  }

  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/leads/intake`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Intake-Secret": secret,
    },
    body: JSON.stringify({
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      address: fields.projectLocation,
      projectType: fields.projectType,
      leadSource: fields.leadSource,
      message: fields.message,
      desiredStartDate: fields.desiredStartDate,
    }),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(`CRM intake failed (${response.status}): ${body?.error || "unknown error"}`);
  }
}
