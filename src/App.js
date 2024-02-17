// Root file for React application
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Dashboard from "./components/Dashboard";
import StockContext from "./context/StockContext";

// Sets initial value to MSFT, allows functions to be available to children 
function App() {
  const [stockSymbol, setStockSymbol] = useState("MSFT");
  return (
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      <Dashboard />
    </StockContext.Provider>
  );
}

export default App;
