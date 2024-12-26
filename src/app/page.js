"use client";

import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="navbar flex flex-row border-2 p-2">
                <Link href="/">flagbook</Link>
            </div>
            <div className="main p-2 flex-grow text-lg flex flex-row">
                <div className="body">
                Your go-to hub for CTF write-ups and solutions by <b>kBxAc</b>. Dive into challenge breakdowns, flag captures, and insights—all organized and ready to inspire your hacking journey.
                </div>
                <div className="recent flex flex-col basis-1/3 bg-[#1f1f1f]">
                    <h2 className="flex justify-center bg-[#272727]">Recent Write-ups</h2>
                    <div className="writeups flex-1">
                        {/* {writeups} */}
                    </div>
                    <hr className="my-4" />
                    <h2 className="flex justify-center bg-[#272727]">Recent CTFs</h2>
                    <div className="ctfs flex-1">
                        
                    </div>
                </div>
            </div>
            <div className="footer p-2 flex justify-center">
                Made with ❤️ by kBxAc
            </div>
        </div>
    );
}
