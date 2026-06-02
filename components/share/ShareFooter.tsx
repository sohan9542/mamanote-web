const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL?.trim();
const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim();

export function ShareFooter() {
  const hasStoreLinks = Boolean(APP_STORE_URL || PLAY_STORE_URL);

  return (
    <footer className="share-footer">
      <p className="share-footer-title">Track your own baby with MamaNote</p>
      <p className="share-footer-copy">
        Log sleep, feeds, diapers, and more — share read-only links with your partner or
        caregiver.
      </p>
      <div className="share-footer-actions">
        {APP_STORE_URL ? (
          <a className="share-footer-btn" href={APP_STORE_URL} rel="noopener noreferrer">
            App Store
          </a>
        ) : null}
        {PLAY_STORE_URL ? (
          <a className="share-footer-btn" href={PLAY_STORE_URL} rel="noopener noreferrer">
            Google Play
          </a>
        ) : null}
        {!hasStoreLinks ? (
          <span className="share-footer-note">Download MamaNote on iOS or Android</span>
        ) : null}
        <a className="share-footer-btn share-footer-btn-secondary" href="/checkout">
          MamaNote Plus
        </a>
      </div>
    </footer>
  );
}
