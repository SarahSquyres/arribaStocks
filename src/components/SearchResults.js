import React from "react";

const SearchResults = ({ results }) => {
    return <ul className="list-group scrollable-menu">
        {results.map((item) => {
            return <li key={item.symbol} className="list-group-item list-group-item-action">
                <span>{item.symbol}</span>
                <span>{item.description}</span>
            </li>
        })}
    </ul>;
};

export default SearchResults;