import { notFound } from "next/navigation";
import { ministriesData } from "../../api/ministries/route";
import MemberCard from "../../components/MemberCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ministriesData.map((m) => ({ slug: m.slug }));
}

export default async function MinistryDetailPage({ params }: Props) {
  const { slug } = await params;
  const ministry = ministriesData.find((m) => m.slug === slug);

  if (!ministry) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-[500px] text-white"
        style={{
          backgroundImage: `url(${ministry.heroImage}), linear-gradient(to bottom right, #1e3a8a, #1d4ed8)`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            {ministry.title}
          </h1>
          <p className="text-xl text-gray-200">{ministry.shortDescription}</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            About This Ministry
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            {ministry.fullDescription}
          </p>

          {ministry.bulletPoints.length > 0 && (
            <ul className="space-y-3">
              {ministry.bulletPoints.map((point) => (
                <li key={point.id} className="flex items-start gap-3">
                  <span
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 h-3 text-blue-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 leading-relaxed">
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join This Ministry
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Interested in getting involved? We would love to hear from you.
            Reach out to us and take the next step.
          </p>
          <a
            href={`mailto:${ministry.contactEmail}`}
            className="inline-block text-blue-600 font-semibold text-lg hover:text-blue-800 transition-colors underline underline-offset-4 mb-6"
          >
            {ministry.contactEmail}
          </a>
          <div>
            <a
              href="/contact"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md"
            >
              Join this group
            </a>
          </div>
        </div>
      </section>

      {/* Members Section */}
      {ministry.members.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
              {ministry.membersTitle ?? "Ministry Members"}
            </h2>
            <p className="text-center text-gray-500 mb-10">
              Meet the people who make this ministry possible.
            </p>
            <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center">
              {ministry.members.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
