const FALLBACK =
  "https://play.google.com/store/apps/details?id=com.mamanote.app";

export function getPlayStoreUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim();
  return fromEnv && /^https?:\/\//.test(fromEnv) ? fromEnv : FALLBACK;
}
