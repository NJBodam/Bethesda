import { getEvent } from "@/lib/data";
import { notFound } from "next/navigation";
import EditEventForm from "./EditEventForm";

export default async function EditEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = getEvent(id);
  if (!event) notFound();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Event</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <EditEventForm event={event} />
      </div>
    </div>
  );
}
