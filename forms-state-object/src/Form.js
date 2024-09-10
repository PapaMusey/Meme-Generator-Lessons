import React from 'react';

export default function Form () {
    const [formData, setFormData] = React.useState({firstName: "", lastName: ""})
    // console.log(event.target.value)
    console.log(formData)

    function handleChange(event){
    //    console.log(event.target.value)
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })
    }
    return (
        <>
        <form>
            <input 
            type="text"
            placeholder='First name'
            onChange={handleChange}
            name="firstName"
            />
            <input 
            type="text"
            placeholder='Last name'
            onChange={handleChange}
            name="lastName"
            />
        </form>
        </>
    )
}