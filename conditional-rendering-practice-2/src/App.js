import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [messages, setMessages] = React.useState(["a"])

  // let message;

  // if (messages.length === 0) {
  //   message = "You're all caught up";
  // } else if (messages.length === 1) {
  //   message = `You have ${messages.length} unread message`;
  // } else {
  //   message = `You have ${messages.length} unread messages`;
  // }
  // return (
  //   <div >
  //     <h1>{message}</h1>
  //   </div>
    // NOW THIS is a good idea when you have 3 conditons. However it can be done in a better way
  //  condition ? true-this : false:this

  return (
  <div >
{      
  messages.length === 0 ? 
  <h1> You are all caught up</h1>:
  <h1> You have {messages.length} unread {messages.length === 1 ? "message" : "messages" }</h1>
}    
</div>
  );
}

export default App;
