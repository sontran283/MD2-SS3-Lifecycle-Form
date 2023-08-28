import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = { value: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    handleSubmit(event) {
        alert("tên của một người đã được gửi đi: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={(event) => this.handleChange(event)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;