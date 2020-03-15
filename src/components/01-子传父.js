import React, { Component } from 'react';

// 子
class Child extends Component {
    state = {}
    handleClick = () => {
        // console.log(this.props);
        this.props.aaa("儿子")
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>按钮</button>
            </div>
        );
    }
}

// 父
class App extends Component {
    state = {
        msg: "父亲"
    }
    handleSend = (msg) => {
        this.setState({
            msg
        })
    }
    render() {
        return (
            <div>
                {this.state.msg}
                <Child aaa={this.handleSend}></Child>
            </div>
        );
    }
}

export default App;