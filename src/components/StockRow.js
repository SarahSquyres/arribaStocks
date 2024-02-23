// Fetches and renders real-time stock data using IEX Cloud API
import React, { Component } from 'react';
import { stock } from "../api/iex-api.js"

// defines the structure and behavior of a single stock row in the table
class StockRow extends Component {
    // Constructor function: takes in properties passed to component (object blueprints) 
    constructor(props) {
        // Calls constructor of parent React component, cannot access child components without this
        super(props)
        // Initializes the state of the component with empty values
        this.state = {
            price: null,
            date: null,
            time: null,
            dollar_change: null,
            percent_change: null
        }
    }

    // Changes text color based on positive or negative price movements
    changeStyle() {
        return {
            color: (this.state.dollar_change > 0) ? '#14a44d' : '#dc3545'
        }
    }

    applyData(data) {
        // Use setState to dynamically update the component's state with latest data received from the API
        this.setState({
            // Latest data
            price: data.price,
            date: data.date,
            time: data.time,
        });

        // Calculates dollar and percent change
        const handleOpenPrice = (openPrice) => {
            const dollarChange = this.state.price - openPrice.price;
            const percentChange = (dollarChange / openPrice.price) * 100;

            this.setState({
                // Format to two decimal places
                dollar_change: dollarChange.toFixed(2), 
                percent_change: percentChange.toFixed(2) + "%",
            });
        };
        // Calls getTodaysOpen and once the opening price data is available, calls handleOpenPrice (as a callback function)
        stock.getTodaysOpen(this.props.ticker, handleOpenPrice);
    }

    // componentDidMount: a lifecycle event of component, when the component loads
    componentDidMount() {
        // Calls the latestPrice function and passes two arguments, the ticker and applyData.bind callback
        // bind(this): method used to bind an object to a function, in our case (this) is referencing current state of data object
        stock.latestPrice(this.props.ticker, this.applyData.bind(this))
    }

    // return JSX structure for the table row, renders to screen
    render() {
        return (
            <tr>
                <td>{this.props.ticker}</td>
                <td>${this.state.price}</td>
                <td style={this.changeStyle()}>${this.state.dollar_change} ({this.state.percent_change})</td>
                <td>{this.state.date}</td>
                <td>{this.state.time}</td>
            </tr>
        )
    }
}

export default StockRow;