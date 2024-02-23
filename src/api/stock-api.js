// Logic for updating stock information using Finnhub API

// stores the base URL for Finnhub API endpoints
const basePath = "https://finnhub.io/api/v1";

// Queries API for stock symbols matching the search query
export const searchSymbol = async (query) => {
    // Constructs the API URL with query and API key
    const url = `${basePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    // Error handling
    if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
};

// Retrieves information for the queried stock symbol
export const fetchStockDetails = async (stockSymbol) => {
    // Constructs the API URL with stock symbol and API key
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    // Error handling
    if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
};

// Fetches the latest quote for the queried stock symbol
export const fetchQuote = async (stockSymbol) => {
    // constructs URL with stock symbol and API key
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    // Error handling
    if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
};