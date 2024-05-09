import React from "react"
import Header from "./header"
import Body from "./body"

export default function PassingDataAround() {

    const [user, setUser] = React.useState("Joe")


    return (
        <main>
            video 29
            <Header 
                user={user}
            />
            <Body 
                user={user}
            />
        </main>
    )
}
