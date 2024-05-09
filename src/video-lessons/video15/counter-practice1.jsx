import React from "react"

export default function CounterPractice1() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    const [count, setCount] = React.useState(0);
    function decrementCount() {
        setCount(count - 1);
    }
    function IncrementCount() {
        setCount(count + 1);
    }

    return (
        <div className="counter">
            video15
            <button className="counter--minus" onClick={decrementCount}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={IncrementCount}>+</button>
        </div>
    )
}
