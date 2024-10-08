// TradingViewWidget.jsx
import React, { useRef, useEffect, useState } from 'react';
import { searchSymbol } from "../api/FinhbApi";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Graph() {

     const [symbol, setSymbol] = useState('');
     const [newSymbol, setnewSymbol] = useState("AAPL");
     const [bestMatches, setBestMatches] = useState([]);
     const [isLoading, setIsLoading] = useState(false);

     const container = useRef(null);

     function createGraph() {
          const chartContainer = container.current.querySelector('.tradingview-widget-container__widget');
          if (chartContainer) {
               chartContainer.innerHTML = '';
          }
          const script = document.createElement('script');
          script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
          script.type = "text/javascript";
          script.async = true;
          script.innerHTML = `
            {
              "autosize": false,
              "symbol": "${newSymbol}",
              "interval": "D",
              "timezone": "Etc/UTC",
              "theme": "dark",
              "style": "2",
              "locale": "en",
              "enable_publishing": false,
              "allow_symbol_change": false,
              "calendar": false,
              "support_host": "https://www.tradingview.com"
            }`;
          chartContainer.appendChild(script);
     }

     useEffect(() => {
          createGraph();
     }, [newSymbol]);

     useEffect(() => {
          const fetchSearchResults = async () => {
               setIsLoading(true);
               try {
                    if (symbol) {
                         const searchResults = await searchSymbol(symbol.toUpperCase());
                         const result = searchResults.result;
                         const filteredResult = result.filter(result => result.type === 'Common Stock');
                         setBestMatches(filteredResult);
                         console.log("SEARCH", searchResults)
                         console.log("BEST MATCHES", bestMatches);
                         console.log("RESULTS", filteredResult)
                    }
               } catch (error) {
                    setBestMatches([]);
               } finally {
                    setIsLoading(false);
               }
          };
          fetchSearchResults();
     }, [symbol]);

     const handleNewSymbol = (e) => {
          e.preventDefault();
          setnewSymbol(symbol.toUpperCase());
          setSymbol('');
          e.target.elements.symbol.value = '';
          setBestMatches([]);
     }

     return (
          <>
               <form className="chart-form" onSubmit={handleNewSymbol}>

                    <TextField name="symbol" id="outlined-size-small" size="small" label="Search for a stock" variant="outlined" value={symbol} onChange={(e) => { setSymbol(e.target.value) }} />
                    <Button type="submit" variant="outlined">Search</Button>
                    <div className='loading'>
                         <p>{isLoading ? "Loading..." : " "}</p>
                    </div>
                    {bestMatches.length > 0 ?
                         <List className='searchList'>
                              {bestMatches.map((symbol) => (
                                   <ListItem key={symbol.symbol}
                                        onClick={() => {
                                             setnewSymbol(symbol.symbol);
                                             setBestMatches([]);
                                             setSymbol('')
                                        }
                                        }>
                                        <ListItemButton>
                                             <ListItemText primary={symbol.symbol} />
                                             <ListItemText primary={symbol.description} />
                                        </ListItemButton>

                                   </ListItem>
                              ))}
                         </List> : null}
               </form>
               <div className="tradingview-widget-container" ref={container}>
                    <div
                         className="tradingview-widget-container__widget">
                    </div>
                    <div className="tradingview-widget-copyright">
                         <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                              <span className="blue-text">Track all markets on TradingView</span>
                         </a>
                    </div>
               </div>
          </>
     );
}