import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/checked.svg';
class TodoItem extends Component{

  render() {
    const { item, onClick } = this.props;
    let url = checkImg;
    if (item.isComplete) {
      url = checkCompleteImg;
    }
    return ( 
      <div  className={classNames('TodoItem', {
        'TodoItem-complete': item.isComplete
      })}>
        <img onClick={onClick} src={url} height="32" width="32"alt="hello girl"/>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}
export default TodoItem;