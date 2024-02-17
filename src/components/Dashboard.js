import React, { useContext, useEffect, useState }  from "react";
import StockRow from "./StockRow";
import Header from "./Header"
import Overview from "./Overview";
import StockContext from "../context/StockContext";
import { fetchStockDetails, fetchQuote } from "../api/stock-api";

const Dashboard = () => {
    const { stockSymbol } = useContext(StockContext);
    const [stockDetails, setStockDetails] = useState({});
    const [quote, setQuote] = useState({});

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
    
        const updateStockOverview = async () => {
          try {
            const result = await fetchQuote(stockSymbol);
            setQuote(result);
          } catch (error) {
            setQuote({});
            console.log(error);
          }
        };
    
        updateStockDetails();
        updateStockOverview();
      }, [stockSymbol]);

    return (
        <div className="container">
            <header className="text-center mb-4">
                <h1 className="display-4">ArribaStocks</h1>
                <p className="lead">Track your favorite stocks in real time!</p>
            </header>
            <div className="text-center mb-4">
                <Header details={stockDetails} />
            </div>
            <div className="container text-center mb-4">
                <Overview
                    symbol={stockSymbol}
                    price={quote.pc}
                    change={quote.d}
                    changePercent={quote.dp}
                    currency={stockDetails.currency} />
            </div>
            <div className="container">
                <h3 className="text-center">The Magnificent 7</h3>
                <table className="table g-4 table-striped table-sm table-bordered">
                    <thead>
                        <tr>
                            <th>Ticker</th>
                            <th>Price</th>
                            <th>Change</th>
                            <th>Date(EST)</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <StockRow ticker="NVDA" />
                        <StockRow ticker="AAPL" />
                        <StockRow ticker="MSFT" />
                        <StockRow ticker="TSLA" />
                        <StockRow ticker="AMZN" />
                        <StockRow ticker="GOOGL" />
                        <StockRow ticker="META" />
                    </tbody>
                </table>
            </div>

        </div>
        );
    };

export default Dashboard;