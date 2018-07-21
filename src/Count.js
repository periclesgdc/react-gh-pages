import React, { Component } from 'react';

export default class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    increment() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return(
            <div>
                <h1>Contagem: {this.state.count}</h1>
                <button onClick={this.increment.bind(this)} >+</button>
            </div>
        );
    }
}