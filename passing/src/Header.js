import React from "react";
// import ReactDOM from "react-dom";

export default function Header (props){


    return (
        <header>
            <p>Current user: {props.person} </p>
        </header>
    );
}