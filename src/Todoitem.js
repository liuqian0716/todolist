import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component {
  constructor (props) {
    super(props);
    this.handleDetele = this.handleDetele.bind(this);
  }

  render () {
    const {item, test} = this.props;//解构赋值
    return (
      <div onClick={this.handleDetele}>
        {test} - {item}
      </div>
    )
  }
  handleDetele () {
    const {deleteItem,i} = this.props;
    deleteItem(i)
  }
}
Todoitem.propTypes = {
  test: PropTypes.string.isRequired,
  item: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
  deleteItem: PropTypes.func,
  i: PropTypes.number
}
Todoitem.defaultProps = {
  test: 'hello world'
}
export default Todoitem;