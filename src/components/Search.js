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

    return (
        <div>
        <input type="text" value={input} placeholder="Search Stock Here" onChange={(event) => {
            setInput(event.target.value);
        }}
            onSubmit={(event) => {
                if (event.target === "Enter") {
                    updateBestMatches();
                }
            }} />
        {input && (
            <button type="button" className="btn btn-outline-secondary btn-sm" text="Clear" onClick={clear}>
                X
            </button>)}
        <button onClick={updateBestMatches} className="btn btn-outline-secondary btn-sm">
            Search
        </button>
        {input && bestMatches.length > 0 ? <SearchResults results={bestMatches} /> : null}
    </div>
    );
}

export default Search;