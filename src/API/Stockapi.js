const apiKey = process.env.REACT_APP_API_KEY;
export const summaryData = async (StockSymbol)=>{
    const summaryLink = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${StockSymbol}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    };
    const result =  await fetch(summaryLink, options);
    if(result.ok){
        return result.json();
    }else{
        console.log("summary Data error");
    }
   
}

export const chartData = async (StockSymbol,range,interval) => {
    const ChartLink = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-chart?interval=${interval}&symbol=${StockSymbol}&range=${range}&includePrePost=false&useYfid=true&includeAdjustedClose=true&events=capitalGain%2Cdiv%2Csplit`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    };
    const result = await fetch(ChartLink, options);
    if(result.ok){
        const output = result.json();
        return output;
    }
        
       

}

export const autocompletedata = async (input) => {
    const AutoCompleteLink = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=${input}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    };

    const result = await fetch(AutoCompleteLink, options);
    if(result.ok){
        const output = result.json();
        return output;
    }
   
       

}