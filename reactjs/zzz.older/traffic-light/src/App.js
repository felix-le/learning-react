import React, { Component } from 'react';

import './App.css';


import TrafficLight from './components/TrafficLight';


const RED = 0;
const ORANGE = 1;
const GREEN = 2;




class App extends Component{
  constructor() {
    super();
    this.state = {
      currenColor: GREEN
    };

    setInterval(() => {
      this.setState({
        currenColor: this.getNextColor(this.state.currenColor)
      })
    }, 2000);

  }
  getNextColor(color){
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }



  render() {

    return (
      <div className="App">
        <TrafficLight />
      </div>
    );
  }
}

export default App;
