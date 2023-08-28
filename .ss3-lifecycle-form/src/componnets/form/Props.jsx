import React, { Component } from 'react';

class Props extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleDownCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick={this.handleDownCount}>Click</button>
            </div>
        );
    }
}

export default Props;