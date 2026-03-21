import Image from "next/image";
import { MinistryMember } from "@/types/ministry";

interface MemberCardProps {
  member: MinistryMember;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Circular avatar */}
      <div className="w-24 h-24 rounded-full bg-amber-100 border-4 border-amber-300 flex items-center justify-center mb-3 overflow-hidden">
        {member.imageUrl ? (
          <Image
            src={member.imageUrl}
            alt={member.name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-14 h-14 text-amber-400"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <p className="font-semibold text-gray-800 text-sm">{member.name}</p>
      <p className="text-gray-500 text-xs mt-0.5">{member.location}</p>
    </div>
  );
}
