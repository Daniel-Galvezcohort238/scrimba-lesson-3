import React from "react"

export default function IntroToUseEffect() {
    const [starWarsData, setStarWarsData] = React.useState({})
    
    console.log("Component rendered")
    
    
    // side effects
    React.useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            // .then(data => setStarWarsData(data)) //without the second parameter this will still produce an infinite loop

    })
    
    return (
        <div>
            video59
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
