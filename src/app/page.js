"use client";
import { useState, useEffect, useContext } from "react";
import { RecentCTFs, RecentWriteups } from "@/components";
import { DataContext } from "@/context";

export default function Home() {

    const { data, setData } = useContext(DataContext);

    return (
        <div className="main p-2 flex-grow text-lg flex flex-col">
            <RecentWriteups data={data} />
            <RecentCTFs dataState={setData} />
        </div>

    );
}
