import React, { Component } from 'react';

class SelectTag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event) {
        alert('những người bạn thân của tôi là: ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        demo:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="tran huy hoang">tran huy hoang</option>
                            <option value="tran hoang huy">tran hoang huy</option>
                            <option value="tran van luc">tran van luc</option>
                        </select>
                    </label>
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default SelectTag;