import { ministriesData, ministriesHero } from "../api/ministries/route";
import HeroBanner from "../components/HeroBanner";
import MinistryCard from "../components/MinistryCard";

export default async function MinistriesPage() {
  const ministries = ministriesData;
  const hero = ministriesHero;


  return (
    <main>
      {/* Hero Banner */}
      {/* <section className="relative flex items-center justify-center min-h-[400px] text-white bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 leading-tight">Ministries</h1>
          <p className="text-xl text-gray-200">
            Discover the many ways to grow, serve, and connect at Bethesda
            House of Grace.
          </p>
        </div>
      </section> */}
      <HeroBanner
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage="/hero-bg.jpg"
      />

      {/* Ministries Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Our Ministries
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Each ministry is a unique community where you can grow in faith and
            serve others.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((ministry) => (
              <MinistryCard key={ministry.id} ministry={ministry} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Reach out to us and we will help you find the right place to
            connect and grow.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
