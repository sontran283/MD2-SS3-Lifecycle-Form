import React, { Component } from 'react';

class FormControlled_C2 extends Component {
    constructor(props) {
        super(props)
        this.state = {  //  state quan li trang thai du lieu trong mot component
            userName: '',
            dateOfBirth: '',
            email: '',
            password: '',
        }
    }

    //  ham lang nghe su thay doi trong cac o input
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value,
        })

        //  cap nhat lai state
        // if (name === 'userName') {
        //     this.setState({
        //         userName: value,
        //     });
        // } else if (name === 'dateOfBirth') {
        //     this.setState({
        //         dateOfBirth: value,
        //     });
        // } else if (name === 'email') {
        //     this.setState({
        //         email: value,
        //     });
        // } else {
        //     this.setState({
        //         password: value,
        //     });
        // }
    };

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
                        <input


                            onChange={this.handleChange}  //target lay dung vi tri phan tu dang onchange, value lay duoc dung gia tri
                            className="form-control" id="username" name="userName" required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateOfBirth" className="form-label">
                            DateOfBirth
                        </label>
                        <input


                            onChange={this.handleChange}
                            type="date" className="form-control" id="dateOfBirth" name="dateOfBirth" required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input


                            onChange={this.handleChange}
                            type="email" className="form-control" id="email" name="email" required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input


                            onChange={this.handleChange}
                            type="password" className="form-control" id="password" name="password" required
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

export default FormControlled_C2;