
    /**
     * Challenge: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     */

export default function CurrentConundrum1() {
    const thingsArray = ["Thing 1", "Thing 2"]

    const thingsMapped = thingsArray.map(thing => 
        <p key={thingsArray.indexOf(thing)}>
            {thing}
        </p>
    )

    return (
        <>
        video 8
            <div className="video8">

                <button className="video8-btn">Add Item</button>
                {thingsMapped}
            </div>
        </>
    )
}