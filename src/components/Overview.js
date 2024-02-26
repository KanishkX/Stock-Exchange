import React from "react";
import { Card } from "./Card";
export const Overview = ({symbol, price, change, changePercent, currency, symbolCurrency}) => {

    return(
        <Card>
            <span className="absolute left-4 top-4 text-neutral-400 text-lg xl:text-xl 2xl:text-2xl md:text-sm md:top-0">
                {symbol}
            </span>

            <div className="w-full h-full flex items-center justify-around md:w-full md:pl-14 md:m-1">
                <span className="text-2xl xl:text-4xl 2xl:text-5xl flex items-center md:text-4xl md: ml-2">
                    {symbolCurrency}{price}
                    <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400  m-2">
                        {currency}
                    </span>
                </span>

                <span className={`text-lg xl:text-xl 2xl:text-2xl md:text-base ${change > 0 ? "text-lime-500" : "text-red-500"}`}>
                    ({change} ) <span>{changePercent}</span>
                </span>
            </div>

        </Card>
    );
} 