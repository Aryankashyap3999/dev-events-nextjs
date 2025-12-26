"use client";

import Image from "next/image"
import Link from "next/link"
import posthog from "posthog-js"

const NavBar = () => {
  const handleLogoClick = () => {
    posthog.capture("logo_clicked", {
      navigation_location: "header",
    });
  };

  const handleNavClick = (linkName: string, href: string) => {
    posthog.capture(`nav_${linkName}_clicked`, {
      navigation_location: "header",
      target_href: href,
    });
  };

  return (
    <header>
        <nav>
            <div className="logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
                <Image src="/icons/logo.png" alt="Logo" width={48} height={48} />
                <p>DevEvents</p>
            </div>
            <ul>
                <Link href="#home" onClick={() => handleNavClick("home", "#home")}>Home</Link>
                <Link href="#events" onClick={() => handleNavClick("events", "#events")}>Events</Link>
                <Link href="#create-event" onClick={() => handleNavClick("create_event", "#create-event")}>Create Event</Link>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar