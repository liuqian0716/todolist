import React, { Component } from 'react'
import './style.css'

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: 'hello123',
      list: ['学习React','学习英语']
    }
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
            onChange={this.handlerInput.bind(this)}
          />
          <button onClick={this.submitBtn.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((n,index)=>{
              return <li
                      key={n}
                      dangerouslySetInnerHTML={{__html: n}}
                      onClick={this.handlerDelete.bind(this,index)} 
                      >
                      </li>
            })
          }
        </ul>
      </div>
    )
  }
  handlerInput (e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  submitBtn () {
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }
  handlerDelete (index) {
    //immutable
    // state 不允许我们做任何的改变（直接修改state）
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list: list
    })
  }
}

export default Todolist;

