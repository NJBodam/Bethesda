"use client";

import AdminForm from "@/components/admin/AdminForm";
import { useRouter } from "next/navigation";

const EVENT_FIELDS = [
  { name: "title", label: "Title", type: "text" as const, required: true, placeholder: "Enter event title" },
  { name: "date", label: "Date", type: "date" as const, required: true },
  { name: "time", label: "Time", type: "time" as const, required: true },
  { name: "location", label: "Location", type: "text" as const, required: true, placeholder: "Enter location" },
  { name: "description", label: "Description", type: "textarea" as const, placeholder: "Enter event description" },
  { name: "imageUrl", label: "Image URL", type: "url" as const, placeholder: "https://example.com/image.jpg" },
];

export default function NewEventPage() {
  const router = useRouter();

  async function handleSubmit(values: Record<string, string>) {
    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to create event");
    }
    router.push("/admin/events");
    router.refresh();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Event</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <AdminForm
          fields={EVENT_FIELDS}
          submitLabel="Create Event"
          onSubmit={handleSubmit}
          cancelHref="/admin/events"
        />
      </div>
    </div>
  );
}
