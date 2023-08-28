import React, { Component } from 'react';
import Lifececlt_Comp from '../Lifececlt_Comp';

class Test_Lifececlt_Comp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            company: 'rikkei academy',
        }
    }
    handleShow = () => {
        this.setState({
            show: !this.state.show,
            // company: text
        })
    }
    handleUpdate = () => {
        this.setState({
            company: 'rikkei soft'
        })
    }

    render() {
        return (
            <div>
                {/* <button onClick={() => this.handleShow('Rikke Academy')}>Show1</button>
                <button
                    onClick={() => this.handleShow('Rikke Soft')}>Change Props
                </button>
                <Lifececlt_Comp company={this.state.company} /> */}

                <button onClick={this.handleShow}>Show1</button>
                <button onClick={this.handleUpdate}>Change Props</button>
                {this.state.show === true ? (<Lifececlt_Comp company={this.state.company}></Lifececlt_Comp>) : (<></>)}
            </div>
        );
    }
}

export default Test_Lifececlt_Comp;