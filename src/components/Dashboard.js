import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import StockRow from "./StockRow";
import Header from "./Header"
import Overview from "./Overview";
import StockContext from "../context/StockContext";
import { fetchStockDetails, fetchQuote } from "../api/stock-api";
import Footer from "./Footer";

// Utilize useState hook to dynamically render stock information
const Dashboard = () => {
  // useContext hook retrieves stock symbol user inputs
  const { stockSymbol } = useContext(StockContext);
  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});

  // useEffect hook fetches data when the stock symbol changes, using Finnhub API
  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };

    // Retrieves updated quote information for specified stock
    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    // Re-render new Dashboard data
    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  // Structure that renders to browser
  return (

    <div>

      <Navbar />


      <header className="text-center mb-4">
        <h1><span className="firstLetter">A</span>rriba<span className="firstLetter">S</span>tocks</h1>
        <p className="lead">Track your favorite stocks. In real time.</p>
      </header>


      <div className="bg"></div>


      <div className="result container text-center mb-4">
        <Overview
          symbol={stockSymbol}
          price={quote.pc}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetails.currency}
        />
      </div>


      <div className="text-center mb-4">
        <Header details={stockDetails} />
      </div>


      <h3 className="text-center">Super Seven Ticker</h3>
      <div className="ticker-wrap">
        <tbody>
          <StockRow ticker="NVDA" />
          <StockRow ticker="AAPL" />
          <StockRow ticker="MSFT" />
          <StockRow ticker="TSLA" />
          <StockRow ticker="AMZN" />
          <StockRow ticker="GOOGL" />
          <StockRow ticker="META" />
        </tbody>
      </div>
      <p className="text-center"><a href="https://iexcloud.io" target="_blank">Data provided by IEX Cloud</a></p>


      <Footer />


    </div>
  );
};

export default Dashboard;