import React from "react"
import boxes from "./boxes"
import Box from "./box"
import './styles.css'

export default function BoxesChallenge4() {


    
    const [boxElements, setBoxes] = React.useState(boxes.map(box => <Box toggle={toggle} on={box.on} key={box.id} id={box.id}/>))
    
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
            const newSquares = []

            for(let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i]
                // console.log(currentSquare.key);
                if(currentSquare.key == id) {
                    const updatedSquare = {
                        ...currentSquare,
                        props: {
                            ...currentSquare.props,
                            on: !currentSquare.props.on
                        } 
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
            })
        
    }

    return (
        <main>
            video35
            <h1 className="vid30">
                {boxElements}
            </h1>
        </main>
    )
}
