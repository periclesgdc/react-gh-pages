import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {name: 'World'};
    }

    change(event) {
        this.setState({name: event.target.value});
    }

    render() {
        return(
            <div>
                <input value={this.state.name} onChange={(e) => this.change(e)} />
                <p>Hello {this.state.name}!</p>
            </div>
        );
    }
}