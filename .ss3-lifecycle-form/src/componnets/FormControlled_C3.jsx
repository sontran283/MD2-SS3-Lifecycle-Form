import React, { Component } from 'react';

class FormControlled_C3 extends Component {
    constructor(props) {
        super(props)
        // khai bao tham chieu cho bien userName,dateOfBirth,email,password
        this.userName = React.createRef()
        this.dateOfBirth = React.createRef()
        this.email = React.createRef()
        this.password = React.createRef()
    }

    //  ham xu li gui du lieu
    handleSubmit = (e) => {
        e.preventDefault()
        // const newUser = {
        //     userName: this.userName,
        //     dateOfBirth: this.dateOfBirth,
        //     email: this.email,
        //     password: this.password,
        // }
        console.log('username', this.userName.current.value);
        console.log('dateOfBirth', this.dateOfBirth.current.value);
        console.log('email', this.email.current.value);
        console.log('password', this.password.current.value);
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            UserName
                        </label>
                        <input
                            ref={this.userName} className="form-control" id="username" name="userName" required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateOfBirth" className="form-label">
                            DateOfBirth
                        </label>
                        <input
                            ref={this.dateOfBirth} type="date" className="form-control" id="dateOfBirth" name="dateOfBirth" required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            ref={this.email} type="email" className="form-control" id="email" name="email" required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            ref={this.password} type="password" className="form-control" id="password" name="password" required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default FormControlled_C3;