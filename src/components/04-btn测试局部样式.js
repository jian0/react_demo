import React, { Component } from 'react';

// 引入局部样式
import Btn from "../style/btn.module.scss"
class App extends Component {
    state = {}
    render() {
        return ( 
            <div>
                <button className={Btn.btn}>按钮</button>
            </div>
         ); 
    }
}

export default App;