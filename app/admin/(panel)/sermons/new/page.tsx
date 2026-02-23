"use client";

import AdminForm from "@/components/admin/AdminForm";
import { useRouter } from "next/navigation";

const SERMON_FIELDS = [
  { name: "title", label: "Title", type: "text" as const, required: true, placeholder: "Enter sermon title" },
  { name: "speaker", label: "Speaker", type: "text" as const, required: true, placeholder: "Enter speaker name" },
  { name: "date", label: "Date", type: "date" as const, required: true },
  { name: "description", label: "Description", type: "textarea" as const, placeholder: "Enter sermon description" },
  { name: "videoUrl", label: "Video URL", type: "url" as const, placeholder: "https://youtube.com/watch?v=..." },
  { name: "audioUrl", label: "Audio URL", type: "url" as const, placeholder: "https://example.com/audio.mp3" },
];

export default function NewSermonPage() {
  const router = useRouter();

  async function handleSubmit(values: Record<string, string>) {
    // TODO: Replace with actual API call when backend is ready
    console.log("New sermon submitted:", values);
    // Simulate API success
    router.push("/admin/sermons");
    router.refresh();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Sermon</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <AdminForm
          fields={SERMON_FIELDS}
          submitLabel="Create Sermon"
          onSubmit={handleSubmit}
          cancelHref="/admin/sermons"
        />
      </div>
    </div>
  );
}
