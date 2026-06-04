"use client";

import { DownloadAppButton } from "@/components/landing/waitlist/DownloadAppButton";
import { WaitlistShell } from "@/components/landing/waitlist/WaitlistShell";
import { getPlayStoreUrl } from "@/components/landing/lib/play-store-url";
import { isAppDownloadLive } from "@/lib/is-app-download-live";

const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL?.trim();
const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim();

export function ShareFooter() {
  const playUrl = getPlayStoreUrl();
  const live = isAppDownloadLive();
  const hasStoreLinks = Boolean(APP_STORE_URL || PLAY_STORE_URL);

  return (
    <WaitlistShell>
      <footer className="share-footer">
        <p className="share-footer-title">Track your own baby with MamaNote</p>
        <p className="share-footer-copy">
          Log sleep, feeds, diapers, and more — share read-only links with your partner or
          caregiver.
        </p>
        <div className="share-footer-actions">
          {live && APP_STORE_URL ? (
            <a className="share-footer-btn" href={APP_STORE_URL} rel="noopener noreferrer">
              App Store
            </a>
          ) : null}
          {live && PLAY_STORE_URL ? (
            <a className="share-footer-btn" href={PLAY_STORE_URL} rel="noopener noreferrer">
              Google Play
            </a>
          ) : null}
          {!live || !hasStoreLinks ? (
            <DownloadAppButton
              playUrl={playUrl}
              variant="share"
              source="share-footer"
              className="share-footer-btn"
            >
              Get the app
            </DownloadAppButton>
          ) : null}
          <a className="share-footer-btn share-footer-btn-secondary" href="/checkout">
            MamaNote Plus
          </a>
        </div>
      </footer>
    </WaitlistShell>
  );
}
