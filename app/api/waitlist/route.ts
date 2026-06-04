import { NextResponse } from "next/server";
import { getSupabaseServerConfig, normalizeWaitlistEmail } from "@/lib/waitlist";

type WaitlistBody = {
  email?: string;
  source?: string;
  website?: string;
};

export async function POST(request: Request) {
  let body: WaitlistBody;
  try {
    body = (await request.json()) as WaitlistBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const email = normalizeWaitlistEmail(body.email ?? "");
  if (!email) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const config = getSupabaseServerConfig();
  if (!config) {
    return NextResponse.json(
      { error: "Waitlist is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  const source =
    typeof body.source === "string" ? body.source.trim().slice(0, 64) || null : null;

  const res = await fetch(`${config.url}/rest/v1/launch_waitlist`, {
    method: "POST",
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${config.anonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ email, source }),
  });

  if (res.ok) {
    return NextResponse.json({ ok: true });
  }

  if (res.status === 409) {
    return NextResponse.json({
      ok: true,
      alreadySubscribed: true,
    });
  }

  const detail = await res.text().catch(() => "");
  console.error("waitlist insert failed", res.status, detail);
  return NextResponse.json(
    { error: "Could not save your email. Please try again." },
    { status: 500 },
  );
}
