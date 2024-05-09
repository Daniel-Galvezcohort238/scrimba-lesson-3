import React from "react"

export default function FormsInReactTextarea() {
    const [formData, setFormData] = React.useState({firstName: '', lastName: '', email: '', 
    comment: 'but you need this value attribute for the self-closing textarea introduced in React'})

    
    function handleChange(event) {
        console.log(formData[event.target.name]);
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

        /**
     * Challenge: Add a textarea for "comments" to the form
     * Make sure to update state when it changes.
     */

    return (
        <form>
            video 49
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
            <textarea>Whatever you put inside is the value of the textarea</textarea>
            <textarea 
                defaultValue={'but you need this value attribute for the self-closing textarea introduced in React'}

            />
            <textarea 
                value={formData.comment}
                onChange={handleChange}
                name="comment"
            />
        </form>
    )
}
