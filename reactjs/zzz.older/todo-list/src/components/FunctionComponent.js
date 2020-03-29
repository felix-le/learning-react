import React, { useEffect } from 'react';

function FunctionComponent(props) {

  console.log('=====function component=====', props);

  useEffect(() => {
    console.log('=re-render function component')
  })

  return (
    <React.Fragment>
      <div>this is function component</div>
      <div>address: {props.address}</div>
    </React.Fragment>
  )
}

export default FunctionComponent;