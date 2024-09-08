import React from 'react';

export default function Form() {
    const [formData, setFormData] = React.useState({ 
        firstName: "", 
        lastName: "", 
        email: "", 
        comments: "",
        isFriendly:false,
    })
    console.log(formData.comments)

    function handleChange(event) {
        const {name,value,type,checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
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
                    value={formData.firstName}
                />
                <input
                    type="text"
                    placeholder='Last name'
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
                <input
                    type="text"
                    placeholder='email'
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <textarea
                    name= "comments" //understand your mistake here before moving on
                    value={formData.comments}
                    placeholder='Type Comments here'
                    onChange={handleChange}
                />
                <input 
                type="checkbox"
                id="isFriendly" //becuase its a boolean it usually or always has 2 values
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
                />
                <label htmlFor='isFriendly'>Are you friendly </label>
            </form>

        </>
    )
}