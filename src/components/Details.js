import React,{useContext} from "react";
import { Card } from "./Card";
import { ThemeContext } from "../context/ThemeContext";
// Details of Stocks
export const Details = ({ exchange,marketCap,country,industry, beta, previousClose}) =>{
    const { darkMode } = useContext(ThemeContext);
    const detailsList = {
      Exchange: exchange ,
      country: country,
      marketCapitalization: marketCap,
      Industry:industry,
      Beta: beta,
      previousClose: previousClose
    };

    return (
      <Card>
        <ul
          className={`grid grid-cols-2 gap-4 justify-center ${
            darkMode ? "divide-gray-800" : null
          }`}
        >
          {Object.keys(detailsList).map((item) => {
            return (
              <li key={item} className="flex-1 flex justify-between items-center">
                <span className="font-bold mr-2">{item}</span>
                <span>{detailsList[item]}</span>
              </li>
            );
          })}
        </ul>
      </Card>
    );
}