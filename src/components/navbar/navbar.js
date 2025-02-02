import "./navbar.css";

import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-[--navbar-outer-bg]">
            <div className="navbar backdrop-blur-lg m-2 p-2 border-2 rounded-lg border-[--navbar-border] bg-[--navbar-inner-bg] text-[--navbar-text]">
                <Link href="/">flagbook</Link>
            </div>
        </div>
    )
}