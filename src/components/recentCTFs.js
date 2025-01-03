"use client";

import { useContext } from "react";
import { ReloadButton } from "@/components";
import { DataContext } from "@/context";

export default function RecentCTFs() {

    const { data } = useContext(DataContext);

    const ctfs = data.tree.map((data, index) => {
        return data.ctfs.map((ctf, index) => {
            return (
                <div key={index} className="ctf bg-[#373737] p-2 hover:bg-[#272727]">
                    <h3>{ctf.details.name}</h3>
                </div>
            )
        })
    })
    
    return (
        <>
            <div className="grid p-1 grid-cols-2 justify-items-stretch bg-[#272727]">
                <h2 className="justify-self-start">Recent CTFs</h2>
                <ReloadButton/>
            </div>
            <div className="ctfs flex-1 px-2 py-4 space-y-2">
                {ctfs}
            </div>
        </>
    )
}