import React from "react"

export default function CounterPractice2() {
    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
    const [count, setCount] = React.useState(0);
    function decrementCount() {
        setCount(oldCount => oldCount - 1);

    }

        // Challenge: update `substract` to use a callback function
    function IncrementCount() {
        setCount(oldCount => oldCount + 1);
    }

    return (
        <div className="counter">
            video16
            <button className="counter--minus" onClick={decrementCount}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={IncrementCount}>+</button>
        </div>
    )
}
