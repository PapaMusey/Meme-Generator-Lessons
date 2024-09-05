import logo from './logo.svg';
import './App.css';
import React from "react";
// import ReactDOM from "react-dom"
import Box from './Box';
import Boxes from './Boxes';

function App(props) {
  const [squares,setSquares] = React.useState(Boxes)
  function toggle(id){
    console.log(id)
  }

  const newSquareArray = squares.map (square => (
<Box key={square.id} 
  id={square.id} 
  on={square.on} 
  handleClick={toggle}/>
  )
)

  return (
    <main>
    {newSquareArray}
  </main>
  );
}

export default App;
