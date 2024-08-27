import logo from './logo.svg';
import './App.css';
import React from "react";
// import ReactDOM from "react-dom"
import Box from './Box';
import Boxes from './Boxes';

function App(props) {
  const [squares,setSquares] = React.useState(Boxes)
  // props.darkMode === true ? backgroundColor= "#222222" : backgroundColor= "#cccccc";

  const newSquareArray = squares.map (square => (
<Box key={square.id} on={square.on} />
  )
)

  return (
    <main>
    {newSquareArray}
  </main>
  );
}

export default App;
