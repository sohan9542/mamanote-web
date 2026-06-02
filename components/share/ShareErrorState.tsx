import { ShareFooter } from "./ShareFooter";

interface Props {
  title: string;
  message: string;
}

export function ShareErrorState({ title, message }: Props) {
  return (
    <main className="share-layout">
      <div className="share-shell">
        <header className="share-brand">
          <span className="share-brand-mark" aria-hidden>
            ✦
          </span>
          <span className="share-brand-name">MamaNote</span>
        </header>

        <div className="share-error-card">
          <span className="share-error-icon" aria-hidden>
            🔗
          </span>
          <h1>{title}</h1>
          <p>{message}</p>
        </div>

        <ShareFooter />
      </div>
    </main>
  );
}
