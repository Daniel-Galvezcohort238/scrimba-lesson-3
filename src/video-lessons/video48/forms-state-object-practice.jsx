import React from "react"

export default function FormsStateObjectPractice() {
    const [formData, setFormData] = React.useState({firstName: '', lastName: '', email: ''})
    /**
     * Challenge: add an email field/state to the form
     */
    
    function handleChange(event) {
        console.log(formData[event.target.name]);
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    
    return (
        <form>
            video 48
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
        </form>
    )
}
