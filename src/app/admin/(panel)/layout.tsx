import type { Metadata } from "next";
import Sidebar from "@/components/admin/Sidebar";
import Providers from "@/components/admin/Providers";

export const metadata: Metadata = {
  title: "Admin Panel – Bethesda House of Grace",
  description: "Admin panel for managing church content",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </div>
    </Providers>
  );
}
