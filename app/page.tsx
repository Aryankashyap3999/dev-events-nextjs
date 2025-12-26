import EventCard from "@/components/EventCard";
import { ExploreBtn } from "@/components/ExploreBtn";
import { events } from "@/lib/constants";


export default function Home() {
  return (
    <section>
      <h1 className="text-center">The Hub for Developers Events <br /> Event you can&apos;t mis</h1>
      <p className="text-center mt-5">Hackerthon, Meetups, and Conferences, All in One Place</p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard title={event.title} image={event.image} location={event.location} date={event.date} time={event.time} slug={event.slug} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
