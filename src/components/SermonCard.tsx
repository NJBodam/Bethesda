import type { Sermon } from '../types/sermon';

interface SermonCardProps {
  sermon: Sermon;
  onClick: (sermon: Sermon) => void;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function SermonCard({ sermon, onClick }: SermonCardProps) {
  return (
    <article
      className="sermon-card"
      onClick={() => onClick(sermon)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(sermon)}
      aria-label={`View sermon: ${sermon.title}`}
    >
      <div className="sermon-card__meta">
        <span className="sermon-card__date">{formatDate(sermon.date)}</span>
        {sermon.series && (
          <span className="sermon-card__series">{sermon.series}</span>
        )}
      </div>
      <h3 className="sermon-card__title">{sermon.title}</h3>
      <p className="sermon-card__speaker">{sermon.speaker}</p>
      <p className="sermon-card__scripture">{sermon.scripture}</p>
      <p className="sermon-card__description">{sermon.description}</p>
      {sermon.duration && (
        <span className="sermon-card__duration">{sermon.duration}</span>
      )}
    </article>
  );
}
