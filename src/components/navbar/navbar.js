import "./navbar.css";

import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-[--navbar-outer-bg]">
            <div className="navbar backdrop-blur-lg m-2 p-2 border-2 rounded-lg border-[--navbar-border] bg-[--navbar-inner-bg] text-[--navbar-text] space-x-5">
                <Link href="/" className="main-link">flagbook</Link>
                <Link href="/" className="navbar-link">home</Link>
                <Link href="/ctf" className="navbar-link">ctfs</Link>
                <Link href="/writeups" className="navbar-link">writeups</Link>
                <Link href="/tools" className="navbar-link">tools</Link>
                <Link href="/about" className="navbar-link">about</Link>
            </div>
        </div>
    )
}