"use client";

import AdminForm from "@/components/admin/AdminForm";
import { useRouter } from "next/navigation";
import { Sermon } from "@/lib/types";

const SERMON_FIELDS = [
  { name: "title", label: "Title", type: "text" as const, required: true },
  { name: "speaker", label: "Speaker", type: "text" as const, required: true },
  { name: "date", label: "Date", type: "date" as const, required: true },
  { name: "description", label: "Description", type: "textarea" as const },
  { name: "videoUrl", label: "Video URL", type: "url" as const },
  { name: "audioUrl", label: "Audio URL", type: "url" as const },
];

export default function EditSermonForm({ sermon }: { sermon: Sermon }) {
  const router = useRouter();

  async function handleSubmit(values: Record<string, string>) {
    const res = await fetch(`/api/sermons/${sermon.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to update sermon");
    }
    router.push("/admin/sermons");
    router.refresh();
  }

  return (
    <AdminForm
      fields={SERMON_FIELDS}
      initialValues={sermon as unknown as Record<string, string>}
      submitLabel="Save Changes"
      onSubmit={handleSubmit}
      cancelHref="/admin/sermons"
    />
  );
}
