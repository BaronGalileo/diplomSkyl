import React from "react"
import { Test } from "../../components/test/Test"


function Home() {
    return(
        <div>
            <h1>Дом, милый дом!</h1>
            <Test></Test>
            <p>Привет</p>
            <p className="test1">Привет1 !</p>
            <p className="test2">Привет1 !</p>
            <p className="test3">Привет1 !</p>
            <p className="test4">Привет1 !</p>
        </div>
    )
}

export {Home}