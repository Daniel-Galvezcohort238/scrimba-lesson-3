import React from "react"

export default function FormsInReactSubmit() {
    const [formData, setFormData] = React.useState({
        firstName: '', 
        lastName: '',
        email: '', 
        comment: 'but you need this value attribute for the self-closing textarea introduced in React',
        isFriendly: true,
        employment: '',
        favColor: ''})
        

    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type == 'checkbox' ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            video 53
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange }
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={handleChange }
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comment}
                onChange={handleChange}
                name="comment"
            />
            <input type="checkbox" name="isFriendly" checked={formData.isFriendly} onChange={handleChange}/>
            <label htmlFor="isFriendly">Are you friendly?</label>

            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value='unemployed'
                    onChange={handleChange}
                    checked={formData.employment === "unemployed"}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value='part-time'
                    onChange={handleChange}
                    checked={formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value='full-time'
                    onChange={handleChange}
                    checked={formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={formData.favColor} 
                onChange={handleChange}
                name="favColor"
                >
                    

                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option selected value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Buttons in a form will default to a submit button</button>
            <button type="button">You must define the type as button to make it a non-form-submit button</button>
        </form>
    )
}