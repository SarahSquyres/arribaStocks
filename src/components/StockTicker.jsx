import React, { useState, useEffect } from 'react'
import { getQuote } from "../api/FinhbApi";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/material';


export default function StockTicker() {

     const [tickers, setTickers] = useState(["AAPL", "MSFT", "NVDA", "TSLA", "GOOG", "META", "AMZN"]);
     const [stockData, setStockData] = useState([])

     const fetchStock = async (symbol) => {
          try {
               const res = await getQuote(symbol)
               return res
          }
          catch (error) {
               console.error(error)
          }
     }

     useEffect(() => {
          const fetchAllTickers = async () => {
               const promises = tickers.map((ticker) => fetchStock(ticker))
               const res = await Promise.all(promises)
               const stockDataArray = res.map((res, index) => {
                    const stockTime = res.t;
                    const date = new Date(stockTime * 1000);
                    const dateString = date.toLocaleString();
                    return { ...res, dateString, ticker: tickers[index] }
               })
               setStockData(stockDataArray)
          }
          if (tickers.length > 0) {
               fetchAllTickers()
          }
     }, [tickers]);

     return (
          <>
               <div className='ticker-list'>
                    {stockData.map((stock, index) => (
                         <List key={index} className='ticker-list-items'>
                              <ListItemText className='list-item-name-date' primary={stock.dateString} />
                              <ListItemText className='list-item-name' primary={stock.ticker} />
                              <ListItemText className='list-item-name' primary={stock.c} />
                              <ListItemText className='list-item-name'>
                                   <span className='list-item-name' style={{ color: stock.d > 0 ? '#38ba6b' : '#d6515e' }}>
                                        {stock.d}
                                   </span>
                              </ListItemText>
                              <ListItemText className='list-item-name'>
                                   <span className='list-item-name' style={{ color: stock.dp > 0 ? '#38ba6b' : '#d6515e' }}>
                                        {stock.dp}%
                                   </span>
                              </ListItemText>
                         </List>


                    ))}
               </div>
          </>
     )
}