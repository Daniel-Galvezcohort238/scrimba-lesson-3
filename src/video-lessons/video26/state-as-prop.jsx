import React from "react"
import Count from "./count"

export default function StateAsProp() {
    const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    

    /**
     * Challenge:
     * - Create a new component named Count
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the whole div.counter--count
     *      and display the incoming prop `number`
     * - Replace the div.counter--count below with an instance of
     *   the new Count component
     */
    return (
        <div className="counter">
            video26
            <button className="counter--minus" onClick={subtract}>–</button>
                <Count 
                    number={count}
                />
                
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
