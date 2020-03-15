import React, { Component } from 'react';

// 受控表单就是双向绑定
class App extends Component {
    constructor() {
        super()
        this.href = React.createRef()
    }
    state = {}
    handleClick=()=>{
        console.log(this.href);
        console.log(this.href.current.scrollHeight);
    }
    render() {
        return (
            <div>
                <h1 ref={this.href}>大标题</h1>
                <button onClick={this.handleClick}>按钮</button>
            </div>
        );
    }
}

export default App;