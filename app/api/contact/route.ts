import { NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/mail";
import { pushLeadToCrm } from "@/lib/crm";
import { checkLimit, clientIp } from "@/lib/rateLimit";

const TEXT_FIELDS = [
  "name",
  "phone",
  "email",
  "projectLocation",
  "projectType",
  "desiredStartDate",
  "leadSource",
  "message",
];

export async function POST(request: Request) {
  if (!checkLimit(`contact:${clientIp(request)}`, 5, 60 * 60 * 1000)) {
    return NextResponse.json(
      { error: "Too many requests — please try again later." },
      { status: 429, headers: { "Retry-After": "3600" } }
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission" }, { status: 400 });
  }

  if (!formData.get("consent")) {
    return NextResponse.json({ error: "Consent is required" }, { status: 400 });
  }

  const fields: Record<string, string> = {};
  for (const key of TEXT_FIELDS) {
    const value = formData.get(key);
    if (typeof value === "string") fields[key] = value;
  }

  if (!fields.name || !fields.email || !fields.phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const photos = formData.getAll("projectPhotos").filter((entry): entry is File => entry instanceof File && entry.size > 0);

  try {
    await sendLeadEmail({ fields, photos });
  } catch (error) {
    console.error("Failed to send lead email", error);
    return NextResponse.json({ error: "Could not send your request. Please call or email us directly." }, { status: 502 });
  }

  // Best-effort: the CRM sync is a convenience, not the record of truth —
  // the email above already has everything, so a CRM hiccup shouldn't fail
  // a customer's submission.
  try {
    await pushLeadToCrm(fields);
  } catch (error) {
    console.error("Failed to push lead to CRM", error);
  }

  return NextResponse.json({ ok: true });
}
