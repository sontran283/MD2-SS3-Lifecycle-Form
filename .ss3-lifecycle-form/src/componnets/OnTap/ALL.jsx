import React, { Component } from 'react';
import BT1_Login from './BT1_Login';
import BT1_Register from './BT1_Register';

class ALL extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFormLogin: false,
            showFormRegister: false,
        }
    }

    render() {
        return (
            <div>
                <button
                    onClick={() => this.setState({
                        showFormLogin: !this.state.showFormLogin,
                        showFormRegister: false,
                    })}>
                    Show Form Login
                </button>

                <button
                    onClick={() => this.setState({
                        showFormLogin: false,
                        showFormRegister: !this.state.showFormRegister,
                    })}>
                    Show Form Register
                </button>

                {this.state.showFormLogin === true ? (<BT1_Login></BT1_Login>) : (<></>)}
                {this.state.showFormRegister === true ? (<BT1_Register></BT1_Register>) : (<></>)}
            </div>
        );
    }
}

export default ALL;