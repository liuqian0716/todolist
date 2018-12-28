import React, { Component } from 'react'
import './style.css'
import Todoitem from './Todoitem'

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: ['学习React','学习英语']
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
        <ul>
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
    this.setState((prevState)=>({
      list: [...prevState.list,prevState.inputValue],
      inputValue: ''
    }))
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

