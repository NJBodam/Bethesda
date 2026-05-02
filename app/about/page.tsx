import HeroBanner from "../components/HeroBanner";
import { AboutContent } from "../api/about/route";
import basptism2 from "../../src/assets/baptism2.jpg";

export const dynamic = "force-dynamic";

async function getAboutContent(): Promise<AboutContent | null> {
  // TODO: Replace with actual API call when backend is ready
  return {
    title: "About Bethesda House of Grace",
    subtitle: "A community of faith, hope, and love",
    history: "We are a loving and welcoming Church. Our community is passionate about God and people."+ 
    " No matter where you come from or what your past looks like, you are welcome here." +
     " \n\nWe believe in: \n God's love for everyone, the power of prayer, and a life transformed through Jesus Christ.",
    mission: "To spread the Gospel of Jesus Christ and build a community of believers committed to spiritual growth, love, and service.",
    vision: "To be a beacon of hope and light in our community, where every believer is transformed by God's Word.",
    values: [
      { title: "Faith", description: "Trust in God's promises" },
      { title: "Love", description: "Compassion and kindness to all" },
      { title: "Community", description: "United in fellowship and purpose" },
      { title: "Service", description: "Dedicated to helping others" },
      { title: "Growth", description: "Continuous spiritual development" },
    ],
    pastor: {
      name: "Pastor Stephen Essah",
      title: "Resident Pastor",
      bio: "Pastor Stephen Essah has been leading Bethesda House of Grace since its founding in 1995. With a heart for people and a passion for the Word, he is dedicated to helping every member discover their purpose in Christ.",
    },
  };
}

export default async function AboutPage() {
  const about = await getAboutContent();

  if (!about) {
    return (
      <main>
        <p className="text-center py-16 text-gray-500">
          About content unavailable.
        </p>
      </main>
    );
  }

  return (
    <main>
      <HeroBanner
        title={about.title}
        subtitle={about.subtitle}
        backgroundImage={basptism2.src}
      />

      {/* History */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Church
          </h2>
          <p className="text-gray-600 leading-relaxed text-xl whitespace-pre-line mt-2 text-center">{about.history}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid gap-8 sm:grid-cols-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-blue-700 mb-3">Our Mission</h3>
            <p className="text-gray-600 text-x leading-relaxed">{about.mission}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-blue-700 mb-3">Our Vision</h3>
            <p className="text-gray-600 text-x leading-relaxed">{about.vision}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((value) => (
              <div key={value.title} className="bg-blue-800/60 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pastor */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Meet Our Pastor
          </h2>
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              {about.pastor.name}
            </h3>
            <p className="text-blue-600 font-semibold mb-4">
              {about.pastor.title}
            </p>
            <p className="text-gray-600 leading-relaxed">{about.pastor.bio}</p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Our Leadership Team
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Dedicated servants leading our congregation with faith and purpose.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "John Doe",
                role: "Assistant Pastor & Head of Administration",
              },
              {
                name: "John Doe",
                role: "Assistant Pastor & Head of Finance",
              },
              {
                name: "John Doe",
                role: "Assistant Pastor & Choir Master",
              },
              {
                name: "John Doe",
                role: "Assistant Pastor",
              },
              {
                name: "John Doe",
                role: "Branch Pastor",
              },
            ].map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center"
              >
                {/* Portrait placeholder */}
                <div className="w-24 h-24 rounded-full bg-amber-100 border-4 border-amber-300 flex items-center justify-center mb-4 overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-16 h-16 text-amber-400"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {leader.name}
                </h3>
                <p className="text-blue-600 text-sm font-medium leading-snug">
                  {leader.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
