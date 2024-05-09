import React from "react"

export default function TernaryPractice() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */
        /**
     * Challenge: move our ternary directly inside of the JSX
     * so the "Yes" and "No" are determined inside the <h1>
     * 
     * Hint: you will no longer need the `answer` variable
     */
    const isGoingOut = false
    
    const answer = isGoingOut ? 'Yes' : 'No';


    
    return (
        <div className="state">
            video19
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
            </div>
        </div>
    )
}
