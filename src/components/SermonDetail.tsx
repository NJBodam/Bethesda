import type { Sermon } from '../types/sermon';

interface SermonDetailProps {
  sermon: Sermon;
  onBack: () => void;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function SermonDetail({ sermon, onBack }: SermonDetailProps) {
  return (
    <div className="sermon-detail">
      <button className="sermon-detail__back" onClick={onBack} type="button">
        ← Back to Sermons
      </button>

      <article className="sermon-detail__article">
        {sermon.series && (
          <p className="sermon-detail__series">{sermon.series}</p>
        )}
        <h1 className="sermon-detail__title">{sermon.title}</h1>

        <div className="sermon-detail__meta">
          <div className="sermon-detail__meta-item">
            <span className="sermon-detail__meta-label">Speaker</span>
            <span className="sermon-detail__meta-value">{sermon.speaker}</span>
          </div>
          <div className="sermon-detail__meta-item">
            <span className="sermon-detail__meta-label">Date</span>
            <span className="sermon-detail__meta-value">
              {formatDate(sermon.date)}
            </span>
          </div>
          <div className="sermon-detail__meta-item">
            <span className="sermon-detail__meta-label">Scripture</span>
            <span className="sermon-detail__meta-value">
              {sermon.scripture}
            </span>
          </div>
          {sermon.duration && (
            <div className="sermon-detail__meta-item">
              <span className="sermon-detail__meta-label">Duration</span>
              <span className="sermon-detail__meta-value">
                {sermon.duration}
              </span>
            </div>
          )}
        </div>

        <div className="sermon-detail__body">
          <h2 className="sermon-detail__body-heading">About This Sermon</h2>
          <p className="sermon-detail__description">{sermon.description}</p>
        </div>

        {(sermon.audioUrl || sermon.videoUrl) && (
          <div className="sermon-detail__media">
            <h2 className="sermon-detail__body-heading">Listen / Watch</h2>
            {sermon.audioUrl && (
              <audio controls src={sermon.audioUrl} className="sermon-detail__audio">
                Your browser does not support the audio element.
              </audio>
            )}
            {sermon.videoUrl && (
              <a
                href={sermon.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sermon-detail__video-link"
              >
                Watch Video →
              </a>
            )}
          </div>
        )}
      </article>
    </div>
  );
}
