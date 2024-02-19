// Dynamically renders stock information for requested stock
import React from "react";
import Card from "./Card";

const Overview = ({ symbol, price, change, changePercent, currency }) => {
    return <Card>
        <span className="symbolStyle">
            {symbol}
        </span>

        <div className="searchInfo">
            <span>
                ${price} {currency}
            </span>

            <span className={`${change > 0 ? "text-success" : "text-danger"}`}>
                ${change}
            </span>
            
            <span className={`${change > 0 ? "text-success" : "text-danger"}`}>
                ({changePercent})%
            </span>
        </div>
    </Card>
}

export default Overview;