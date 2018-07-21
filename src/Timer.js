import React, { Component } from 'react';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {elapsed: 0, active: true};
        this.tick = this.tick.bind(this);
        this.toogle = this.toogle.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    }

    componentDidUpdate() {
        if(!this.state.active) {
            clearInterval(this.timer);
        }
    }

    tick() {
        this.setState({elapsed: this.state.elapsed + 1});
    }

    toogle() {
        if(!this.state.active) {
            this.setState({elapsed: 0});
            this.timer = setInterval(this.tick, 1000);
        }

        this.setState(prevState => ({
            active: !prevState.active
        }));
    }

    render() {
        const active = this.state.active;
        let h1;

        if(active) {
            h1 = <h1>Elapsed {this.state.elapsed} seconds!</h1>;
        } else {
            h1 = <h1>Timer stopped!</h1>;
        }

        return (
            <div>
                {h1}
                <button onClick={this.toogle} >Parar</button>
            </div>
        );
    }
}