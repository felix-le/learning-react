import React, { Component } from 'react';

import './TrafficLight.css';



const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component{

  redner() {
    const { currenColor } = this.state;
    console.log('Rendering....', currentColor);
    
    return <div className="TrafficLight" >
    <div className={className('bulb', 'red', {
      active: currenColor === RED
    })}/>
    <div className={className('bulb', 'orange', {
      active: currenColor === ORANGE
    })} />
      <div className={className('bulb', 'green', {
      active: currenColor === GREEN
    })}/>
    </div>;
  }
}

export default TrafficLight;