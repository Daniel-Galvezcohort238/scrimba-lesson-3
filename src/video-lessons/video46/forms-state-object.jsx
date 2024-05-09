import React from "react"

export default function FormsStateObject() {
    const [formData, setFormData] = React.useState({firstName: '', lastName: ''})
    /**
     * Challenge: Track the applicant's last name as well
     */
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    
    return (
        <form>
            video 45
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange }
                name="lastName"
            />
        </form>
    )
}
