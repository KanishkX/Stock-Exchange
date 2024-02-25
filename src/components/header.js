import React from "react";
import { Searchbar } from "./Searchbar"

export const Header = ({name}) => {
    return (
        <>
            <div className="xl:px-32 ">
                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">{name}</span></h1>
                <Searchbar />
                
            </div>
        </>
    );
}