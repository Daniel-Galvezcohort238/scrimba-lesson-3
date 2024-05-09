import React from "react"
import boxes from "./boxes"
import Box from "./box"
import './styles.css'

export default function BoxesChallenge3UnifiedState() {
    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */

    function toggle() {
        console.log('clicked!');
    }

    const [boxElements, setBoxes] = React.useState(boxes.map(box => <Box toggle={toggle} on={box.on} key={box.id}/>))

    return (
        <main>
            video34
            <h1 className="vid30">
                {boxElements}
            </h1>
        </main>
    )
}
