import React from 'react';

export default function Form() {
    const [formData, setFormData] = React.useState({ firstName: "", lastName: "", email: "", comments: "" })
    console.log(formData.comments)

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
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
            </form>

        </>
    )
}