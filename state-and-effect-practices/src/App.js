import logo from './logo.svg';
import './App.css';
import React from 'react';
import WindowTracker from './WindowTracker';

function App() {
  const [show,setShow] = React.useState(true)
  function toggleShow(){
    setShow(prevShow => !prevShow)
  }

  return (
    <div className="container">
      <button onClick={toggleShow}>
        Toggle Window Tracker
      </button>
      {show && <WindowTracker /> }
    </div>
  );
}

export default App;
