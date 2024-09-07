import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [messages, setMessages] = React.useState(["a", "b"])

  return (
    <div className="App">
      {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}
    </div>
  );
}

export default App;
