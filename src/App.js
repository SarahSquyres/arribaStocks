import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Dashboard from "./components/Dashboard";

function App() {
  const [stockSymbol, setStockSymbol] = useState("FB");
  return <Dashboard />
}

export default App;
