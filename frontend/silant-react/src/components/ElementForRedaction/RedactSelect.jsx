import React, { Children, useEffect, useState } from "react"
import { Text } from "../Text/Text"
import classNames from 'classnames'
import "./styles.css"
import { SelectFailureNode } from "../FormComponents/FormComponentSelect/SelectFailure_node"
import { SelectRecoveryMethod } from "../FormComponents/FormComponentSelect/SelectRecoveryMethod"



export const RedactSelect = ({type='', value, field_name=''}) => {

    const classes = classNames(
        "redact-element",
        field_name,

    )

    const[updated_value, setUpdated_value] = useState(value.name)

    const[touch, setЕouch] = useState(false)

    useEffect(() => {

    }, [updated_value])



    useEffect(() => {
        const element_for_redaction = document.querySelector(`.${field_name}`)
        element_for_redaction.addEventListener('click', e => {
            if(e.target.tagName !== "SELECT"){
                setЕouch(res => !res)
            }
            const input_element = element_for_redaction.querySelector('select')
            if(input_element?.value){
                const selected = input_element[input_element.value].textContent
                setUpdated_value(selected)
            }
        })

    }, [])

    return(
        <>
        <div className={classes}>
            <Text className="dark-color">{updated_value}</Text>
            {touch&&type==="FailureNode"&&
            <SelectFailureNode message="обязательно заполнить" name={field_name}>{value}</SelectFailureNode>}
            {touch&&type==="RecoveryMethod"&&
            <SelectRecoveryMethod message="обязательно заполнить" name={field_name}>{value}</SelectRecoveryMethod>}
        </div>
        </>
    )
}

