import React from 'react';

export default function ComplexState2() {
    /**
     * Challenge: See if you can do it all again by yourself :)
     */
    const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2'])
    
    function addItem() {
        setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`])
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            video 22 part 2
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}
