import React, { Children, useEffect, useState } from "react"
import { Text } from "../Text/Text"
import classNames from 'classnames'
import "./styles.css"
import { FormSelectFromServer } from "../FormComponents/FormComponentSelect/FormSelectFromServer"
import { Button } from "../Button/Button"



export const RedactSelect = ({path_for_serv, value, field_name='', field_user=false}) => {

    debugger

    const classes = classNames(
        "redact-element",
        field_name,

    )

    const[updated_value, setUpdated_value] = useState(value.name)

    const[touch, setЕouch] = useState(false)

    useEffect(() => {

    }, [updated_value])

    const ckliKak = () => {
        const element_for_redaction = document.querySelector(`.${field_name}`)
        element_for_redaction.addEventListener('click', e => {
            if(e.target.tagName !== "SELECT"){
                setЕouch(res=>!res)
                const input_element = element_for_redaction.querySelector('select')
                if(input_element?.value){
                    const target_elem =  input_element.selectedIndex
                    const selected = input_element[target_elem]?.textContent
                    setUpdated_value(selected)
            }
            }
        })
    }



    // useEffect(() => {
    //     const element_for_redaction = document.querySelector(`.${field_name}`)
    //     element_for_redaction.addEventListener('click', e => {
    //         if(e.target.tagName !== "SELECT"){
    //             setЕouch(res => !res)
    //             const input_element = element_for_redaction.querySelector('select')
    //             if(input_element?.value){
    //                 const target_elem =  input_element.selectedIndex
    //                 const selected = input_element[target_elem]?.textContent
    //                 setUpdated_value(selected)
    //         }
    //         }
    //     })

    // }, [])
    return(
        <>
        <div className={classes}>
            <Text className="dark-color">{updated_value}</Text>
            <Button onClick={() =>{setЕouch(res => !res)
                                ckliKak()
            }}> </Button>
            {touch&&
            <FormSelectFromServer user={field_user} path={path_for_serv} message="обязательно заполнить" name={field_name}>{updated_value}</FormSelectFromServer>}
        </div>
        </>
    )
}

