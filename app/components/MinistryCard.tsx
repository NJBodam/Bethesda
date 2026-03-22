import Link from "next/link";
import { Ministry } from "@/types/ministry";

interface MinistryCardProps {
  ministry: Ministry;
}

export default function MinistryCard({ ministry }: MinistryCardProps) {
  return (
    <Link
      href={`/ministries/${ministry.slug}`}
      className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
    >
      {/* Card image */}
      <div
        className="h-48 bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center"
        style={{
          backgroundImage: `url(${ministry.cardImage}), linear-gradient(to bottom right, #1e40af, #2563eb)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-9 h-9 text-white"
            aria-hidden="true"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
          {ministry.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed text-center flex-1 line-clamp-3">
          {ministry.shortDescription}
        </p>
        <div className="mt-4 flex justify-center">
          <span className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm group-hover:text-blue-800 transition-colors">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
