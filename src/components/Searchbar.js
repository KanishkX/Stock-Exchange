import React, { useState, useContext } from "react";
import {XMarkIcon, MagnifyingGlassIcon} from "@heroicons/react/20/solid"
import { SearchResult } from "./SearchResult";
import {ThemeContext} from "../context/ThemeContext"
import { autocompletedata } from "../API/Stockapi";

export const Searchbar = () => {
    const [input, setInput] = useState("");
    const [bestMatches, setBestMatches] = useState([]);
    const { darkMode } = useContext(ThemeContext);

    const clear = () =>{
        setInput("");
        setBestMatches([]);
    }

    const updateBestMatches = async () =>{

        if(input){
            const Searchresult = await autocompletedata(input);
             const symbolShortNameList = Searchresult.quotes.map(quote => ({
                symbol: quote.symbol,
                shortname: quote.shortname
            }));

            setBestMatches(symbolShortNameList);
            console.log(symbolShortNameList);
        }
    };
    return (
        <div className={`flex item-center my-4 border-2 rounded-md relative z-50 w-96 ${
            darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
          }`}> 
            <input 
            type="text"
            value={input}
            className={`w-full px-10 py-2 focus:underline-none rounded-md ${
                darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
              }`}
            onChange={(event)=>setInput(event.target.value)}>
            </input>
            {input && (<button className="md-1" onClick={clear}>
                <XMarkIcon className = "h-6 w-6 fill-black" />
            </button>)}

            <button onClick={updateBestMatches} className="h-8 w-8 bg-green-600 rounded-md flex justify-start items-center m-1 p-2">
                <MagnifyingGlassIcon className="h-6 w-6 fill-white"></MagnifyingGlassIcon>
            </button>
            {input && bestMatches.length > 0 ? (<SearchResult lookup={bestMatches}></SearchResult>) : null}  
        </div>
    );
}