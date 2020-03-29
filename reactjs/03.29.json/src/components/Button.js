import React from 'react';

const Button = (props) => {

  return (
    <button onClick={props.handleClick}>Read More</button>
  );
};

export default Button;