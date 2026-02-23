import { getSermon } from "@/lib/data";
import { notFound } from "next/navigation";
import EditSermonForm from "./EditSermonForm";

export default async function EditSermonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sermon = getSermon(id);
  if (!sermon) notFound();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Sermon</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <EditSermonForm sermon={sermon} />
      </div>
    </div>
  );
}
