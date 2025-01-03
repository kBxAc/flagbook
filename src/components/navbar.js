import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar backdrop-blur-lg m-2 p-2 border-2 rounded-lg border-[#272727] bg-[#171717]">
            <Link href="/">flagbook</Link>
        </div>
    )
}