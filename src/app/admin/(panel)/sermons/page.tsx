import Link from "next/link";
import { getSermons } from "@/lib/data";
import DeleteButton from "@/components/admin/DeleteButton";

export default function SermonsPage() {
  const sermons = getSermons();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Sermons</h1>
        <Link
          href="/admin/sermons/new"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          + Add Sermon
        </Link>
      </div>

      {sermons.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center text-gray-400">
          No sermons yet.{" "}
          <Link href="/admin/sermons/new" className="text-blue-500 hover:underline">
            Add your first sermon
          </Link>
          .
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Speaker</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sermons.map((sermon) => (
                <tr key={sermon.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">{sermon.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{sermon.speaker}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{sermon.date}</td>
                  <td className="px-6 py-4 text-right space-x-3">
                    <Link
                      href={`/admin/sermons/${sermon.id}/edit`}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <DeleteButton id={sermon.id} endpoint="/api/sermons" redirectTo="/admin/sermons" label="Delete" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
