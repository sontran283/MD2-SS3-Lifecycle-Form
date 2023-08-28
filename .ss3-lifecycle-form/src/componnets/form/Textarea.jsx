import React, { Component } from 'react';

class Textarea extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event) {
        alert('Một bài luận đã được gửi: ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>demo:</label>
                    <textarea value={this.state.value} onChange={(event) => this.handleChange(event)} />
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

export default Textarea;