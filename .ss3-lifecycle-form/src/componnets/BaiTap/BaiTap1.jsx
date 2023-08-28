import React, { Component } from 'react';

class BaiTap1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserName: '',
            password: '',
        }
    }

    //  ham lang nghe su thay doi trong o input
    handleChangeLogin = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        })
    }
    hadleSubmitLogin = (e) => {
        e.preventDefault()
        const newUserLogin = {
            UserName: this.state.UserName,
            Password: this.state.password,
        }
        console.log('newUserLogin', newUserLogin);
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.hadleSubmitLogin(e)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            UserName
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="UserName"
                            name="UserName"
                            aria-describedby="emailHelp"
                            onChange={this.handleChangeLogin}
                            required
                        />
                        <div id="emailHelp" className="form-text">
                        </div>
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
                            onChange={this.handleChangeLogin}
                            required
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Remember me?
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>

            </div>
        );
    }
}

export default BaiTap1;