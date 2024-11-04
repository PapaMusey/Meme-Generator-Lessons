import React from 'react'

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
      };
      //this is the best practice. NOT passing a prop to a component and using that prop to initialize a state
      // Derived states is not needed in this kind of work. So were going to use another way to go about the work
      //it may be more complex than using derived states, but it is the best option 
    
  
  return (
    <div style={styles} className='box' 
    onClick={()=>props.handleClick(props.id)}
    ></div>
    //the reason why we use the arrow function () => here is because if we don't, it will render 
    //the toggle function immediately the app renders onto the console/screen but not when the event is clicked
  )
}

