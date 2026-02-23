import HeroBanner from "./components/HeroBanner";
import UpcomingEvents from "./components/UpcomingEvents";
import LatestSermon from "./components/LatestSermon";
import ServiceTimes from "./components/ServiceTimes";
import { Event } from "./api/events/route";
import { Sermon } from "./api/sermons/route";

export const dynamic = "force-dynamic";

async function getUpcomingEvents(): Promise<Event[]> {
  const res = await fetch(
    "/api/events",
    { cache: "no-store" }
  );
  if (!res.ok) return [];
  return res.json();
}

async function getLatestSermon(): Promise<Sermon | null> {
  const res = await fetch(
    "/api/sermons",
    { cache: "no-store" }
  );
  if (!res.ok) return null;
  return res.json();
}

export default async function Home() {
  const [events, sermon] = await Promise.all([
    getUpcomingEvents(),
    getLatestSermon(),
  ]);

  return (
    <main>
      <HeroBanner
        title="Welcome to Bethesda House of Grace"
        subtitle="A place of worship, community, and spiritual growth for all people."
        backgroundImage="/hero-bg.jpg"
      />
      <UpcomingEvents events={events} />
      {sermon && <LatestSermon sermon={sermon} />}
      <ServiceTimes />
    </main>
  );
}
