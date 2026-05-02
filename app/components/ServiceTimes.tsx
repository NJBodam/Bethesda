interface ServiceTime {
  day: string;
  name: string;
  time: string;
  location: string;
}

const serviceTimes: ServiceTime[] = [
  {
    day: "Sunday",
    name: "Youth Fellowship",
    time: "11:00 AM (Every other Sunday)",
    location: "Main Church",
  },
  {
    day: "Sunday",
    name: "Main Church Service",
    time: "1:30 PM",
    location: "Main Church",
  },
  {
    day: "Wednesday",
    name: "Mid-Week Prayer",
    time: "6:00 PM",
    location: "Main Church",
  },
  {
    day: "Friday",
    name: "Online Prayer",
    time: "6:00 PM",
    location: "Online (Zoom)",
  }
];

const dayOrder = ["Sunday", "Wednesday", "Friday"];

const groupedTimes = dayOrder.map((day) => ({
  day,
  services: serviceTimes.filter((s) => s.day === day),
}));

export default function ServiceTimes() {
  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Service Times</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {groupedTimes.map(({ day, services }) => (
            <div
              key={day}
              className="bg-blue-800/60 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold mb-4 border-b border-blue-500 pb-2">
                {day}
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <p className="font-semibold">{service.name}</p>
                    <p className="text-blue-200 text-sm">
                      {service.time} &middot; {service.location}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
