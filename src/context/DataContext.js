"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { RefetchData } from "@/utils";

const DataContext = createContext();


export default function DataProvider ({ children }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        try {
            var tmp = JSON.parse(localStorage.getItem("data"));
            // console.log({tmp});
            if (!tmp) {
                throw new Error("No data found");
            } else {
                setData(tmp);
            }
        } catch (error) {
            console.info(error.message);
            console.log("fetching data from server");
            fetch("/api/fetchTree")
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setData(data);
                    localStorage.setItem("data", JSON.stringify(data));
                })
                .catch(error => {
                    console.alert(error);
                });
        }
    }, [])

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext };