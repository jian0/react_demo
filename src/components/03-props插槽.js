import React, { Component } from 'react';

class Child extends Component {
    state = {}
    render() {
        return (
            <div style={{border:"2px solid #000",marginBottom:"50px"}}>
                {/* 插槽占位 */}
                {this.props.children}
            </div>
        );
    }
}

class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <Child>1111111111111111111</Child>
                <Child>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Child>
            </div>
        );
    }
}

export default App;