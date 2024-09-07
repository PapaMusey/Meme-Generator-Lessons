import React from 'react';

export default function Form () {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")

    console.log(firstName, lastName)

    function handleFirstNameChange(event){
        setFirstName((event.target.value))
    }

    function handleLastNameChange(event){
        setFirstName((event.target.value))
    }
    return (
        <>
        <form>
            <input 
            type="text"
            placeholder='first name'
            onChange={handleFirstNameChange}
            />
            <input 
            type="text"
            placeholder='last name'
            onChange={handleLastNameChange}
            />
        </form>
        </>
    )
}