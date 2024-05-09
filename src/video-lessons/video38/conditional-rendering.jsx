import Joke from "./joke"
import jokesData from "./jokesData"

export default function ConditionalRendering() {
    const jokeElements = jokesData.map(joke => {
        return (
            <Joke 
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })
    return (
        <div>
            Video 38
            {jokeElements}
        </div>
    )
}
