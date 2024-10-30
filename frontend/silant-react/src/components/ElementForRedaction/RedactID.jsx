import React, { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form";
import { Text } from "../Text/Text"
import "./styles.css"
import { useSelector } from "react-redux";



export const RedactID = ({value, id_data="reclamation", name}) => {

    const[valueMachine, setValueMachine] = useState(null)

    const title_by_reclama = useSelector(state => state.reclamation)

    const title_by_service = useSelector(state => state.services)

    const {
        register
    } = useFormContext()

    useEffect(() => {
        if(id_data ==="reclamation"){
            setValueMachine(title_by_reclama.ids[value].machine.brand)
        }
        if(id_data ==="services"){
            setValueMachine(title_by_service.ids[value].machine.brand)
        }
    }, [])

    return(
        <>
        <div className="redact-element">
            <Text className="dark-color">{valueMachine}</Text>
            <input {...register(name)} type="hidden" value={value}/>
        </div>
        </>
    )
}