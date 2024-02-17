import React, { Component } from 'react';
import { iex } from "../config/iex.js"
import { stock } from "../resources/stock.js"

class StockRow extends Component {
    // Constructor: object blueprints
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
    changeStyle() {
        return {
            color: (this.state.dollar_change > 0) ? '#4caf50' : '#e53935'
        }
    }

    applyData(data) {
        // Use setState to update the component's state
        this.setState({
            // Latest data
            price: data.price,
            date: data.date,
            time: data.time,
        });

        const handleOpenPrice = (openPrice) => {
            const dollarChange = this.state.price - openPrice.price;
            const percentChange = (dollarChange / openPrice.price) * 100;

            this.setState({
                dollar_change: dollarChange.toFixed(2), // Format to two decimal places
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