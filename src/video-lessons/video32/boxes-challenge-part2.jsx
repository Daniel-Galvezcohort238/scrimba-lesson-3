import React from "react"
import boxes from "./boxes"
import Box from "./box"
import './styles.css'

export default function BoxesChallenge2() {
    /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */

    const [boxElements, setBoxes] = React.useState(boxes.map(box => <Box on={box.on} key={box.id}/>))

    return (
        <main>
            video32
            <h1 className="vid30">
                {boxElements}
            </h1>
        </main>
    )
}
