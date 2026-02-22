import { getHomepage, getSermons, getEvents } from "@/lib/data";

export default function Home() {
  const hp = getHomepage();
  const sermons = getSermons().slice(-3).reverse();
  const events = getEvents().slice(-3).reverse();

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <span className="font-bold text-yellow-400 text-xl">Bethesda House of Grace</span>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
          <a href="#sermons" className="hover:text-yellow-400 transition-colors">Sermons</a>
          <a href="#events" className="hover:text-yellow-400 transition-colors">Events</a>
          <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
          {hp.heroTitle}
        </h1>
        <p className="text-xl text-gray-300 mb-6">{hp.heroSubtitle}</p>
        <p className="text-gray-400 max-w-2xl mx-auto">{hp.welcomeMessage}</p>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{hp.aboutTitle}</h2>
        <p className="text-gray-600 leading-relaxed">{hp.aboutText}</p>
      </section>

      {/* Service Times */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{hp.serviceTimesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hp.serviceTimes.map((st, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-5 border border-gray-100">
                <p className="font-semibold text-gray-700">{st.name}</p>
                <p className="text-gray-500 text-sm">{st.day} · {st.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Sermons */}
      <section id="sermons" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent Sermons</h2>
        {sermons.length === 0 ? (
          <p className="text-gray-400">No sermons available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sermons.map((s) => (
              <div key={s.id} className="bg-white rounded-xl shadow p-5 border border-gray-100">
                <p className="text-xs text-gray-400 mb-1">{s.date}</p>
                <h3 className="font-semibold text-gray-800 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.speaker}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Upcoming Events */}
      <section id="events" className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
          {events.length === 0 ? (
            <p className="text-gray-400">No events scheduled yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((e) => (
                <div key={e.id} className="bg-white rounded-xl shadow p-5 border border-gray-100">
                  <p className="text-xs text-gray-400 mb-1">{e.date} · {e.time}</p>
                  <h3 className="font-semibold text-gray-800 mb-1">{e.title}</h3>
                  <p className="text-sm text-gray-500">{e.location}</p>
                  {e.description && <p className="text-sm text-gray-400 mt-2 line-clamp-2">{e.description}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow p-5 border border-gray-100">
            <p className="text-xs text-gray-400 mb-1">Email</p>
            <p className="text-gray-700">{hp.contactEmail}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 border border-gray-100">
            <p className="text-xs text-gray-400 mb-1">Phone</p>
            <p className="text-gray-700">{hp.contactPhone}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 border border-gray-100">
            <p className="text-xs text-gray-400 mb-1">Address</p>
            <p className="text-gray-700">{hp.address}</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} Bethesda House of Grace. All rights reserved.
      </footer>
    </div>
  );
}
