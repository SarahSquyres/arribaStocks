// TradingViewWidget.jsx
import React, { useRef, useEffect, useState } from 'react';

export default function Graph() {

     const [symbol, setSymbol] = useState();
     const [newSymbol, setnewSymbol] = useState("AAPL");

     const container = useRef(null);
     const chartRef = useRef(null);

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
          console.log("GRAPH CREATED")
        }
        
        useEffect(() => {
          createGraph();
        }, [newSymbol]);

     const handleSymbolChange = (e) => {
          e.preventDefault();
          setSymbol(e.target.value);
     };

     const handleNewSymbol = (e) => {
          e.preventDefault();
          setnewSymbol(symbol);
          console.log("SEARCHING FOR", newSymbol, "...")
     }

     return (
          <>
               <form className="chart-form" onSubmit={handleNewSymbol}>
                    <input name="symbol" placeholder="Search for a stock" onChange={(e) => { handleSymbolChange(e) }} />
                    <button type="submit">Submit</button>
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