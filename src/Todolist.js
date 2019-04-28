import React, { Component } from 'react'
import './style.css'
import Todoitem from './Todoitem'

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handlerInput = this.handlerInput.bind(this);
    this.submitBtn = this.submitBtn.bind(this);
    this.handlerDelete = this.handlerDelete.bind(this)
  }
  
  render() {
    return (
      <div>
        <div>
          {
            //添加备注
          }
          <label htmlFor="inputBox">输入内容：</label>
          <input
            id="inputBox"
            className="input"
            value={this.state.inputValue} 
            onChange={this.handlerInput}
          />
          <button onClick={this.submitBtn}>提交</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
          {this.getTodoItem()}
        </ul>
      </div>
    )
  }
  handlerInput (e) {
    const value = e.target.value
    this.setState(()=>({
        inputValue: value
    }))
    // this.setState({
    //   inputValue: e.target.value
    // })
  }
  submitBtn () {
    // setState是一个异步函数，第二个参数是第一个参数成功执行之后去执行的函数，ref为获取dom元素用的
    this.setState((prevState)=>({
      list: [...prevState.list,prevState.inputValue],
      inputValue: ''
    }),()=>{
      console.log(this.ul.querySelectorAll('div').length)
    })
    
    // this.setState({
    //   list: [...this.state.list,this.state.inputValue],
    //   inputValue: ''
    // })
  }
  handlerDelete (index) {
    //immutable
    // state 不允许我们做任何的改变（直接修改state）
    this.setState((prevState)=>{
      const list = [...prevState.list];
      list.splice(index,1);
      return {list}
    })
    // this.setState({
    //   list: list
    // })
  }
  getTodoItem () {
    return this.state.list.map((n,index)=>{
      return (
        <Todoitem 
          key={index}
          item = {n}
          i = {index}
          deleteItem={this.handlerDelete}
        />
      )
    })
  }
}

export default Todolist;

