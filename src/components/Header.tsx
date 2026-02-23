'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="font-bold text-yellow-400 text-xl hover:text-yellow-300 transition-colors">
          Bethesda House of Grace
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/about" className="hover:text-yellow-400 transition-colors">
            About
          </Link>
          <a href="/#sermons" className="hover:text-yellow-400 transition-colors">
            Sermons
          </a>
          <a href="/#events" className="hover:text-yellow-400 transition-colors">
            Events
          </a>
          <Link href="/contact" className="hover:text-yellow-400 transition-colors">
            Contact
          </Link>
          <Link href="/admin/login" className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold">
            Admin
          </Link>
        </div>
      </nav>
    </header>
  );
}
