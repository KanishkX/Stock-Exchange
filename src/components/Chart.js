import React, {useContext, useEffect, useState} from "react";
import {UnixToDate} from "./DateFilter";
import { Card } from "./Card";
import { AreaChart,Area, ResponsiveContainer,Tooltip,XAxis,YAxis } from "recharts";
import { Filter } from "./ChartFilter";
import {chartData} from "../API/Stockapi"
import { StockContext } from "../context/StockContext";

export const Chart = () => {
    const[interval, setInterval]  = useState("1d");
    const[range, setRange] = useState("5y");
    const {StockSymbol} = useContext(StockContext);
    const [arrangedData, setArrangedData] = useState({});
    useEffect(()=>{
        const updateChartData = async () => {
            try {
              const result = await chartData(
                StockSymbol,
                range,
                interval
              )
               // Extracting timestamps and close prices
                const timestamps = result.chart.result[0].timestamp;
                const closePrices = result.chart.result[0].indicators.quote[0].close;

                const Data = timestamps.map((UnixTime, index) =>{
                    return {
                        value: closePrices[index],
                        date: UnixToDate(UnixTime)
                    }
                })

                setArrangedData(Data);
            } catch (error) {
              console.log(error);
            }
        };

        updateChartData();
    },[StockSymbol,interval,range]);
   

    return (
        <Card>
            <ul className="flex absolute top-1 right-2 z-10">
                {Object.keys(ChartConfig).map((item) => {
                    return <li key={item}>
                        <Filter
                        text={item}
                        active={range === item}
                        onClick={()=>{
                            setRange(item);
                            setInterval(ChartConfig[item].range);
                        }} />
                    </li>
                })}

            </ul>
            <ResponsiveContainer>
                <AreaChart data = {arrangedData}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" 
                          stopColor="#00FF00" 
                          stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00FF00" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                    <Area 
                    type = "monotone"
                    dataKey = "value"
                    stroke = "#00D100"
                    fullOpacity= {1}
                    strokeWidth={0.5}
                    fill="url(#colorUv)"/>
                    <Tooltip />
                    <XAxis dataKey={"date"} />
                    <YAxis domain={['dinataM', 'auto']}/>
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    );
}
const ChartConfig = {
    "1d": {range: "1m" },
    "5d": {range: "5m"},
    "1mo": {range: "60m"},
    "6mo": {range: "1d"},
    "1y": {range: "1d"},
    "5y": {range: "1d"}

}