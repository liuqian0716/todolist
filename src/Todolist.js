import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'
import store from './store'
import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './store/actionTypes'
import {changeInputAction , addItemAction ,deleteItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {

    constructor(props){
      super(props)
      this.changeInputValue = this.changeInputValue.bind()
      this.storeChange = this.storeChange.bind(this)
      this.clickBtn = this.clickBtn.bind(this)
      this.deleteItem = this.deleteItem.bind(this);
      console.log(store.getState())
      this.state = store.getState()
      store.subscribe(this.storeChange) //订阅Redux的状态
    }

    // changeInputValue (e) {
    //   const action = {
    //     type: CHANGE_INPUT,
    //     value: e.target.value
    //   }
    //   store.dispatch(action)
    // }

    changeInputValue(e){
      const action = changeInputAction(e.target.value)
      store.dispatch(action)
    }

    storeChange () {
      this.setState(store.getState())
    }

    clickBtn () {
      const action = addItemAction()
      store.dispatch(action)
      // const action = { type:ADD_ITEM}
      // store.dispatch(action)
    }

    deleteItem (index) {
      const action = deleteItemAction(index)
      store.dispatch(action)
      // const action = {
      //   type: DELETE_ITEM,
      //   index
      // }
      // store.dispatch(action)
    }

    render() { 
        return ( 
          <TodoListUI />
            // <div style={{margin:'10px'}}>
            //     <div>
            //         <Input placeholder={this.state.inputValue} style={{ width:'250px', marginRight:'10px'}} onChange={this.changeInputValue}/>
            //         <Button type="primary" onClick={this.clickBtn}>增加</Button>
            //     </div>
            //     <div style={{margin:'10px',width:'300px'}}>
            //         <List
            //             bordered
            //             dataSource={this.state.list}
            //             renderItem={(item,index)=>(<List.Item onClick={e=>this.deleteItem(index)}>{item}</List.Item>)}
            //         />    
            //     </div>
            // </div>
         );
    }
}
export default TodoList;

