import React from "react"
import memesData from "./memesData"

    /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
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

    
console.log(meme.topText)
    function newText(event) {
        const {name, value} = event.target
        // console.log(value + name)
        setMeme(prevMeme => {return {
            ...prevMeme,
            [name]: value 
        }})
    }


    return (
        <>
            <div className="meme-generator-form">
                <div className="form-inputs">

                    <div className="input-div">
                        <label htmlFor="topText">Top text</label>
                        <input id="vid-57input1" name="topText" onChange={newText}></input>
                    </div>
                    <div className="input-div">
                        <label htmlFor="bottomText">Bottom text</label>
                        <input id="vid57-input2" name="bottomText" onChange={newText}></input>
                    </div>
                </div>
                <button onClick={newMeme} className="meme-generator-btn">Get a new meme image 🖼</button>
                <div>
                    <img className="meme" src={`${meme.randomImage}`}></img>
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>

                </div>
            </div>
        </>
    )
}