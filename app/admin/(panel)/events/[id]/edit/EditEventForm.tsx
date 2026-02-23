"use client";

import AdminForm from "@/components/admin/AdminForm";
import { useRouter } from "next/navigation";
import { Event } from "@/lib/types";

const EVENT_FIELDS = [
  { name: "title", label: "Title", type: "text" as const, required: true },
  { name: "date", label: "Date", type: "date" as const, required: true },
  { name: "time", label: "Time", type: "time" as const, required: true },
  { name: "location", label: "Location", type: "text" as const, required: true },
  { name: "description", label: "Description", type: "textarea" as const },
  { name: "imageUrl", label: "Image URL", type: "url" as const },
];

export default function EditEventForm({ event }: { event: Event }) {
  const router = useRouter();

  async function handleSubmit(values: Record<string, string>) {
    // TODO: Replace with actual API call when backend is ready
    console.log("Event update submitted:", values);
    // Simulate API success
    router.push("/admin/events");
    router.refresh();
  }

  return (
    <AdminForm
      fields={EVENT_FIELDS}
      initialValues={event as unknown as Record<string, string>}
      submitLabel="Save Changes"
      onSubmit={handleSubmit}
      cancelHref="/admin/events"
    />
  );
}
