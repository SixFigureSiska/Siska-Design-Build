import { NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/mail";

const TEXT_FIELDS = [
  "name",
  "phone",
  "email",
  "projectLocation",
  "projectType",
  "desiredStartDate",
  "investmentRange",
  "leadSource",
  "message",
];

export async function POST(request: Request) {
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

  return NextResponse.json({ ok: true });
}
