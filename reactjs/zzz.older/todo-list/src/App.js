import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/tick.svg';


// components
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        { title: 'đi ngủ', isComplete: true },
        { title: 'đi chơi', isComplete: false },
        { title: 'đi ăn' }
      ],
      checkModal: false,
      address: 'dang van ngu'
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {

    return (event) => {
      console.log(item);
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },

          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  onKeyUp(event) {
    let text = event.target.value;

    if (event.keyCode === 13) {
      if (!text) {
        return
      }


      text = text.trim();
      if (!text) { return };


      this.setState({

        newItem: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems,
        ],
      })
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  handleChangeModal() {
    this.setState({
      checkModal: !this.state.checkModal
    })
  }

  handleChangeAddress() {
    this.setState({
      address: 'le vamn sy'
    })
  }

  render() {
    const { todoItems, newItem, checkModal, address } = this.state;
    if (todoItems.length) {
      return (
        <React.Fragment>
          <div className="App">
            <div className="Header">
              <img src={tick} alt="tick all" width="32" height="32" />
              <input
                type="text"
                placeholder="Met vai lon"
                onChange={this.onChange}
                onKeyUp={this.onKeyUp}
                value={newItem} />
            </div>
            {todoItems.length > 0 && todoItems.map((item, index) =>
              <TodoItem
                key={index}
                item={item}
                onClick={this.onItemClicked(item)} />)
            }

          </div>
          <h1>Class Component</h1>
          <ClassComponent checkModal={checkModal} />
          <button onClick={this.handleChangeModal.bind(this)}>change status modal</button>
          <h2>Function Component</h2>
          <FunctionComponent address={address} />
          <button onClick={this.handleChangeAddress.bind(this)}>change address</button>
        </React.Fragment>
      );
    } else {
      return (
        <div className="App">Nothing here.</div>
      )
    }
  }
}
export default App;

