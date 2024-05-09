import Form from "./form"
import Header from "./header"
import memesData from "./memesData"

export default function MemeGenVid7() {

    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */

    return (
        <>
        video7
            <div className="meme-generator">

                <div className="meme-generator-card">

                    <Header />
                    <Form />

                    <div className="meme-gen-img-div">

                    </div>
                </div>
            </div>
        </>
    )
}
