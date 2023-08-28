import React, { Component } from 'react';

class FormDemo extends Component {
    constructor() {
        super()
        this.state = {
            form: {
                email: "",
                password: "",
            },
            errows: {},
        }
    }
    hanldeChangeValue = (e) => {
        const data = { ...this.state.form }
        data[e.target.name] = e.target.value
        this.setState({
            form: data
        })
    }
    handleSubmitForm = (e) => {
        e.preventDefault()
        const { email, password } = this.state.form;

        const errows = {};  // biến lưu trữ các lỗi
        if (typeof email === 'string' && email.trim() === '') {
            errows.email = 'email khong duoc de trong'
        }
        if (typeof password === 'string' && password.trim() === '') {
            errows.password = 'password khong duoc de trong'
        }

        this.setState({
            errows: errows,
        })
    }


    render() {
        const { form, errows } = this.state;
        console.log(form, errows);

        return (
            <form onSubmit={this.handleSubmitForm}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className={'form-control ${errows.email ? "is-invalid" : ""}'}
                        id="Email"
                        name="email"
                        aria-describedby="emailHelp"
                        onChange={this.hanldeChangeValue}
                    />
                    {errows.email && (
                        <div className="invalid-feedback">{errows.email}</div>
                    )}

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className={'form-control ${errows.password ? "is-invalid" : ""}'}
                        id="password"
                        name="password"
                        onChange={this.hanldeChangeValue}
                    />
                    {errows.email && (
                        <div className="invalid-feedback">{errows.password}</div>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">
                    Đăng nhập
                </button>
            </form>

        );
    }
}

export default FormDemo;