// Logic for updating stock information using Finnhub API

const basePath = "https://finnhub.io/api/v1";

// Query symbol
export const searchSymbol = async (query) => {
    const url = `${basePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    // Error handling
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
};

// Query stock details
export const fetchStockDetails = async (stockSymbol) => {
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    // Error handling
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
};

// Query Stock Price
export const fetchQuote = async (stockSymbol) => {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    // Error handling
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
};

// Query Historical Data - Will Use in Future for Chart
export const fetchHistoricalData = async (
    stockSymbol,
    resolution,
    from,
    to
) => {
    const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return await response.json();
};