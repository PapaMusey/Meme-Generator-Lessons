import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom"
import Boxes from './Boxes';

function App(props) {
  const [squares,setSquares] = React.useState(Boxes)
  // props.darkMode === true ? backgroundColor= "#222222" : backgroundColor= "#cccccc";

 const styles = {
  backgroundColor: props.darkMode ? "#222222" : "#cccccc"
};

  const newSquareArray = squares.map (square =>(
<div style={styles} className='box' key={square.id}></div>
  )
)

  return (
    <main>
    {newSquareArray}
  </main>
  );
}

export default App;
