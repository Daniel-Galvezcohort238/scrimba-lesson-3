import React from "react"
import boxes from "./boxes"
import './styles.css'

export default function DynamicStyles(props) {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */

    // Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to "#222222"
    // If darkMode is false, set it to "#cccccc"

    const styles = {
        backgroundColor: props.darkMode ? '#222222' : '#cccccc'
    }

    const [boxElements, setBoxes] = React.useState(boxes.map(box => <div className="vid30-box" style={styles} key={box.id}></div>))


    return (
        <main>
            video31
            <h1 className="vid30">
                {boxElements}
            </h1>
        </main>
    )
}
