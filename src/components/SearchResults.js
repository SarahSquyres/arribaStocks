// Display search results
import React, { useContext } from "react";
import StockContext from "../context/StockContext";

// Renders list and stock selection functionality
const SearchResults = ({ results }) => {
    const { setStockSymbol } = useContext(StockContext);
    return (
        <ul className="list-group scrollable-menu">
            {results.map((item) => {
                return (
                    <li
                        key={item.symbol}
                        className="list-group-item list-group-item-action"
                        onClick={() => setStockSymbol(item.symbol)}
                    >
                        <span>{item.symbol}</span>
                        <span>{item.description}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export default SearchResults;