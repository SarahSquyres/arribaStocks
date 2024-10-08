import { API_KEY } from "./ApiKey";
const basePath = "https://finnhub.io/api/v1";

export const searchSymbol = async (query) => {
    const url = `${basePath}/search?q=${query}&token=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
};