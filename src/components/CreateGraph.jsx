// import React, { useRef, useEffect, useState } from 'react';
// import {newSymbol} from './Graph';

// export default function CreateGraph({ newSymbol }) {

//      const container = useRef(null);

//      function create() {
//           const script = document.createElement("script");
//           script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//           script.type = "text/javascript";
//           // script.async = true;
//           script.innerHTML = JSON.stringify({
//                autosize: false,
//                symbol: { newSymbol },
//                interval: "D",
//                timezone: "Etc/UTC",
//                theme: "dark",
//                style: "2",
//                locale: "en",
//                enable_publishing: false,
//                allow_symbol_change: false,
//                calendar: false,
//                support_host: "https://www.tradingview.com"
//           });
//           console.log('GRAPH CREATED')
//           console.log
//           return script
//      }

//      useEffect(() => {
//           const script = create()
//           container.current.appendChild(script)
//           console.log(newSymbol)
//      }, []);
     
//      return (
//           <>
//                <div className="tradingview-widget-container" ref={container}>
//                     <div
//                          className="tradingview-widget-container__widget">
//                     </div>
//                     <div className="tradingview-widget-copyright">
//                          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
//                               <span className="blue-text">Track all markets on TradingView</span>
//                          </a>
//                     </div>
//                </div>
//           </>
//      )
// }

