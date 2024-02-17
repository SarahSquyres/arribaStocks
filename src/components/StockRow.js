import React, { Component } from 'react';
import { iex } from "../config/iex.js"

const changeStyle = {
    color: '#FF0000',
    fontSize: '0.8rem',
    marginLeft: 5
}

class StockRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        // query API
        const url = `${iex.base_url}/data/CORE/INTRADAY_PRICES/${this.props.ticker}?&token=${iex.api_token}`
        fetch(url)
            .then((response) => response.json())
            .then((data => {
                this.setState({
                    data: data[data.length - 2]
                })
            }))
    }

    render() {
        return (
            <li className="list-group-item">
            <b>{this.props.ticker}</b> ${this.state.data.close}
            <span className="change" style={changeStyle}>
              -$0.45 (-0.06%)
            </span>
            </li>
        )
    }
}

export default StockRow;