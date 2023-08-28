import React, { Component } from 'react';
class BaiTap3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userCode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            value: "",
        };
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.value == "") {
            alert("Mã nhân viên không được để trống")
            return
        }

        const index = this.state.userCode.findIndex(e => e == this.state.value)
        if (index != -1) {
            alert("Mã nhân viên đã tồn tại trong hệ thống")
            return
        }
        this.setState({
            userCode: [...this.state.userCode, this.state.value]
        })
        alert("Thêm mã nhân viên thành công")
    }

    render() {
        return (
            <>
                <h2>bai 3</h2>
                {/* Nếu người dùng không nhập gì thì hiển thị cảnh báo “Mã nhân viên không được để trống”
                Nếu mã nhân viên không bắt đầu với 2 ký tự “NV” thì hiển thị cảnh báo “Mã nhân viên không đúng định dạng”
                Nếu mã nhân viên < 8 thì hiển thị cảnh báo “Mã nhân viên không được ngắn hơn 8 ký tự”
                Nếu mã nhân viên > 16 ký tự thì hiển thị cảnh báo “Mã nhân viên không được dài hơn 16 ký tự”
                Nếu mã nhân đã đúng định dạng và độ dài thì tiến hành thêm nhân viên vào mảng */}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default BaiTap3;