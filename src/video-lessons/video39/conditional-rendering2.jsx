import React from "react"

export default function ConditionalRendering2() {
    const [messages, setMessages] = React.useState([])
    /**
     * Challenge:
     * - Only display the <h1> below if there are unread messages
     */
    return (
        <div>
            video39
            {
                messages.length && //messages.length seems to be read for its falsey or truthy value since it hides the h1 if its falsey. However its value is also
                //printed on the screen. To avoid this one could use messages.length > 0. I'm not sure why this happens since the guy from scrimba doesnt seem to have this
                //problem
                <h1>You have {messages.length} unread messages!</h1>
            }
        </div>
    )
}
