import React from "react"
import boxes from "./boxes"
import Box from "./box"
import './styles.css'

export default function BoxesUpdateAllyFixes() {


    
    const [boxElements, setBoxes] = React.useState(boxes.map(box => <Box toggle={() => toggle(box.id)} on={box.on} key={box.id}/>))
    
    function toggle(id) {
        /**
         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 
         * Hint: look back at the lesson on updating arrays
         * in state if you need a reminder on how to do this
         */

        setBoxes(prevSquares => {
            return prevSquares.map((square) => {
                return square.key == id ? {...square, props: {...square.props, on: !square.props.on}} : square
            })
        })
    }

    return (
        <main>
            video37
            <h1 className="vid30">
                {boxElements}
            </h1>
        </main>
    )
}
