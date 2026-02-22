"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface DeleteButtonProps {
  id: string;
  endpoint: string;
  redirectTo: string;
  label?: string;
}

export default function DeleteButton({
  id,
  endpoint,
  redirectTo,
  label = "Delete",
}: DeleteButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this item?")) return;
    setLoading(true);
    setError("");
    const res = await fetch(`${endpoint}/${id}`, { method: "DELETE" });
    if (!res.ok) {
      setError("Failed to delete. Please try again.");
      setLoading(false);
      return;
    }
    router.push(redirectTo);
    router.refresh();
  }

  return (
    <>
      {error && <span className="text-xs text-red-500 mr-2">{error}</span>}
      <button
        onClick={handleDelete}
        disabled={loading}
        className="text-sm text-red-600 hover:underline disabled:opacity-50"
      >
        {loading ? "Deleting…" : label}
      </button>
    </>
  );
}
