import React from 'react'

function JokeItem(props) {
  return (
    <div className="mt-20">
      <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
      <p style={{ color: !props.question && "green", backgroundColor:!props.question && "white" }}>Answer: {props.punchLine}</p>
      <hr/>
    </div>
  )
}
// {{display: props.question ? "block": "none"}} == {{display: !props.question && "none"}}
export default JokeItem
