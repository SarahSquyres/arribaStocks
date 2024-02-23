// Display search results
import React, { useContext } from "react";
import StockContext from "../context/StockContext";

// Defines functional component, takes two props - results(array of objects), clear(function)
const SearchResults = ({ results, clear }) => {
    // useContext hook accesses values of setStockSymbol from StockContext
    const { setStockSymbol } = useContext(StockContext);

    // Function that is called when a user clicks on search result, takes in stock(selected search result) as argument
    const handleStockSelection = (stock) => {
        // Calls function to update state related to selected stock, stock.symbol access the symbol value extracted from stock object
        setStockSymbol(stock.symbol);
        // Call clearFunction after setting the stock symbol
        clear(); 
    };

    return (
        // Returns ul element that displays search results as a list
        <ul className="list-group scrollable-menu">
            {/* results.map method iterates over the results array, creating a li element for each result */}
            {results.map((stock) => (
                <li
                    // Each li element has a unique key based on the item's symbol
                    key={stock.symbol}
                    className="list-group-item list-group-item-action"
                    // onClick calls handleStockSelection passing the current stock as an argument
                    onClick={() => handleStockSelection(stock)}
                >
                    {/* Display stock symbol */}
                    <span>{stock.symbol}</span>
                    <br></br>
                    {/* Display stock description */}
                    <span>{stock.description}</span>
                </li>
            ))}
        </ul>
    );
};

export default SearchResults;