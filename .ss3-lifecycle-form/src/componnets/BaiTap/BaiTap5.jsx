import React, { Component } from 'react';

class BaiTap5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            code: '',
            warning: '',
        }
    }
    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            code: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const code = this.state.code.split("");
        if (code == "") {
            this.setState({
                warning: "Mã nhân viên không được để trống",
            });

        } else if (code[0] !== "N" && code[1] !== "V") {
            this.setState({
                warning: "Mã nhân viên không đúng định dạng",
                code: ""
            });

        } else if (code.length < 8) {
            this.setState({
                warning: "Mã nhân viên không được ngắn hơn 8 kí tự",
                code: "",
            });

        } else if (code.length > 16) {
            this.setState({
                warning: "Mã nhân viên không được dài hơn 16 kí tự",
                code: "",
            });

        } else {
            this.setState({
                arr: [...this.state.arr, this.state.code],
                warning: "Thêm thành công",
                code: "",
            });
        }
    };

    render() {
        return (
            <div>
                <h2>bai 5</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="code"
                        onChange={this.handleChange}
                        value={this.state.code}
                    />
                    <p style={{ color: "red" }}>{this.state.warning}</p>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default BaiTap5;