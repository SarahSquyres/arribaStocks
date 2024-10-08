// // Search bar Functionality
// import React, { useState } from "react";
// import Graph from "./Graph";

// export default function Search () {
//     // Creates a state variable with an initial value of empty string to store search query
//     const [input, setInput] = useState("")
//     // Creates a state variable that holds a boolean value representing if data is being loaded, initially set to false
//     const [isLoading, setIsLoading] = useState(false);

//     // Asynchronous function triggered when the user types in search bar, or clicks search
//     const updateBestMatches = async () => {
//         // Set loading to true before fetching
//         setIsLoading(true);
//         try {
//             // If there is an input in the search bar
//             if (input) {
//                 // Calls searchSymbol function with the input to fetch matching symbols
//                 const searchResults = await searchSymbol(input);
//                 // Extracts the result data from the response
//                 const result = searchResults.result;
//                 // Updates bestMatches variable
//                 setBestMatches(result)
//             }
//             // Error handling, clears input and bestMatches, resetting search
//         } catch (error) {
//             setBestMatches([]);
//             console.log(error);
//         } finally {
//             // Set loading to false after fetch is complete
//             setIsLoading(false);
//         }
//     };

//     // Clears input and bestMatches, resetting the search
//     const clear = () => {
//         setInput("");
//         setBestMatches([]);
//     };

//     // Conditionally renders clear button and search results
//     return (
//         // Renders div element
//         <div className="search">
//             {/* Stores current input value */}
//             <input type="text" value={input} placeholder="Search Stock Here" onChange={(event) => {
//                 // Triggers setInput function on each character change
//                 setInput(event.target.value);
//             }}
//             />
//             {/* Conditionally renders Clear button */}
//             {input && (
//                 <button type="button" className="searchBtn btn btn-outline-light btn-sm" text="Clear" onClick={clear}>
//                     Clear
//                 </button>)}
//             {/* Displays Search button, triggers updateBestMatches on click */}
//             <button onClick={updateBestMatches} className="searchBtn btn btn-outline-light btn-sm">
//             {isLoading ? "Loading..." : "Search"}
//             </button>
//             {/* Conditionally renders SearchResults component if there is input & at least one matching symbol is found */}
//             {/* Passes bestMatches array as props to SearchResults component */}
//             {input && bestMatches.length > 0 ? <SearchResults results={bestMatches} clear={clear} /> : null}
//         </div>
//     );
// }
