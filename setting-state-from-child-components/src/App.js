import logo from './logo.svg';
import './App.css';
import React from 'react';
import Star from './Star';

function App() {

  const [contact,setContact] = React.useState({
    firstName:"John",
    lastName:"Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })


 function toggleFavorite(){
    setContact (prevContact => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite
      }

    })
    
  console.log("Toggle Favorite")
 }
  return (
    <main>
      <article className="card">
        <img src="/images/userimage.png" className='card-image' alt='userimage'/>
        <div className="card-info">
    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
    <h2 className="card-contact">{contact.firstName} {contact.lastName}</h2>
    <p className="card-contact">{contact.phone}</p>
    <p className="card-contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default App;
