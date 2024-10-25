import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StickyTable } from "../Tables/StickyTable";
import { ColomnsReclamation } from "../Tables/ColomnsTables/columnsReclamation";
import { ColomnsReclamationPOST } from "../Tables/ColomnsTables/ColomnsReclamationForPost";
import { Button } from "../Button/Button";
import { useFormContext } from "react-hook-form"
import { useDispatch } from "react-redux";
import { Text } from "../Text/Text";
import axios from "axios";
import { removeReclamation } from "../../store/reclamationSlice";



export const ReclamationTable = () => {

    const isAuth = useSelector(state => state.auth)

    const isMachines = useSelector(state => state.machines.machine_obj)

    const isReclamation = useSelector(state => state.reclamation)
    const target = useSelector(state => state.targetmachine)
    const[flag, setFlag] = useState(false)

    const dispatch  = useDispatch()

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

    const path_reclamation = "http://127.0.0.1:8000/api/service/v1/reclamation/"

    const onSubmit = (data) => {
        console.log(data, "DATA")
        // axios.post(path_reclamation, data, isAuth.confermAut)
        // .then(res => {
        //     dispatch(removeReclamation())
        //     reset()
        // })
        // .catch(err => {
        //     if(err.request.status >= 500) {
        //         alert("Извените, проблема с сервером, попробуйте отправить позже!");
        //         reset()
        //     }

        // })
    }


    const errorSubmit = (data) => {
        console.log("error", data)
    }

    return(
        <>
        <div className="reclamation-wrapper">
            <div classnema="reclamation-element">
            <form onSubmit={handleSubmit(onSubmit, errorSubmit)}>
                {isReclamation.sorted_data[target.target]&&!flag&&
                <StickyTable dataTable={isReclamation.sorted_data[target.target]} columnsTable={ColomnsReclamation}/>}
                <Button>Отправить на доработку</Button>
            </form>
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