import React from 'react';

function Title(props) {

  return (
    <React.Fragment>
      <h1 style={{ color: props.textColor || '#000', fontSize: props.textSize || '14px' }}>Todo List</h1>
      <h3 style={{color: props.subColor || '#eee'}}> Direction </h3>
    </React.Fragment>  
  )
}
export default Title;