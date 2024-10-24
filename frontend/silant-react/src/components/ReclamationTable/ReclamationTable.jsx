import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StickyTable } from "../Tables/StickyTable";
import { ColomnsReclamation } from "../Tables/ColomnsTables/columnsReclamation";
import { ColomnsReclamationPOST } from "../Tables/ColomnsTables/ColomnsReclamationForPost";
import { Button } from "../Button/Button";
import { useFormContext } from "react-hook-form"
import { Text } from "../Text/Text";


export const ReclamationTable = () => {

    const isReclamation = useSelector(state => state.reclamation)
    const target = useSelector(state => state.targetmachine)
    const[flag, setFlag] = useState(false)

    const {
        handleSubmit,
        formState: {isValid},
        reset,
    
      } = useFormContext()

    const reclamData = [{
        date_of_failure: "",
        date_of_restoration: "",
        description_of_failure: "",
        downtime: '',
        failure_node: "Узел отказа",
        machine: "Жулик",
        recovery_method: '',
        service_company: '',
        spare_parts: '',
        working_hours: '',

    }]

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    const errorSubmit = (data) => {
        console.log("error", data)
    }

    return(
        <>
        <div className="reclamation-wrapper">
            <div classnema="reclamation-element">
                {isReclamation.sorted_data[target.target]&&!flag&&
                <StickyTable dataTable={isReclamation.sorted_data[target.target]} columnsTable={ColomnsReclamation}/>}
            </div>  
            <div classnema="reclamation-element">
                <Button onClick={() => {setFlag(res=>!res)}}>{!flag?"Написать Рекламацию": "Скрыть Рекламацию"}</Button>
                {flag&&
                <form onSubmit={handleSubmit(onSubmit, errorSubmit)}>
                    <StickyTable dataTable={reclamData} columnsTable={ColomnsReclamationPOST}/>
                    <Button disabled={!isValid}>Отправить рекламацию</Button>
                </form>}

            </div>
        </div>
        </>
    )
}