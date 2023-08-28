import React, { Component } from 'react';

class ThucHanh3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }


    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.count !== this.state.count) {
            return true;
        }
        return false;
    }


    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click Here</button>
            </div>
        );
    }
}

export default ThucHanh3;