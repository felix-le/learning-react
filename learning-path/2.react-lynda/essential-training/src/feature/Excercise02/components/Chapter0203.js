import React from 'react';

function Chapter0203() {

  var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
  }

  const Title = () => {
    
    return (
      <ul id="title" className = 'header' style={style}>
        <li>
          item on our list chapter 0203
        </li>
      </ul>  
    )
  }

  return (
    <div>
      <Title />
    </div>
  )
}

export default Chapter0203;
