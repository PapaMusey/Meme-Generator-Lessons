import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const [contact,setContact] = React.useState({
    firstName:"John",
    lastName:"Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

let starIcon = contact.isFavorite === false ? "/images/starempty.png" : "/images/starfill.png"

 function toggleFavorite(){
  // (setContact => prevContact )
  console.log("Toggle Favorite")
 }
  return (
    <main>
      <article className="card">
        <img src="/images/userimage.png" className='card-image' alt='userimage'/>
        <div className="card-info">
    <img 
      src={starIcon}
      className='star-image'
      alt='star-image'
      onClick={toggleFavorite}
    />
    <h2 className="card-contact">{contact.firstName} {contact.lastName}</h2>
    <p className="card-contact">{contact.phone}</p>
    <p className="card-contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default App;
