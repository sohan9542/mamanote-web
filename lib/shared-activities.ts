import { cache } from "react";

export interface SharedActivityEntry {
  id: string;
  title: string;
  detail: string;
  startedAt: string;
  type: string;
  activityId: string | null;
}

export interface SharedActivityPayload {
  babyName: string;
  babyAge: string;
  filterLabel: string;
  sharedAt: string;
  expiresAt: string;
  entryCount: number;
  entries: SharedActivityEntry[];
}

export class ShareFetchError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = "ShareFetchError";
  }
}

function getSupabaseConfig(): { url: string; anonKey: string } {
  const url = process.env.SUPABASE_URL?.trim();
  const anonKey = process.env.SUPABASE_ANON_KEY?.trim();
  if (!url || !anonKey) {
    throw new ShareFetchError("Share viewer is not configured", 500);
  }
  return { url, anonKey };
}

export async function fetchSharedActivities(
  token: string,
): Promise<SharedActivityPayload> {
  const { url, anonKey } = getSupabaseConfig();

  const res = await fetch(
    `${url}/functions/v1/get-shared-activities?token=${encodeURIComponent(token)}`,
    {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
      next: { revalidate: 60 },
    },
  );

  const body = (await res.json().catch(() => ({}))) as SharedActivityPayload & {
    error?: string;
  };

  if (!res.ok) {
    throw new ShareFetchError(
      body.error ?? "Could not load this share link",
      res.status,
    );
  }

  return body;
}

export const getSharedActivities = cache(fetchSharedActivities);

export function isValidShareToken(token: string): boolean {
  return /^[a-f0-9]{16,64}$/i.test(token);
}

export function shareErrorMessage(status: number, fallback?: string): string {
  switch (status) {
    case 400:
      return fallback ?? "This share link is invalid.";
    case 404:
      return fallback ?? "This share link was not found. It may have been removed.";
    case 410:
      return fallback ?? "This share link has expired. Ask for a new link from the app.";
    default:
      return fallback ?? "Something went wrong loading this log. Please try again later.";
  }
}
