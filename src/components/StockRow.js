// Fetches and renders real-time stock data using IEX Cloud API
import React, { Component } from 'react';
import { stock } from "../resources/stock.js"

// defines the structure and behavior of a single stock row in the table
class StockRow extends Component {
    // Constructor: object blueprints, initializes the state with empty values
    constructor(props) {
        super(props)
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
        // Use setState to update the component's state with latest data received from the API
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
        stock.getTodaysOpen(this.props.ticker, handleOpenPrice);
    }

    // componentDidMount: a lifecycle event of component, when the component loads
    componentDidMount() {
        // bind(this): method used to bind an object to a function, reference object using this, in our case this is referencing data object
        stock.latestPrice(this.props.ticker, this.applyData.bind(this))
    }

    // return JSX structure for the table row
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