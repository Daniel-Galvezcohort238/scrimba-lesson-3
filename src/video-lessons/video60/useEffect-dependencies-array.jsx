import React from "react"

export default function UseEffectDependenciesArray() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    console.log("Component rendered")
    
    
    // side effects
    React.useEffect(function() {
        console.log('Effect ran')
        // fetch("https://swapi.dev/api/people/1")
        //     .then(res => res.json())
        //     .then(data => setStarWarsData(data)) //without the second parameter this will still produce an infinite loop

    }, [count])// an empty depedency array will still produce an infinite loop. When count is changed, that will cause the useEffect function to run the main effect function
    
    return (
        <div>
            video60
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
