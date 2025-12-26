export interface Event {
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  slug: string;
}

export const events: Event[] = [
  {
    title: "React Summit 2025",
    image: "/images/event1.png",
    date: "June 2-3, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Amsterdam, Netherlands",
    slug: "react-summit-2025",
  },
  {
    title: "Next.js Conf 2025",
    image: "/images/event2.png",
    date: "October 15-16, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "San Francisco, CA",
    slug: "nextjs-conf-2025",
  },
  {
    title: "Web Summit 2025",
    image: "/images/event3.png",
    date: "November 10-12, 2025",
    time: "9:00 AM - 7:00 PM",
    location: "Lisbon, Portugal",
    slug: "web-summit-2025",
  },
  {
    title: "TypeScript Congress",
    image: "/images/event4.png",
    date: "September 5-6, 2025",
    time: "11:00 AM - 5:00 PM",
    location: "Berlin, Germany",
    slug: "typescript-congress-2025",
  },
  {
    title: "DevOps Days Global",
    image: "/images/event5.png",
    date: "May 20-22, 2025",
    time: "8:00 AM - 4:00 PM",
    location: "Multiple Cities",
    slug: "devops-days-global-2025",
  },
  {
    title: "JavaScript Conference 2025",
    image: "/images/event6.png",
    date: "July 8-10, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Copenhagen, Denmark",
    slug: "javascript-conference-2025",
  },
];
