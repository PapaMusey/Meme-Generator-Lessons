import React from 'react';

export default function Form() {
    const [formData, setFormData] = React.useState({ 
        firstName: "", 
        lastName: "", 
        email: "", 
        comments: "",
        isFriendly:false,
        employment: "",
        favColor:"",
    })
   

    function handleChange(event) {
        const {name,value,type,checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault() //prevent default means it won't rerender our page and our app 
        console.log(formData)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
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
                
                <fieldset>
                   <legend>Current Employment status</legend> 
                   <input
                    type="radio"
                    id='unemployed'
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}

                   />
                   <label htmlFor='unemployed'>Unemployed</label>
                   <br/>
                   <input
                    type="radio"
                    id='part-time'
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}

                   />
                   <label htmlFor='part-time'>Part-time</label>
                   <legend>Current Employment status</legend> 
                   <input
                    type="radio"
                    id='full-time'
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}

                   />
                   <label htmlFor='full-time'>Full-time</label>
                </fieldset>
                <br/>
                <label htmlFor='favColor'>What is your favorite color?</label>
                {/* <br/> */}
                <select 
                id="favColor"
                name='favColor'
                onChange={handleChange}
                value={formData.favColor}
                >    
                    <option value="">--Choose--</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="Indigo">Indigo</option>
                    <option value="Violet">Violet</option>
                </select>
                <br/>
                <button>Submit</button>
            </form>

        </>
    )
}