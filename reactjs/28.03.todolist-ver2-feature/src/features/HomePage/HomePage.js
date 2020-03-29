import React, {useState} from 'react';

const HomePage = () => {
  const [demo, setDemo] = useState([]); // desctruturing es6

  const handleClick = () => {
    console.log('===before===', demo);
    setDemo([1,2,3]);
    console.log('===after===', demo);
  }
  
  return (
    <>
      <h1>This is Home Page {demo}</h1>
    <button type="button" onClick={handleClick}>click</button>
    </>
  );
}
export default HomePage;