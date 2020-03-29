import React from 'react';

const Button = (props) => {
  
  return (
    <button onClick={props.handleClick} className={`btn ${props.bgColor}`} >{props.nameBtn}</button>
  )
}

export default Button;



// import React, { Component } from 'react';
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Greeting greeting="Welcome to React" />
//       </div>
//     );
//   }
// }
// const Greeting = ({ greeting }) => <h1>{greeting}</h1>;
// export default App;