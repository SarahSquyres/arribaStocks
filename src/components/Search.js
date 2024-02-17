import React, { useState } from "react";
import { mockSearchResults } from "../constants/mock";

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

    return <div className="container">
        <input type="text" value={input} placeholder="Search Stock Here" onChange={(event) => {
            setInput(event.target.value);
        }} 
        onSubmit={(event) => {
            if (event.target === "Enter") {
                updateBestMatches();
            }
        }}/>
    </div>
}

export default Search;