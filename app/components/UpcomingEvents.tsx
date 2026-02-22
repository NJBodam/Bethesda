import { Event } from "../api/events/route";

interface UpcomingEventsProps {
  events: Event[];
}

function parseDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00");
}

function formatDate(dateStr: string) {
  return parseDate(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Upcoming Events
        </h2>
        {events.length === 0 ? (
          <p className="text-center text-gray-500">No upcoming events.</p>
        ) : (
          <ul className="space-y-6">
            {events.map((event) => (
              <li
                key={event.id}
                className="flex flex-col sm:flex-row gap-4 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 text-center bg-blue-600 text-white rounded-lg px-4 py-3 w-24 self-start">
                  <p className="text-xs uppercase font-semibold tracking-wide">
                    {parseDate(event.date).toLocaleDateString(
                      "en-US",
                      { month: "short" }
                    )}
                  </p>
                  <p className="text-3xl font-bold">
                    {parseDate(event.date).getDate()}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {formatDate(event.date)} &middot; {event.time} &middot;{" "}
                    {event.location}
                  </p>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
