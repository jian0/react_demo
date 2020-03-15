import React, { Component } from 'react';
import './App.css';
// import Content from './components/content.js'

let Content = props => {
  // console.log(props);
  return <ul style={{ border: "1px solid #000", width: "300px" }}>
    {props.arr.map((v,i) => <li key={i} style={{ listStyle: "none" }}>{v}</li>)}
  </ul>

}
class App extends Component {
  state = {
    arr: [],
    msg: ""
  }
  handleChange = (event) => {
    // 因为浏览器性能优化问题，event点开后的target值被清空了，所以一直为null
    // console.log(event);
    this.setState({
      msg: event.target.value.trim()
    })

  }
  handleClick = () => {
    let arr1 = this.state.arr
    arr1.push(this.state.msg)
    // 数组去重
    let arr2 = [...new Set(arr1)]
    console.log(new Set(arr1));
    this.setState({
      arr: arr2,
      msg: ""
    })
    // console.log(this.state.arr);
  }
  render() {
    return (
      <div className="App">
        <input value={this.state.msg} onChange={this.handleChange} type="text" />
        <button className="btn" style={{ marginLeft: "10px" }} onClick={this.handleClick}>按钮</button>
        <Content {...this.state}></Content>

      </div >

    );
  }
}

export default App;
