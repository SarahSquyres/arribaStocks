// Fetches stock data from IEX Cloud API

// imports config details 
import { iex } from "../config/iex.js";

export const stock = {
    // Fetches the latest price data for a given stock, ticker and callback will be passed in
    latestPrice: (ticker, callback) => {
        // Constructs API URL using latestpriceURL and makes a fetch request to URL
        fetch(stock.latestpriceURL(ticker))
            // Parses response as JSON
            .then((response) => response.json())
            // latestPrice function is done, now callback function (formatPriceData) will run
            .then((data) => {
                callback(stock.formatPriceData(data))
            })
    },

    latestpriceURL: (ticker) => {
        return `${iex.base_url}/data/CORE/INTRADAY_PRICES/${ticker}?&token=${iex.api_token}`
    },

    // Extract relevant information from the raw API response
    formatPriceData: (data) => {
        // Extracts the second-to-last element from the data array and assigns it to the stockData
        const stockData = data[data.length - 2]
        const formattedData = {}
        formattedData.price = stockData.close
        formattedData.date = stockData.date
        formattedData.time = stockData.label
        // Returns a formatted object
        return formattedData
    },

    // Get day open data to calculate day percent and price change 
    getTodaysOpen: (ticker, callback) => {
        // Request data from API
        fetch(stock.todaysOpenURL(ticker))
            // Converts response to JSON
            .then((response) => response.json())
            // What to do when data comes back
            // getTodaysOpen function is done, now callback function (formatPriceDataOpen) will run
            .then((data) => {
                callback(stock.formatPriceDataOpen(data))
            })
    },

    todaysOpenURL: (ticker) => {
        return `${iex.base_url}/data/CORE/INTRADAY_PRICES/${ticker}?&token=${iex.api_token}`
    },

    formatPriceDataOpen: (data) => {
        // Extracts the first element from the data array and assigns it to the firstStockData
        const firstStockData = data[0]
        const firstFormattedData = {}
        firstFormattedData.price = firstStockData.close
        firstFormattedData.date = firstStockData.date
        firstFormattedData.time = firstStockData.label
        // Returns a formatted object
        return firstFormattedData
    }
}