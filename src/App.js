import {Dashboard} from "./components/Dashboard"
import {ThemeContext} from "./context/ThemeContext"
import { StockContext } from "./context/StockContext";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [StockSymbol, setStockSymbol] = useState("TATASTEEL.NS");
  return (
    <ThemeContext.Provider value = {{darkMode, setDarkMode}}>
      <StockContext.Provider value={{StockSymbol, setStockSymbol}}>
        <Dashboard />
      </StockContext.Provider>
    </ThemeContext.Provider>

  );
}

export default App;
