import React, { Component } from 'react';

class ThucHanh1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
        };

        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {(this.state.isToggleOn ? 'xin chao ' : 'toi co the giup gi cho ban khong, ')}
            </button>
        );
    }
}

export default ThucHanh1;