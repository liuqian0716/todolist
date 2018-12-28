import React, { Component } from 'react';

class Todoitem extends Component {
  constructor (props) {
    super(props);
    this.handleDetele = this.handleDetele.bind(this);
  }

  render () {
    const {item} = this.props;//解构赋值
    return (
      <div onClick={this.handleDetele}>
        {item}
      </div>
    )
  }
  handleDetele () {
    const {deleteItem,i} = this.props;
    deleteItem(i)
  }
}
export default Todoitem;