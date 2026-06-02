import type { SharedActivityPayload } from "@/lib/shared-activities";
import { activityStyle } from "@/lib/activity-style";
import { formatDate, formatRelativeFuture, formatTime } from "@/lib/format";
import { ShareFooter } from "./ShareFooter";

interface Props {
  data: SharedActivityPayload;
}

export function ShareActivityLog({ data }: Props) {
  return (
    <main className="share-layout">
      <div className="share-shell">
        <header className="share-brand">
          <span className="share-brand-mark" aria-hidden>
            ✦
          </span>
          <span className="share-brand-name">MamaNote</span>
          <span className="share-brand-tag">Shared log</span>
        </header>

        <section className="share-header-card" aria-labelledby="share-baby-name">
          <h1 id="share-baby-name">{data.babyName}</h1>
          <p className="share-baby-age">{data.babyAge} old</p>
          <div className="share-badges">
            <span className="share-badge share-badge-lavender">{data.filterLabel}</span>
            <span className="share-badge share-badge-muted">
              {data.entryCount} {data.entryCount === 1 ? "activity" : "activities"}
            </span>
          </div>
          <p className="share-meta">
            Shared {formatDate(data.sharedAt)} · Expires {formatRelativeFuture(data.expiresAt)}
          </p>
        </section>

        <section className="share-list" aria-label="Activity log">
          {data.entries.length === 0 ? (
            <div className="share-empty">
              <p>No activities in this share yet.</p>
            </div>
          ) : (
            <ul className="share-entries">
              {data.entries.map((entry) => {
                const style = activityStyle(entry.activityId, entry.type);
                return (
                  <li key={entry.id} className="share-entry">
                    <span
                      className="share-entry-icon"
                      style={{ backgroundColor: style.bg }}
                      aria-hidden
                    >
                      {style.emoji}
                    </span>
                    <div className="share-entry-body">
                      <p className="share-entry-title">{entry.title}</p>
                      <p className="share-entry-detail">{entry.detail}</p>
                      <p className="share-entry-time">
                        {formatDate(entry.startedAt)} · {formatTime(entry.startedAt)}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <ShareFooter />
      </div>
    </main>
  );
}
