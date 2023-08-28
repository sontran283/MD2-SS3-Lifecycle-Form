import React, { Component } from 'react';

class BT1_Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            confirmPartWord: "",
            email: "",
        }
    }
    handleChangleRegister = (event) => {
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }
    handleSubmitRegister = (e) => {
        e.preventDefault()
        const newUserRegister = {
            userName: this.state.userName,
            password: this.state.password,
            confirmPartWord: this.state.confirmPartWord,
            email: this.state.email,
        }
        console.log("newUserRegister", newUserRegister);
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmitRegister(e)}>
                    <h2>Register</h2>
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
                            onChange={this.handleChangleRegister}
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
                            onChange={this.handleChangleRegister}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            confirm password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPartWord"
                            name="confirmPartWord"
                            required
                            onChange={this.handleChangleRegister}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            required
                            onChange={this.handleChangleRegister}
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

export default BT1_Register;