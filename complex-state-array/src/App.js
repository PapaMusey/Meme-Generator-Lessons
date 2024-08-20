import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {

  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2","Thing 3"])

    function addItem(){
      setThingsArray (prevThingsArray =>  [...prevThingsArray, ` Thing ${prevThingsArray.length + 1}` ])
    }

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  return (
    <div>
      <button onClick={addItem}>
        Add addItem
      </button>
      {thingsElements}
    </div>
  );
}

export default App;

