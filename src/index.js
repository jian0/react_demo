import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import App from './components/01-子传父';
// import App from './components/02-非受控表单';
// import App from './components/03-props插槽';
// import App from './components/04-btn测试局部样式';
// import App from './components/05-测试路由';
// import App from './components/06-redux仓库';

// 引入仓库
import store from "./store"
// 借助react-redux 中的一个组件实现传递
import { Provider } from "react-redux"
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
