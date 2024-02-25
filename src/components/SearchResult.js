import React, {useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";
import { StockContext } from "../context/StockContext";
export const SearchResult = ({lookup}) =>{
    const {darkMode} = useContext(ThemeContext);
    const { setStockSymbol } = useContext(StockContext);
    return(<>
        <ul className={`absolute top-12 border-2 w-64 rounded-md h-64 overflow-y-scroll  ${
        darkMode
          ? "bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark"
          : "bg-white border-neutral-200 custom-scrollbar"
      }`}>
           {lookup.map((quote) => {
            return (<li key={quote.symbol} className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-green-400 ${
                darkMode ? "hover:bg-green-500" : "hover:bg-green-200 "
              } transition duration-300`}  onClick={() => setStockSymbol(quote.symbol)}>
                <span>{quote.shortname}</span> 
            </li>
            
            )
            })
            } 
        </ul>
    </>);

}