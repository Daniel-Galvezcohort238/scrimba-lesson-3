
export default function Box(props) {
    
    const styles = {
        backgroundColor: props.on ? '#222222' : 'transparent'
    }

    
    return(
        <>
            <div 
            onClick={() => props.toggle(props.id)} 
            style={styles} 
            className="vid30-box">

            </div>
        </>
    )
}