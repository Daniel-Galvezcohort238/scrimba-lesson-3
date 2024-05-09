import memesData from "./memesData"

export default function Form() {
    function createMeme() {
        console.log(memesData.data.memes[Math.floor(Math.random() * 100)]['url'])
    }


    return (
        <>
            <div className="meme-generator-form">
                <div className="form-inputs">

                    <div className="input-div">
                        <label htmlFor="input1">Top text</label>
                        <input id="vid7-input1" name="input1"></input>
                    </div>
                    <div className="input-div">
                        <label htmlFor="input2">Bottom text</label>
                        <input id="vid7-input2" name="input2"></input>
                    </div>
                </div>
                <button onClick={createMeme} className="meme-generator-btn">Get a new meme image 🖼</button>
            </div>
        </>
    )
}