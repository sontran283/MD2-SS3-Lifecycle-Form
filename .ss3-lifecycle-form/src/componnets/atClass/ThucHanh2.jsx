import React, { Component } from 'react';

class ThucHanh2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    static getDerivedFormPorps(props, state) {
        if (props.count != state.count) {
            return { count: props.count }
        }
        return null;
    }


    render() {
        return (
            <div>
                <h1>count: {this.state.count}</h1>
            </div>
        );
    }
}

export default ThucHanh2;