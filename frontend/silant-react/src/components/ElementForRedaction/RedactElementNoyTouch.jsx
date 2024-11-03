import React from "react"
import { Text } from "../Text/Text"
import "./styles.css"




export const RedactElementNoyTouch = ({value}) => {



    return(
        <>
        <div className="redact-element">
            <Text className="dark-color">{value}</Text>
        </div>
        </>
    )
}