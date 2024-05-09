import React from "react"

    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

export default function Form() {

    
    
    const [allMemes, setAllMemes] = React.useState()
    React.useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
        
    }, [])
    
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })


    function newMeme() {
        const randomNumber = Math.floor(Math.random() * 100);
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => {return {
            ...prevMeme,
            randomImage: url
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
                        <input id="vid-65input1" name="topText" onChange={newText}></input>
                    </div>
                    <div className="input-div">
                        <label htmlFor="bottomText">Bottom text</label>
                        <input id="vid65-input2" name="bottomText" onChange={newText}></input>
                    </div>
                </div>
                <button onClick={newMeme} className="meme-generator-btn">Get a new meme image 🖼</button>
                <div className="meme-parts">
                    <img className="meme" src={`${meme.randomImage}`}></img>
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>

                </div>
            </div>
        </>
    )
}