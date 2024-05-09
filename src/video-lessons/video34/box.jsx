import React from "react"

export default function Box(props) {
    
    const [on, setOn] = React.useState(props.on)

    const styles = {
        backgroundColor: on ? '#222222' : 'transparent'
    }


    
    return(
        <>
            <div onClick={props.toggle} style={styles} className="vid30-box"></div>
        </>
    )
}