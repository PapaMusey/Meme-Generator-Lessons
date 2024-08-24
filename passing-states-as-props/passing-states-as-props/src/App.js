import logo from './logo.svg';
import './App.css';
import React from 'react';
import Count from './Count';

function App() {
  // const [isImportant, setIsImportant] = React.useState("Yes")
  // console.log(isImportant)

  // function handleClick() {
  //   setIsImportant("No")
  // }

  const [count, setCount] = React.useState(0)
  console.log(count)

  // if your your new outcome depends on your old outcome, its best to use a callback function into
  // your state in this case "prev" and whatever the callback function returns will be the new value of state
 
  function add() {
    setCount(prevCount => prevCount + 1)
  }
  function minus() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    // <div className="state">
    //   <h1 className='state-title'> Is it important to know</h1>
    //   <div className='state-value' onClick={handleClick}> 
    //     <h1>{isImportant}</h1> </div>
    //   </div>

    <div className="counter">
      <button className='counter-minus' onClick={minus}> - </button>
      <Count number={count}/>
      <button className='counter-plus' onClick={add}> + </button>
    </div>
  );
}

export default App;
