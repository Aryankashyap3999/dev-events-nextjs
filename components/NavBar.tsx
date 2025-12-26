import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <header>
        <nav>
            <div className="logo">
                <Image src="/icons/logo.png" alt="Logo" width={48} height={48} />
                <p>DevEvents</p>
            </div>
            <ul>
                <Link href="#home">Home</Link>
                <Link href="#events">Events</Link>
                <Link href="#create-event">Create Event</Link>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar