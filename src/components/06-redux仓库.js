import React, { Component } from 'react';
import { connect } from "react-redux";
import {cartAddNum} from "../store/actionCreator"
class Btn extends Component {

    // handleClick(unit){
    //     this.props.addNum(unit)
    // }

    render() {
        return (
            <div>
                <button onClick={()=>{this.props.addNum(1)}}>btn{this.props.btnNum}</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        btnNum: state.num
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNum(unit) {
            dispatch(cartAddNum(unit))
        }
    }
}

const connFunc = connect(mapStateToProps, mapDispatchToProps)
export default connFunc(Btn);