import React, { Component } from 'react';
import { connect } from "react-redux";
import { cartAddNum, initNumAction } from "../store/actionCreator"
class Btn extends Component {

    // handleClick(unit){
    //     this.props.addNum(unit)
    // }

    componentDidMount() {
        this.props.initNum()
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.props.addNum(1) }}>btn{this.props.btnNum}</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        btnNum: state.cartRenducer.num
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNum(unit) {
            dispatch(cartAddNum(unit))
        },
        initNum() {
            dispatch(initNumAction())
        }
    }
}

const connFunc = connect(mapStateToProps, mapDispatchToProps)
export default connFunc(Btn);