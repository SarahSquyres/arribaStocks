import React, { useState } from "react";
import { mockSearchResults } from "../constants/mock";
import SearchResults from "./SearchResults";

const Search = () => {
    const [input, setInput] = useState("")
    const [bestMatches, setBestMatches] = useState(mockSearchResults.result)

    const clear = () => {
        setInput("");
        setBestMatches([]);
    };

    const updateBestMatches = () => {
        setBestMatches(mockSearchResults.result);
    };

    return <div>
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
}

export default Search;