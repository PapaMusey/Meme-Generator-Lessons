import logo from './logo.svg';
import './App.css';
import React from "react";
// import ReactDOM from "react-dom"
import Box from './Box';
import Boxes from './Boxes';

function App(props) {
  const [squares,setSquares] = React.useState(Boxes)
  function toggle(id){
    setSquares(prevSquares => {
      return prevSquares.map(square => {
         return square.id === id ? {...square, on: !square.on} : square
      })
  })
  /*Does square id match the id I have selected? If so, 
  then return a new object that has all the properties of square 
  except for the on property which you would have to change to the opposite of what it was (Boolean)

  The reason why "{...square, on: !square.on}" is in curly bracket is because it's an object {}
 */
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
