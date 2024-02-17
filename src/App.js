import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import StockRow from './components/StockRow'

function App() {
  return (
    <div className="App">
      <div className="container">
            <table className="table g-4">
              <thead>
                <tr>
                  <th>Ticker</th>
                  <th>Price</th>
                  <th>Change</th>
                  <th>Date(EST)</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <StockRow ticker="NVDA" />
                <StockRow ticker="AAPL" />
                <StockRow ticker="MSFT" />
                <StockRow ticker="TTD" />
              </tbody>
            </table>

      </div>
    </div>
  );
}

export default App;
