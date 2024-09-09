import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
//after learning the default behavior this also covers the useEffect dependencies array

function App() {
  const [count,setCount] =React.useState(1)
  const [starWarsdata,setStarWarsData] = React.useState({})
  console.log("Component rendered")

  
  React.useEffect(function(){
    console.log("Effect ran")
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))  
  },[count] )


  return (
    <div className="App">
      <pre>{JSON.stringify(starWarsdata,null,2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount (prevCount=>prevCount + 1)}>Get Next Character </button>
   </div>
  );
}

export default App;
