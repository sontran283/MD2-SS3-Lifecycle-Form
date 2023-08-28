import React, { Component } from 'react';

class BT1_Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
        }
    }
    handleChangeLogin = (event) => {
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }
    handleSubmitLogin = (e) => {
        e.preventDefault()
        const newUserRegister = {
            userName: this.state.userName,
            password: this.state.password,
        }
        console.log('newUserRegister', newUserRegister);
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmitLogin(e)}>
                    <h2>Login</h2>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            userName
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="userName"
                            name="userName"
                            aria-describedby="emailHelp"
                            required
                            onChange={this.handleChangeLogin}
                        />
                        <div id="emailHelp" className="form-text">
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            required
                            onChange={this.handleChangeLogin}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default BT1_Login;