import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Body from './Body';

function App() {
  const [user,setUser] = React.useState("Kwaku");


  return (
    // LESSON FOR PASSING DATA AROUND
    <>
    <Header person={user}/>
    <Body person={user}/>
    </>
          
  );
}

export default App;
