import React from "react";
import StockRow from "./StockRow";
import { mockCompanyDetails } from "../constants/mock";
import Header from "./Header"
import Overview from "./Overview";

const Dashboard = () => {
    return (
        <div className="container">
            <header className="text-center mb-4">
                <h1 className="display-4">ArribaStocks</h1>
                <p className="lead">Track your favorite stocks in real time!</p>
            </header>
            <div className="text-center mb-4">
                <Header name={mockCompanyDetails.name} />
            </div>
            <div className="container text-center mb-4">
                <Overview
                    symbol={mockCompanyDetails.ticker}
                    price={300}
                    changePercent={10.0}
                    currency="USD" />
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