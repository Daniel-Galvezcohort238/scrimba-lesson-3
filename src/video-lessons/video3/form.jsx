/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */

export default function Form() {
    return (
        <>
            video3
            <form className="meme-generator-form">
                <div className="form-inputs">

                    <div className="input-div">
                        <label htmlFor="input1">Top text</label>
                        <input id="input1" name="input1"></input>
                    </div>
                    <div className="input-div">
                        <label htmlFor="input2">Bottom text</label>
                        <input id="input2" name="input2"></input>
                    </div>
                </div>
                <button className="meme-generator-btn">Get a new meme image 🖼</button>
            </form>
        </>
    )
}