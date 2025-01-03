import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar flex flex-row border-2 p-2">
            <Link href="/">flagbook</Link>
        </div>
    )
}