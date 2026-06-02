export default function ShareLoading() {
  return (
    <main className="share-layout">
      <div className="share-shell">
        <header className="share-brand">
          <span className="share-brand-mark" aria-hidden>
            ✦
          </span>
          <span className="share-brand-name">MamaNote</span>
        </header>

        <div className="share-loading">
          <div className="spinner" aria-label="Loading shared activity log" />
          <p>Loading shared activities…</p>
        </div>
      </div>
    </main>
  );
}
