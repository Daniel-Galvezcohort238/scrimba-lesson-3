import React from "react"
import WindowTracker from "./window-tracker"

export default function StateAndEffectPractices() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */

    const [show, setShow] = React.useState(true)
    
    function toggle() {
        setShow(() => !show)
    }

    return (
        <div className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
           {show && <WindowTracker />}
        </div>
    )
}
