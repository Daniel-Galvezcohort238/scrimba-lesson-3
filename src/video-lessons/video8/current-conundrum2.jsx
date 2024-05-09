
/**
 * Challenge: Add an event listener to the button so when
 * it is clicked, it adds another thing to our array
 * 
 * Hint: use the array length + 1 to determine the number
 * of the "Thing" being added. Also, have you event listener
 * console.log(thingsArray) after adding the new item to the
 * array
 * 
 * Spoiler: the page won't update when new things get added
 * to the array!
 */

export default function CurrentConundrum2() {
    const thingsArray = ["Thing 1", "Thing 2"]

    let thingsMapped = thingsArray.map(thing => 
        <p key={thingsArray.indexOf(thing)}>
            {thing}
        </p>
    )

    function addItem() {
        thingsArray.push(`Thing ${thingsArray.length + 1}`);

        console.log(thingsArray);

        thingsMapped = thingsArray.map(thing => 
            <p key={thingsArray.indexOf(thing)}>
                {thing}
            </p>
        )
    }

    return (
        <>
            <div className="video8">

                <button onClick={addItem} className="video8-btn">Add Item</button>
                {thingsMapped}
            </div>
        </>
    )
}