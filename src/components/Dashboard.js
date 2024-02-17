import React from "react";
import Card from "./Card"
import StockRow from "./StockRow";
import { mockCompanyDetails } from "../constants/mock";
import Header from "./Header"
import Overview from "./Overview";
import Chart from "./Chart";

const Dashboard = () => {
    return <div className="container">
        <div className="text-center mb-4">
            <Card>
                <div className="App">
                    <div className="container">
                        <header className="text-center mb-4">
                            <h1 className="display-4">ArribaStocks</h1>
                            {/* Optional subtitle or description */}
                            <p className="lead">Track your favorite stocks in real time!</p>
                        </header>
                        <Header name={mockCompanyDetails.name}/>
                        <h3>The Magnificent 7</h3>
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
            </Card>
            <div>
                <Overview symbol={mockCompanyDetails.ticker} 
                price={300} 
                changePercent={10.0}
                currency="USD"/>
            </div>
            <div className="container">
                <Chart/>
            </div>
        </div>
    </div>
};

export default Dashboard;