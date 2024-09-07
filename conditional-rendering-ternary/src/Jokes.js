import React from 'react';


export default function Jokes(props) {
    const [isShown, setIsShown] = React.useState(false)
    function toggleShown(){
        console.log(isShown)
        setIsShown(prevShown => !prevShown)
    }
    return(
        <div>
            {props.setup && <h1>I want this {props.setup} and  </h1>}
            {isShown === true && <p>  {props.punchline} </p>}
            {/* {isShown ===true ? 
            <button onClick={toggleShown}>Hide Punchline </button> :
            <button onClick={toggleShown}>Show Punchline </button>} */}
            {/*The commented section is one way of doing it, however, 
            there are better ways of doing it  like so*/}
            <button onClick={toggleShown}> {isShown === true ? "Show" : "Hide"} Punchline </button>

        </div>
    );
}


