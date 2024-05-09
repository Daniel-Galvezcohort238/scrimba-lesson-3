import React from "react"
import './styles.css'

export default function SignUpFormPractice() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

    const [formData, setFormData] = React.useState({email: '', password: '', confirmPassword: '', joinedNL: false})
    
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password == formData.confirmPassword) {
            console.log('Successfully signed up')
            if(formData.joinedNL) {
                console.log('Thanks for signing up for our newsletter!')
            }
        } else {
            console.log('passwords do not match')
        }

    }

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type == 'checkbox' ? checked : value
            }
        })
    }

    const id = React.useId()

    console.log(formData);
    
    return (
        <div className="form-container body56">
            <h1>video56</h1>
            <form className="form56" onSubmit={handleSubmit}>
                <label htmlFor={id + "-email"}>Email address</label>
                <input 
                    type="email" 
                    className="form--input"
                    name="email"
                    id={id + "-email"}
                    onChange={handleChange}
                />

                <label htmlFor={id + "-password"}>Password</label>
                <input 
                    type="password" 
                    className="form--input"
                    name="password"
                    id={id + "-password"}
                    onChange={handleChange}
                />

                <label htmlFor={id + "-confirmPassword"}>Confirm password</label>
                <input 
                    type="password" 
                    className="form--input"
                    name="confirmPassword"
                    id={id + "-confirmPassword"}
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id={id + "-okayToEmail"}
                        type="checkbox"
                        name="joinedNL"
                        onChange={handleChange}
                        
                    />
                    <label htmlFor={id + "-okayToEmail"}>I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
