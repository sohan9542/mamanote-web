/** When true, download CTAs link to the store; otherwise the launch waitlist modal opens. */
export function isAppDownloadLive(): boolean {
  return process.env.NEXT_PUBLIC_APP_DOWNLOAD_LIVE?.trim() === "true";
}
