import React from "react"
import { useFormContext } from "react-hook-form";
import { Text } from "../Text/Text"
import "./styles.css"
import { useSelector } from "react-redux";



export const RedactID = ({value, name}) => {

    const {
        register
    } = useFormContext()



    const updated_value_machine = useSelector(state => state.reclamation.ids[value].machine.brand)


    return(
        <>
        <div className="redact-element">
            <Text className="dark-color">{updated_value_machine}</Text>
            <input {...register(name)} type="hidden" value={value}/>
        </div>
        </>
    )
}