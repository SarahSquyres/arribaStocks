import React from "react";
import Card from "./Card";

const Overview = ( {symbol, price, change, changePercent, currency}) => {
    return <Card>
        <span>{symbol}</span>
        <div>
            <span>
                Price:${price} {currency}
            </span>
            <span className={`${change > 0 ? "text-success" : "text-danger"}`}>
                {change}<span>({changePercent})%</span>

            </span>

        </div>
    </Card>
}

export default Overview;