import React, { Component } from 'react';

class Lifececlt_Comp extends Component {
    constructor(props) {
        super(props) // ke thua tat ca thuoc tinh va phuong thuc trong component
        console.log('component được khởi tạo');
        this.state = {
            className: 'JV_230630'
        }
    }

    componentWillMount() {
        console.log('component Will Mount');
    }

    componentDidMount() {
        console.log('component Did Mount');
    }

    //  duoc goi khi state bi thay doi
    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps được chạy, lúc này props mới là :', newProps);
    }

    shouldComponentUpdate() {
        return true;  // mac dinh ham nay se return true
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate duoc goi');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount duoc goi'); // thuong duoc su dung de clear di su kien
    }

    render() {
        console.log('component được render');

        return (
            <div>
                <h4>ten cty o component con la: {this.props.company}</h4>

                {/* state */}
                <h3>ten lop: {this.state.className}</h3>
                <button onClick={() => this.setState({
                    className: 'RA_HN_JV_230630'
                })}>Change State</button>
            </div>
        );
    }
}

export default Lifececlt_Comp;