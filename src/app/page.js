"use client";

import { RecentCTFs, RecentWriteups } from "@/components";
import { DataContext } from "@/context";
import { useContext } from "react";

export default function Home() {

    const { data } = useContext(DataContext);

    return (
        <div className="main flex-grow snap-y snap-mandatory p-2 text-lg">
            <div className="snap-always snap-center min-h-[100vh] flex flex-col justify-center">
                <div className="relative content flex flex-col my-20 mx-10 px-32 py-20 space-y-4 bg-[#313131] rounded-2xl">
                    <p className="text-5xl">
                        Welcome to <strong className="bg-red-600 text-[#313131]">FlagBook</strong>!<br />
                        <i>Powering </i><strong>kBxAc</strong>'s<i> Cybersecurity Journey</i>
                    </p>
                    <p className="text-2xl text-red-300">
                        As a community of dedicated individuals, we at <strong>kBxAc</strong> are <u>more than just a Capture the Flag (CTF) squad.</u> Together, we solve challenges, overcome obstacles, and redefine cybersecurity.
                    </p>
                    <div className="text-xl">
                        <p>
                            What <strong>kBxAc</strong> Can Do with FlagBook:
                        </p>
                        <ul className="list-disc list-inside">
                            <li><strong><u>Preserve Knowledge</u> : </strong> We have recorded every problem we have solved and every exploit we have mastered for the purpose of future reference.</li>
                            <li><strong><u>Work Together Effortlessly</u> : </strong>An area where we can all get together to keep our team sharp and united through the exchange of ideas, articles, and strategies.</li>
                            <li><strong><u>Grow Side by Side</u> : </strong>Take what you've learned and use it to fortify your future strategies.</li>
                        </ul>
                    </div>

                </div>
                <p className="animate-bounce text-2xl text-center my-10 font-bold bottom-2 w-full">
                    SCROLL DOWN TO SEE MORE
                </p>
            </div>
            {data ?
                <>
                    <RecentWriteups className="snap-always snap-center min-h-[100vh]" />
                    <RecentCTFs className="snap-always snap-center min-h-[100vh]" />
                </> :
                <p className="snap-always snap-center min-h-[100vh] text-2xl text-center">Loading...</p>
            }
        </div>

    );
}
