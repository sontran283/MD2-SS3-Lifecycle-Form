import React, { Component } from 'react';

class BaiTap2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            Password: '',
            Email: '',
        }
    }
    handleChangeSignUp = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }
    handeleSignUp = (e) => {
        e.preventDefault()
        const newUserSingUp = {
            userName: this.state.userName,
            Password: this.state.password,
            Email: this.state.email,
        }
        console.log('newUserSingUp', newUserSingUp);
    }


    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handeleSignUp(e)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            userName
                        </label>
                        <input
                            type="userName"
                            className="form-control"
                            id="userName"
                            name="userName"
                            required
                            onChange={this.handleChangeSignUp}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            required
                            onChange={this.handleChangeSignUp}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            required
                            onChange={this.handleChangeSignUp}
                        />
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Join
                    </button>
                </form>

            </div>
        );
    }
}

export default BaiTap2;