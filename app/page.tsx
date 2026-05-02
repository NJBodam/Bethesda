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
      title: "Youth Fellowship (Leuchtturm)",
      date: getNextOccurrenceOfDay('Sunday'),
      time: "11:00 AM (Every other Sunday)",
      location: "Main Church",
      description: "Join us for our bi-weekly Sunday Youth Fellowship",
    },
    {
      id: "3",
      title: "Youth Prayers (Leuchtturm)",
      date: getNextOccurrenceOfDay('Monday'),
      time: "8:30 PM",
      location: "Online (Zoom)",
      description: "Join us for our weekly Youth Prayers",
    },
    {
      id: "4",
      title: "Bible Study",
      date: getNextOccurrenceOfDay('Tuesday'),
      time: "6:00 PM",
      location: "Online (Zoom)",
      description: "Join us for our weekly Tuesday Bible study",
    },
    {
      id: "5",
      title: "Prayer Meeting",
      date: getNextOccurrenceOfDay('Wednesday'),
      time: "6:00 PM",
      location: "Main Church",
      description: "Join us for our physical intercessory Prayer Meetings on Wednesdays",
    },
    {
      id: "6",
      title: "Prayer Towers",
      date: getNextOccurrenceOfDay('Friday'),
      time: "6:00 PM",
      location: "Online (Zoom)",
      description: "Join us for our online intercessory Prayer meetings",
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
      <section className="py-16 pb-4 bg-white">
      <div className="max-w-5xl mx-auto px-6 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Confession
        </h2>
        <p className="text-lg text-gray-800 mb-8 max-w-xl mx-auto leading-relaxed text-center">
          For all have sinned and fallen short of the glory of God. <br /><span className="text-gray-500 italic"> - Romans 3:23</span>
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Salvation</h3>
        <p className="text-lg text-gray-800 mb-8 max-w-xl mx-auto leading-relaxed text-center">
          Salvation is God's gift of new life through Jesus Christ. We have all sinned but God loves us and sent His Son to die for us so we can be forgiven and restored to Him.
          
          <br /><br />You cannot earn salvation it comes by grace through faith. All you need to do is believe in Jesus, turn away from sin, and accept Him as your Lord and Savior.
          When you receive salvation, you are forgiven, made new and given eternal life.

          <br /><br />"For God so loved the world that He gave His only Son, that whoever believes in Him shall not perish but have eternal life." <br /><span className="text-gray-500 italic"> - John 3:16</span>
        </p>
      </div>
    </section>
      <UpcomingEvents events={events} />

{/*       {sermon && <LatestSermon sermon={sermon} />}
 */}   <ServiceTimes />
    </main>
  );
}
