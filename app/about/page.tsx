import HeroBanner from "../components/HeroBanner";
import { AboutContent } from "../api/about/route";

export const dynamic = "force-dynamic";

async function getAboutContent(): Promise<AboutContent | null> {
  // TODO: Replace with actual API call when backend is ready
  return {
    title: "About Bethesda House of Grace",
    subtitle: "A community of faith, hope, and love",
    history: "Founded in 1995, Bethesda House of Grace has been a beacon of spiritual guidance in our community.",
    mission: "To spread the Gospel of Jesus Christ and build a community of believers committed to spiritual growth, love, and service.",
    values: ["Faith", "Love", "Community", "Service", "Growth"],
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
        backgroundImage="/hero-bg.jpg"
      />

      {/* History */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">{about.history}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid gap-8 sm:grid-cols-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-blue-700 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">{about.mission}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-blue-700 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">{about.vision}</p>
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
    </main>
  );
}
