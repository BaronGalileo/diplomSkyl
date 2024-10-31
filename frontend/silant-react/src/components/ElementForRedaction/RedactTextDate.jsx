import React, { useEffect, useState } from "react"
import { Text } from "../Text/Text"
import classNames from 'classnames'
import { Input } from "../Input/Input"
import "./styles.css"



export const RedactTextDate = ({type="text", value, field_name=''}) => {

    const classes = classNames(
        "redact-element",
        field_name,

    )

    const[updated_value, setUpdated_value] = useState(value)

    const[touch, setЕouch] = useState(false)

    useEffect(() => {

    }, [updated_value])



    useEffect(() => {

        const element_for_redaction = document.querySelector(`.${field_name}`)
        element_for_redaction.addEventListener('click', e => {
            if(e.target.tagName !== "INPUT"){
                setЕouch(res => !res)
            }
            const input_element = element_for_redaction.querySelector('input')
            if(input_element?.value){
                setUpdated_value(input_element.value)
            }
            else{
                setUpdated_value(value)
            }
        })

    }, [])

    return(
        <>
        <div className={classes}>
            <Text className="dark-color">{updated_value}</Text>
            {touch&&
            <Input  type={type} name={field_name}/>}
        </div>
        </>
    )
}