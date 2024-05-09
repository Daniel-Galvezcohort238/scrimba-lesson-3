export default function EventListeners() {
    function handleClick() {
        console.log("I was clicked!")
    }

    function handleEnter() {
        console.log('I was moused over!')
    }
    
    /**
     * Add our new function to the button
     */
    
    return (
        <div className="container">
            video 6
            <img  onMouseEnter={handleEnter} className='video6-img' src="https://picsum.photos/640/360" />
            <button onClick={handleClick} >Click me</button>
        </div>
    )
}