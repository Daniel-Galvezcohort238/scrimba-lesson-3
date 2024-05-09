import React from "react"
import memesData from "./memesData"

    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

export default function Form() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function newMeme() {
        setMeme(prevMeme => {return {
            ...prevMeme,
            randomImage: allMemeImages.data.memes[Math.floor(Math.random() * 100)]['url']
        }})
    }


    return (
        <>
            <div className="meme-generator-form">
                <div className="form-inputs">

                    <div className="input-div">
                        <label htmlFor="input1">Top text</label>
                        <input id="vid25-input1" name="input1"></input>
                    </div>
                    <div className="input-div">
                        <label htmlFor="input2">Bottom text</label>
                        <input id="vid25-input2" name="input2"></input>
                    </div>
                </div>
                <button onClick={newMeme} className="meme-generator-btn">Get a new meme image 🖼</button>
                <img className="meme" src={`${meme.randomImage}`}></img>
            </div>
        </>
    )
}