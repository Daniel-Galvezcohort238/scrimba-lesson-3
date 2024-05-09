import React from "react"

export default function FormsInReactRadioButtons() {
    const [formData, setFormData] = React.useState({
        firstName: '', 
        lastName: '',
        email: '', 
        comment: 'but you need this value attribute for the self-closing textarea introduced in React',
        isFriendly: true,
        employment: ''})
        

    
    function handleChange(event) {
        console.log(formData[event.target.name]);
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type == 'checkbox' ? checked : value
            }
        })
    }

        /**
     * Challenge: Add a textarea for "comments" to the form
     * Make sure to update state when it changes.
     */

    return (
        <form>
            video 51
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
                    id="51unemployed"
                    name="employment"
                    value='unemployed'
                    onChange={handleChange}
                    checked={formData.employment === "unemployed"}
                />
                <label htmlFor="51unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="51part-time"
                    name="employment"
                    value='part-time'
                    onChange={handleChange}
                    checked={formData.employment === "part-time"}
                />
                <label htmlFor="51part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="51full-time"
                    name="employment"
                    value='full-time'
                    onChange={handleChange}
                    checked={formData.employment === "full-time"}
                />
                <label htmlFor="51full-time">Full-time</label>
                <br />
                
            </fieldset>
        </form>
    )
}
