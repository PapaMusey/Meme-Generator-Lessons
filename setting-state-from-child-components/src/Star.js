import React from "react";
import ReactDOM from "react-dom";

export default function Star(props){

    let starIcon = props.isFilled === false ? "/images/starempty.png" : "/images/starfill.png"


    return(
<>
<img 
    onClick={props.handleClick}
      src={starIcon}
      className='star-image'
      alt='star-image'
      style={{width: "50px" ,  height:"50px"
      }}
    //   onClick={toggleFavorite}
    />
</>
    );
}