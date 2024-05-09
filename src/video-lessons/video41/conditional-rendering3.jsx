import React from "react"

export default function ConditionalRendering3() {
    const [messages, setMessages] = React.useState(['a', 'b'])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */

    function messageCount() {
        if (messages.length < 1) {
            return '';
        } else if (messages.length == 1) {
            return 'You have 1 unread message';
        } else {
            return `You have ${messages.length} unread messages`
        }
    }

    return (
        <div>
            video41
            
                <h1>{messageCount()}</h1>
            
        </div>
    )
}
