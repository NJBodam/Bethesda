import Link from "next/link";
import { getSermons, getEvents } from "@/lib/data";

export default function AdminDashboard() {
  const sermons = getSermons();
  const events = getEvents();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
      <p className="text-gray-500 mb-8">
        Welcome to the Bethesda House of Grace admin panel.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard
          label="Total Sermons"
          value={sermons.length}
          icon="📖"
          href="/admin/sermons"
          color="bg-blue-500"
        />
        <StatCard
          label="Total Events"
          value={events.length}
          icon="📅"
          href="/admin/events"
          color="bg-green-500"
        />
        <StatCard
          label="Homepage"
          value="Edit"
          icon="✏️"
          href="/admin/homepage"
          color="bg-yellow-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RecentSection
          title="Recent Sermons"
          items={sermons.slice(-5).reverse().map((s) => ({
            id: s.id,
            title: s.title,
            subtitle: `${s.speaker} · ${s.date}`,
            editHref: `/admin/sermons/${s.id}/edit`,
          }))}
          addHref="/admin/sermons/new"
          listHref="/admin/sermons"
        />
        <RecentSection
          title="Upcoming Events"
          items={events.slice(-5).reverse().map((e) => ({
            id: e.id,
            title: e.title,
            subtitle: `${e.date} · ${e.time}`,
            editHref: `/admin/events/${e.id}/edit`,
          }))}
          addHref="/admin/events/new"
          listHref="/admin/events"
        />
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
  href,
  color,
}: {
  label: string;
  value: string | number;
  icon: string;
  href: string;
  color: string;
}) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-xl shadow p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-2xl text-white`}
        >
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </Link>
  );
}

function RecentSection({
  title,
  items,
  addHref,
  listHref,
}: {
  title: string;
  items: { id: string; title: string; subtitle: string; editHref: string }[];
  addHref: string;
  listHref: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
        <Link
          href={addHref}
          className="text-sm text-blue-600 hover:underline"
        >
          + Add New
        </Link>
      </div>
      {items.length === 0 ? (
        <p className="text-gray-400 text-sm">No items yet.</p>
      ) : (
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0"
            >
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {item.title}
                </p>
                <p className="text-xs text-gray-400">{item.subtitle}</p>
              </div>
              <Link
                href={item.editHref}
                className="text-xs text-blue-600 hover:underline"
              >
                Edit
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Link
        href={listHref}
        className="mt-4 block text-xs text-gray-400 hover:text-gray-600 hover:underline"
      >
        View all →
      </Link>
    </div>
  );
}
