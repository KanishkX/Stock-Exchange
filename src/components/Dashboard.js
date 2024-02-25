import React, { useContext, useEffect, useState } from "react";
import { Card } from "./Card";
import {Header} from "./header"
import { Overview } from "./Overview";
import { Chart } from "./Chart";
import { ThemeIcon } from "./themeIcon";
import { ThemeContext } from "../context/ThemeContext";
import { StockContext } from "../context/StockContext"
import {summaryData} from "../API/Stockapi"
import {Details} from "./Details"
export const Dashboard = () =>{
    const {darkMode} = useContext(ThemeContext);
    const {StockSymbol} = useContext(StockContext);
    const [symbol, setSymbol] = useState("");
    const [price, setPrice] = useState("");
    const [change, setChange] = useState("");
    const [changePercent, setChangePercent] = useState("");
    const [currency, setCurrency] = useState("");
    const [currencySymbol, setCurrencySymbol] = useState("");

    const [exchange,setExchange] = useState("");
    const [marketCap, setMarketCap] = useState("");
    const [country, setCountry] = useState("");
    const [industry, setIndustry] = useState("");
    const [beta, setBeta] = useState("");
    const [previousClose,setPreviousClose] =useState("")



    useEffect(() => {
        const updateStockDetails = async () => {
          try {
            const result = await summaryData(StockSymbol);
            setExchange(result.price.exchange);
            setMarketCap(result.price.marketCap.fmt);
            setCountry(result.summaryProfile.country);
            setIndustry(result.summaryProfile.industryKey);
            setBeta(result.summaryDetail.beta.fmt);
            setPreviousClose(result.summaryDetail.previousClose.fmt);
          } catch (error) {
            console.log(error);
          }
        };
    
        const updateStockOverview = async () => {
          try {
            const result = await summaryData(StockSymbol);
            setSymbol(result.price.symbol);
            setPrice(result.price.regularMarketOpen.fmt);
            setChange(result.price.regularMarketChange.fmt);
            setChangePercent(result.price.regularMarketChangePercent.fmt);
            setCurrency(result.defaultKeyStatistics.currency);
            setCurrencySymbol(result.price.currencySymbol);
            
          } catch (error) {
            setSymbol("");
            setPrice("");
            setChange("");
            setChangePercent("");
            setCurrency("");
            setCurrencySymbol("");
            
            console.log(error);
          }
        };
    
        updateStockDetails();
        updateStockOverview();
    }, [StockSymbol]);

    return (
        <div className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"}`}>
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex">
            <Header name = {StockSymbol}></Header>
            <ThemeIcon />
        </div>
        <div className="md:col-span-2 row-span-4">
            <Chart />
        </div>
        <div>
            <Overview 
            symbol={symbol} 
            price={price} 
            change={change} 
            changePercent={changePercent} 
            currency={currency} 
            symbolCurrency = {currencySymbol}/>
        </div>
        <div className="row-span-2 xl:row-span-3">
        <Details exchange={exchange} beta={beta} marketCap={marketCap} industry={industry} previousClose={previousClose} country={country}/>
      </div>
      </div>)
    
}