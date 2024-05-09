import Joke from "./joke"
import jokesData from "./jokesData"

export default function ConditionalRenderingTernary() {
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
            video 40
            {jokeElements}
        </div>
    )
}
