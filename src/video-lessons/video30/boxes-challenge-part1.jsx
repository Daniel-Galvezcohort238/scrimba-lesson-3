import React from "react"
import boxes from "./boxes"
import Box from "./box"
import './styles.css'

export default function BoxesChallenge1() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */

    const [boxElements, setBoxes] = React.useState(boxes.map(box => <Box key={box.id}/>))

    return (
        <main>
            video30
            <h1 className="vid30">
                {boxElements}
            </h1>
        </main>
    )
}
