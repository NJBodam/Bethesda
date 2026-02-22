import { Sermon } from "../api/sermons/route";

interface LatestSermonProps {
  sermon: Sermon;
}

export default function LatestSermon({ sermon }: LatestSermonProps) {
  const formattedDate = new Date(sermon.date + "T00:00:00").toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Latest Sermon
        </h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-2">
            {sermon.series}
          </p>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {sermon.title}
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            {sermon.speaker} &middot; {formattedDate}
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            {sermon.description}
          </p>
          <div className="flex gap-4 flex-wrap">
            {sermon.videoUrl && (
              <a
                href={sermon.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Video
              </a>
            )}
            {sermon.audioUrl && (
              <a
                href={sermon.audioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
              >
                Listen to Audio
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
