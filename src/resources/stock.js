import { iex } from "../config/iex.js";

export const stock = {
    // Query API, ticker and callback will be passed in
    latestPrice: (ticker, callback) => {
        // Will return promise, now able to chain another event
        fetch(stock.latestpriceURL(ticker))
            .then((response) => response.json())
            .then((data) => {
                callback(stock.formatPriceData(data))
            })
    },

    latestpriceURL: (ticker) => {
        return `${iex.base_url}/data/CORE/INTRADAY_PRICES/${ticker}?&token=${iex.api_token}`
    },

    formatPriceData: (data) => {
        const stockData = data[data.length - 2]
        const formattedData = {}
        formattedData.price = stockData.close
        formattedData.date = stockData.date
        formattedData.time = stockData.label
        return formattedData
    }
}