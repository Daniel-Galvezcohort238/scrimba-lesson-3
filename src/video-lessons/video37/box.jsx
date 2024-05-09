
export default function Box(props) {
    
    const styles = {
        backgroundColor: props.on ? '#222222' : 'transparent'
    }

    
    return(
        <>
            <button 
            onClick={props.toggle} 
            style={styles} 
            className="vid30-box">

            </button>
        </>
    )
}