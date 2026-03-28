import HeroSlider from "./components/HeroSlider";
import UpcomingEvents from "./components/UpcomingEvents";
import LatestSermon from "./components/LatestSermon";
import ServiceTimes from "./components/ServiceTimes";
import { Event } from "./api/events/route";
import { Sermon } from "./api/sermons/route";

export const dynamic = "force-dynamic";

function getNextOccurrenceOfDay(dayName: string): string {
  const dayMap: { [key: string]: number } = {
    'Sunday': 0,
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5,
    'Saturday': 6,
  };

  const targetDay = dayMap[dayName];
  if (targetDay === undefined) throw new Error(`Invalid day: ${dayName}`);

  const today = new Date();
  const currentDay = today.getDay();
  
  let daysUntilTarget = targetDay - currentDay;
  if (daysUntilTarget < 0) {
    daysUntilTarget += 7; // Get next week's occurrence if day has passed
  }

  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() + daysUntilTarget);
  
  return nextDate.toISOString().split('T')[0];
}

async function getUpcomingEvents(): Promise<Event[]> {
  // TODO: Replace with actual API call when backend is ready
  return [
    {
      id: "1",
      title: "Sunday Service",
      date: getNextOccurrenceOfDay('Sunday'),
      time: "1:30 PM",
      location: "Main Church",
      description: "Join us for our weekly Sunday service",
    },
    {
      id: "2",
      title: "Youth Fellowship",
      date: getNextOccurrenceOfDay('Monday'),
      time: "6:00 PM",
      location: "Online (Zoom)",
      description: "Join us for our weekly Monday Youth Fellowship",
    },
    {
      id: "3",
      title: "Bible Study",
      date: getNextOccurrenceOfDay('Tuesday'),
      time: "6:00 PM",
      location: "Online (Zoom)",
      description: "Join us for our weekly Tuesday Bible study",
    },
    {
      id: "4",
      title: "Prayer Towers",
      date: getNextOccurrenceOfDay('Friday'),
      time: "6:00 PM",
      location: "Online (Zoom)",
      description: "Join us for our weekly Prayer meetings",
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
    series: "Living the Gospel",
    description: "Discover how faith is demonstrated through action",
    videoUrl: null,
    audioUrl: null,
  };
}

export default async function Home() {
  const [events, sermon] = await Promise.all([
    getUpcomingEvents(),
    getLatestSermon(),
  ]);

  return (
    <main>
      <HeroSlider />
      <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Confession
        </h2>
        <p className="text-lg text-gray-800 mb-8 max-w-xl mx-auto leading-relaxed text-center">
          For all have sinned and fallen short of the glory of God. <br /><span className="text-gray-500 italic"> - Romans 3:23</span>
        </p>
    
      </div>
    </section>
          <UpcomingEvents events={events} />

      {sermon && <LatestSermon sermon={sermon} />}
      <ServiceTimes />
    </main>
  );
}
