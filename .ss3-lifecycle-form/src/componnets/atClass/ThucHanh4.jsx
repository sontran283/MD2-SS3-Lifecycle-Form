import React, { Component } from 'react';

class ThucHanh4 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    // sử dụng componentDidUpdate để kiểm tra nếu 
    // count đạt tới giá trị nhất định(ví dụ: 10), thì hiển thị thông báo
    componentDidUpdate(prevProps, prevState) {
        if (this.state.count === 10) {
            alert('Count reached maximum limit');
        }
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleIncrement}>Tăng</button>
                <button onClick={this.handleDecrement}>Gỉam</button>
            </div>
        );
    }
}

export default ThucHanh4;