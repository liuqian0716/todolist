import React, { Component } from 'react'

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: 'hello',
      list: ['学习React','学习英语']
    }
  }
  
  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.inputValue} 
            onChange={this.handlerInput.bind(this)}
          />
          <button onClick={this.submitBtn.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map(n=>{
              return <li key={n}>{n}</li>
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
}

export default Todolist;

