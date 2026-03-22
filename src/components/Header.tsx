'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/bethesda_logo.png';

export function Header() {
  return (
    <header className="bg-white text-black py-4 px-6 shadow-md">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Bethesda House of Grace Logo"
            width={50}
            height={50}
            className="h-15 w-15"
          />
          <span className="font-bold text-black-400 text-xl hover:text-yellow-300 transition-colors">
            Bethesda House of Grace
          </span>
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/about" className="hover:text-yellow-400 transition-colors font-semibold">
            About
          </Link>
          <Link href="/ministries" className="hover:text-yellow-400 transition-colors">
            Ministries
          </Link>
          <a href="/#sermons" className="hover:text-yellow-400 transition-colors">
            Sermons
          </a>
          <a href="/#events" className="hover:text-yellow-400 transition-colors font-semibold">
            Events
          </a>
          <Link href="/contact" className="hover:text-yellow-400 transition-colors font-semibold">
            Contact
          </Link>
          <Link href="/admin/login" className="text-gray-400 hover:text-yellow-300 transition-colors font-semibold">
            Admin
          </Link>
        </div>
      </nav>
    </header>
  );
}
