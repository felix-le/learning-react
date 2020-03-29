import React from 'react';

// arrow function
const Button = (props) => {
  return (
    <button type="button" onClick={props.handleClick}
      className="btn btn-primary"
      style={{ background: `${props.backgroundColor}` }}>
      {props.name}
    </button>
  )
}
export { Button };

// function normal
// function Button() {

// }

  
  
// template string
// const html = "<div>" + props.name + "</div>"
// const html = `<div>${props.name} ${props.backgroundColor}</div>`