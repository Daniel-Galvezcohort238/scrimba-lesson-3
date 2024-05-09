import React from "react"

export default function FormInputChanges() {
    const [firstName, setFirstName] = React.useState("")
    
    console.log(firstName)
    
    function handleChange(event) {
        console.log(event.target.value)
        /**
         * Challenge: update the firstName state on every keystroke
         */
        setFirstName(event.target.value)
    }
    
    return (
        <form>
            video 44
            <input
                id="video44input"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}
