import React from "react"

export default function FormsInReactCheckbox() {
    const [formData, setFormData] = React.useState({
        firstName: '', 
        lastName: '',
        email: '', 
        comment: 'but you need this value attribute for the self-closing textarea introduced in React',
        isFriendly: true})

    
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
            video 50
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

            
        </form>
    )
}
