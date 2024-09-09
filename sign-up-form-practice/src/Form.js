import React from 'react';

export default function Form() {
    const [formData, setFormData] = React.useState({   
        email: "", 
        password: "",
        confirmPassword:"",
        isJoinNewsletter:false,
    })
    console.log(formData.employment)

    function handleChange(event) {
        const {name,value,type,checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    console.log(formData)

    function handleClick(event){
        event.preventDefault()
        // Password confirmation check
    if (formData.password === formData.confirmPassword) {
        console.log("Successfully signed up")
    }
    else {
        console.log("Passwords do not match!")
        return; //this line prevents the code below from running
    }
    if (formData.isJoinNewsletter === true){
        console.log("Thanks for singing up for our newsletter!")
    }
    }
    
    
    return (
        <>
            <form 
            onSubmit={handleClick}>
                
                <input
                    type="text"
                    placeholder='email'
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <br />
                <input
                type="password"  // This sets the input type to password, which hides the text
                placeholder='Password'  // Placeholder text for the input field
                onChange={handleChange}  // Function to handle changes in the input
                name="password"  // Name attribute for identifying the input
                value={formData.password}  // The value of the input, taken from the state
                />
                <br />
                <input
                type="password"  // Sets the input type to password to mask characters
                placeholder='Confirm Password'  // Placeholder text for the input field
                onChange={handleChange}  // Function to handle changes in the input
                name="confirmPassword"  // Name attribute for identifying the input
                value={formData.confirmPassword}  // The value of the input, taken from the state
                />
                <br/>
                <input 
                type="checkbox"
                id="isJoinNewsletter" //becuase its a boolean it usually or always has 2 values
                checked={formData.isJoinNewsletter}
                onChange={handleChange}
                name="isJoinNewsletter"
                />
                <label htmlFor='isJoinNewsletter'>I want to join the news letter </label>
                <br />
                <button>Sign up</button>
            </form>

        </>
    )
}