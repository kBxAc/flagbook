"use client"

import { useState, useContext } from "react";
import { RxReload } from "react-icons/rx";
import { RefetchData } from "@/utils";
import { DataContext } from "@/context";

export default function ReloadButton() {

    const { data, setData } = useContext(DataContext);
    
    const [hovered, setHovered] = useState(false);

    return (
        <RxReload
            className={`justify-self-end mx-2 self-center cursor-pointer ${hovered ? "animate-spin" : ""}`}
            onClick={() => {
                setHovered(true);
                RefetchData().then((dataState) => {
                    setData(dataState);
                    console.info("Successfully reloaded data");
                });
                setTimeout(() => {
                    setHovered(false);
                }, 1000);
            }}
        />
    )
}