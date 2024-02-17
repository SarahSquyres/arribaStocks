import React, { Component } from 'react';
import { iex } from "../config/iex.js"
import { stock } from "../resources/stock.js"

const changeStyle = {
    color: '#FF0000',
    fontSize: '0.8rem',
    marginLeft: 5
}

class StockRow extends Component {
    // Constructor: object blueprints
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    applyData(data) {
        // Use setState to update the component's state
        this.setState({
            // Latest data
            data: data
        })
    }

    // componentDidMount: a lifecycle event of component, when the component loads
    componentDidMount() {
        // bind(this): method used to bind an object to a function, reference object using this, in our case this is referencing data object
        stock.latestPrice(this.props.ticker, this.applyData.bind(this))

    }

    render() {
        return (
            <li className="list-group-item">
                {/* Ticker and latest price */}
                <b>{this.props.ticker}</b> ${this.state.data.price}
                <span className="change" style={changeStyle}>
                    $change (change%)
                </span>
            </li>
        )
    }

}

export default StockRow;