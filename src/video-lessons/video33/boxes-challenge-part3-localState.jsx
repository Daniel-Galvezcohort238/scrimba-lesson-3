import React from "react"
import boxes from "./boxes"
import Box from "./box"
import './styles.css'

export default function BoxesChallenge3LocalState() {
    /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */
    const [boxElements, setBoxes] = React.useState(boxes.map(box => <Box on={box.on} key={box.id}/>))

    return (
        <main>
            video33
            <h1 className="vid30">
                {boxElements}
            </h1>
        </main>
    )
}
