// Search bar Functionality
import React, { useState } from "react";
import SearchResults from "./SearchResults";
import { searchSymbol } from "../api/stock-api";

const Search = () => {
    const [input, setInput] = useState("")
    const [bestMatches, setBestMatches] = useState([]);

    const updateBestMatches = async () => {
        try {
            if (input) {
                const searchResults = await searchSymbol(input);
                const result = searchResults.result;
                setBestMatches(result);
            }
        } catch (error) {
            setBestMatches([]);
            console.log(error);
        }
    };

    const clear = () => {
        setInput("");
        setBestMatches([]);
    };

    // Conditionally renders clear button and search results
    return (
        <div className="search">
            <input type="text" value={input} placeholder="Search Stock Here" onChange={(event) => {
                setInput(event.target.value);
            }}
                onSubmit={(event) => {
                    if (event.target === "Enter") {
                        updateBestMatches();
                    }
                }} />
            {input && (
                <button type="button" className="searchBtn btn btn-outline-dark btn-sm" text="Clear" onClick={clear}>
                    Clear
                </button>)}
            <button onClick={updateBestMatches} className="searchBtn btn btn-outline-dark btn-sm">
                Search
            </button>
            {input && bestMatches.length > 0 ? <SearchResults results={bestMatches} /> : null}
        </div>
    );
}

export default Search;