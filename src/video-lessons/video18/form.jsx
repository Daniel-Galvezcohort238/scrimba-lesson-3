import React from "react"
import memesData from "./memesData"

    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */

export default function Form() {

    const [meme, setMeme] = React.useState(memesData.data.memes[0]['url'])

    function newMeme() {
        setMeme(memesData.data.memes[Math.floor(Math.random() * 100)]['url'])
    }


    return (
        <>
            <div className="meme-generator-form">
                <div className="form-inputs">

                    <div className="input-div">
                        <label htmlFor="input1">Top text</label>
                        <input id="vid18-input1" name="input1"></input>
                    </div>
                    <div className="input-div">
                        <label htmlFor="input2">Bottom text</label>
                        <input id="vid18-input2" name="input2"></input>
                    </div>
                </div>
                <button onClick={newMeme} className="meme-generator-btn">Get a new meme image 🖼</button>
                <img className="meme" src={`${meme}`}></img>
            </div>
        </>
    )
}