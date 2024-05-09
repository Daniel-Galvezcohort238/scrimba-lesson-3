import React from 'react'

export default function MakingApiCalls() {

    const [starWarsData, setstarWarsData] = React.useState({})

    console.log('finished rendering') //every time the fetch runs it sets starWarsData which will cause the component to re-render, and set again, causing an infinite loop,
    //which is why this console.log logs an infinite number of times.

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        // .then(data => setstarWarsData(data))

    return (
        <div>
            video 58
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}