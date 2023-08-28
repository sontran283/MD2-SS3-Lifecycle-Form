import React, { Component } from 'react';

class FormControlled_C1 extends Component {
    constructor(props) {
        super(props)
        this.state = {  //  state quan li trang thai du lieu trong mot component
            userName: '',
            dateOfBirth: '',
            email: '',
            password: ''
        }
    }

    //  ham xu li gui du lieu
    handleSubmit = (e) => {
        e.preventDefault()
        //  doi tuong newUser
        const newUser = {
            userName: this.state.userName,
            dateOfBirth: this.state.dateOfBirth,
            email: this.state.email,
            password: this.state.password,
        }
        console.log('newUser', newUser);
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            UserName
                        </label>
                        <input value={this.state.userName}
                            onChange={(e) => this.setState({ userName: e.target.value })}  //target lay dung vi tri phan tu dang onchange, value lay duoc dung gia tri
                            className="form-control" id="username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateOfBirth" className="form-label">
                            DateOfBirth
                        </label>
                        <input value={this.state.dateOfBirth}
                            onChange={(e) => this.setState({ dateOfBirth: e.target.value })}
                            type="date" className="form-control" id="dateOfBirth" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                            type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input value={this.state.password}
                            onChange={(e) => this.setState({ password: e.target.value })}
                            type="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default FormControlled_C1;