import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './componnets/Header'
import Toolbar from './componnets/Toolbar'
import Table from './componnets/Table'
import FormAdd from './componnets/FormAdd'
import FormDelete from './componnets/FormDelete'
import FormEdit from './componnets/FormEdit'
import Form from './componnets/form/form'
import Textarea from './componnets/form/Textarea'
import SelectTag from './componnets/form/SelectTag'
import Reservation from './componnets/form/Reservation'
import FormDemo from './componnets/form/FormDemo'
import Props from './componnets/form/Props'
import ThucHanh1 from './componnets/atClass/ThucHanh1'
import ThucHanh2 from './componnets/atClass/ThucHanh2'
import ThucHanh3 from './componnets/atClass/ThucHanh3'
import ThucHanh4 from './componnets/atClass/ThucHanh4'
import Lifececlt_Comp from './componnets/Lifececlt_Comp'
import FormControlled_C2 from './componnets/FormControlled_C2'
import BaiTap1 from './componnets/BaiTap/BaiTap1'
import BaiTap2 from './componnets/BaiTap/BaiTap2'
import BaiTap3 from './componnets/BaiTap/BaiTap3'
import BaiTap4 from './componnets/BaiTap/BaiTap4'
import BaiTap5 from './componnets/BaiTap/BaiTap5'
import Test_Lifececlt_Comp from './componnets/form/Test_Lifececlt_Comp'
import BT1_Login from './componnets/OnTap/BT1_Login'
import BT1_Register from './componnets/OnTap/BT1_Register'
import ALL from './componnets/OnTap/ALL'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      company: 'rikkei academy',
      showFormSubmit: false, // state de quyet dinh trang thai cua form
      showFormLogin: false,
      showFormSignUp: false,
    }
  }

  // handleShow = (e) => {
  //   console.log('enent', e);  // event la mot su kien mac dinh duoc js tao ra khi co su kien tu nguoi dung
  //   this.setState({
  //     show: !this.state.show,
  //   })
  // }

  render() {
    return (
      <>
        {/* <Header></Header> */}
        {/* <Toolbar></Toolbar> */}
        {/* <Table></Table> */}
        {/* <FormAdd></FormAdd> */}
        {/* <FormDelete></FormDelete> */}
        {/* <FormEdit></FormEdit> */}

        {/* <Form></Form> */}
        {/* <Textarea></Textarea> */}
        {/* <SelectTag></SelectTag> */}
        {/* <Reservation></Reservation> */}
        {/* <FormDemo></FormDemo> */}
        {/* <Props></Props> */}


        {/* <ThucHanh1></ThucHanh1> */}
        {/* <ThucHanh2></ThucHanh2> */}
        {/* <ThucHanh3></ThucHanh3> */}
        {/* <ThucHanh4></ThucHanh4> */}

        {/* <BaiTap3></BaiTap3> */}
        <BaiTap4></BaiTap4>
        {/* <BaiTap5></BaiTap5> */}
        {/* <Test_Lifececlt_Comp></Test_Lifececlt_Comp> */}

        {/* Ôn tập */}
        {/* <ALL></ALL> */}


        {/* <button onClick={this.handleShow}>Show</button>
        <button
          onClick={() => this.setState({
            company: 'rikkei soft'
          })}>
          Change Props
        </button> */}

        {/* <button
          onClick={() => {
            this.setState({
              showFormSubmit: !this.state.showFormSubmit,
              showFormLogin: false,
              showFormSignUp: false,
            })
          }}>
          Show Form Submit
        </button>

        <button
          onClick={() => {
            this.setState({
              showFormSubmit: false,
              showFormLogin: !this.state.showFormLogin,
              showFormSignUp: false,
            })
          }}>
          Show Form Login
        </button>

        <button
          onClick={() => {
            this.setState({
              showFormSubmit: false,
              showFormLogin: false,
              showFormSignUp: !this.state.showFormLogin,
            })
          }}>
          Show Form SingUp
        </button>


        {this.state.show === true ? (<Lifececlt_Comp company={this.state.company} />) : (<></>)}

        {this.state.showFormSubmit === true ? (<FormControlled_C2 />) : (<></>)}

        {this.state.showFormLogin === true ? (<BaiTap1 />) : (<></>)}

        {this.state.showFormSignUp === true ? (<BaiTap2 />) : (<></>)}

        {this.state.showFormSignUp === true ? (<BaiTap4 />) : (<></>)} */}

      </>
    );
  }
}
export default App;

