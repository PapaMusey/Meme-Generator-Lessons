import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [starWarsdata,setStarWarsData] = React.useState({})
  console.log("Component rendered")
  // How to get data from an API 
  // 1) Get the Data (fetch) You can use either fetch or Axios
  // 2) Save the data to state - so that it can be displayed on the screen
  fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => console.log(data))  //setStarWarsData(data) causes the component to keep rendering

  return (
    <div className="App">
      <pre>{JSON.stringify(starWarsdata,null,2)}</pre>
   </div>
  );
}

export default App;
