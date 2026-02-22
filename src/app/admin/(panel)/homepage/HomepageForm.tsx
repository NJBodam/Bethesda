"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { HomepageContent, ServiceTime } from "@/lib/types";

export default function HomepageForm({
  content,
}: {
  content: HomepageContent;
}) {
  const router = useRouter();
  const [form, setForm] = useState<HomepageContent>(content);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function updateField(field: keyof HomepageContent, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function updateServiceTime(
    idx: number,
    key: keyof ServiceTime,
    value: string
  ) {
    setForm((f) => {
      const times = [...f.serviceTimes];
      times[idx] = { ...times[idx], [key]: value };
      return { ...f, serviceTimes: times };
    });
  }

  function addServiceTime() {
    setForm((f) => ({
      ...f,
      serviceTimes: [...f.serviceTimes, { day: "", time: "", name: "" }],
    }));
  }

  function removeServiceTime(idx: number) {
    setForm((f) => ({
      ...f,
      serviceTimes: f.serviceTimes.filter((_, i) => i !== idx),
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);
    const res = await fetch("/api/homepage", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Failed to save");
    } else {
      setSuccess(true);
      router.refresh();
    }
  }

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg px-4 py-3">
          Homepage content saved successfully!
        </div>
      )}

      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-2">
          Hero Section
        </h2>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Hero Title</label>
            <input
              type="text"
              value={form.heroTitle}
              onChange={(e) => updateField("heroTitle", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Hero Subtitle</label>
            <input
              type="text"
              value={form.heroSubtitle}
              onChange={(e) => updateField("heroSubtitle", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Welcome Message</label>
            <textarea
              value={form.welcomeMessage}
              onChange={(e) => updateField("welcomeMessage", e.target.value)}
              rows={3}
              className={inputClass}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-2">
          About Section
        </h2>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>About Title</label>
            <input
              type="text"
              value={form.aboutTitle}
              onChange={(e) => updateField("aboutTitle", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>About Text</label>
            <textarea
              value={form.aboutText}
              onChange={(e) => updateField("aboutText", e.target.value)}
              rows={4}
              className={inputClass}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-2">
          Service Times
        </h2>
        <div>
          <label className={labelClass}>Section Title</label>
          <input
            type="text"
            value={form.serviceTimesTitle}
            onChange={(e) => updateField("serviceTimesTitle", e.target.value)}
            className={`${inputClass} mb-4`}
          />
        </div>
        <div className="space-y-3">
          {form.serviceTimes.map((st, idx) => (
            <div key={idx} className="flex gap-3 items-center">
              <input
                type="text"
                placeholder="Day (e.g. Sunday)"
                value={st.day}
                onChange={(e) => updateServiceTime(idx, "day", e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Time (e.g. 10:00 AM)"
                value={st.time}
                onChange={(e) => updateServiceTime(idx, "time", e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Service name"
                value={st.name}
                onChange={(e) => updateServiceTime(idx, "name", e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="button"
                onClick={() => removeServiceTime(idx)}
                className="text-red-500 hover:text-red-700 text-lg font-bold px-1"
                title="Remove"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addServiceTime}
          className="mt-3 text-sm text-blue-600 hover:underline"
        >
          + Add Service Time
        </button>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-2">
          Contact Information
        </h2>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Contact Email</label>
            <input
              type="email"
              value={form.contactEmail}
              onChange={(e) => updateField("contactEmail", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Contact Phone</label>
            <input
              type="text"
              value={form.contactPhone}
              onChange={(e) => updateField("contactPhone", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Address</label>
            <input
              type="text"
              value={form.address}
              onChange={(e) => updateField("address", e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      </section>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-300 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
        >
          {loading ? "Saving…" : "Save Homepage"}
        </button>
      </div>
    </form>
  );
}
