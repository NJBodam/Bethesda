import HeroBanner from "./components/HeroBanner";
import UpcomingEvents from "./components/UpcomingEvents";
import LatestSermon from "./components/LatestSermon";
import ServiceTimes from "./components/ServiceTimes";
import { Event } from "./api/events/route";
import { Sermon } from "./api/sermons/route";

export const dynamic = "force-dynamic";

async function getUpcomingEvents(): Promise<Event[]> {
  // TODO: Replace with actual API call when backend is ready
  return [
    {
      id: "1",
      title: "Sunday Service",
      date: new Date().toISOString().split('T')[0],
      time: "10:00 AM",
      location: "Main Sanctuary",
      description: "Join us for our weekly Sunday service",
    },
  ];
}

async function getLatestSermon(): Promise<Sermon | null> {
  // TODO: Replace with actual API call when backend is ready
  return {
    id: "1",
    title: "Faith in Action",
    speaker: "Pastor John",
    date: new Date().toISOString().split('T')[0],
    scripture: "James 2:26",
    description: "Discover how faith is demonstrated through action",
    duration: "45 minutes",
  };
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
