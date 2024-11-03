import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ColomnsReclamation } from "../Tables/ColomnsTables/columnsReclamation";
import { ColomnsReclamationPOST } from "../Tables/ColomnsTables/ColomnsReclamationForPost";
import { ColomnsReclamaRedact } from "../Tables/ColomnsTables/colomnsReclamaRedact"
import { Button } from "../Button/Button";
import { useFormContext } from "react-hook-form"
import axios from "axios";
import { StickyTableReclama } from "../Tables/StickyTableReclama";
import { ColomnsReclamationPOSTWithMachine } from "../Tables/ColomnsTables/colomnReclamaPostWithMachine";
import { StickyTableForPatch } from "../Tables/StickyTableForPath";
import { isValid_data_patch } from '../../helpers/isValidData'





export const ReclamationTable = ({addReclama}) => {

    const isAuth = useSelector(state => state.auth)

    const role_user_is_client = isAuth.user_role === "client"

    const isMachines = useSelector(state => state.machines.machine_obj)

    const isReclamation = useSelector(state => state.reclamation)

    const targetIDReclama = useSelector(state => state.reclamation.reclamaID)

    const target = useSelector(state => state.targetmachine.target)

    const[flag, setFlag] = useState(false)

    const[redaction, setRedaction] = useState(false)

    const[redactionData, setRedactionData] = useState(null)



    const {
        handleSubmit,
        formState: {isValid},
        reset,
    
      } = useFormContext({
        
      })

    useEffect(() => {

    }, [isReclamation])
    
    useEffect( () => {

        if(targetIDReclama){       
                const reclamation_data_old = isReclamation.ids[targetIDReclama]
                const reclamData_for_redaction = [{
                    id: reclamation_data_old.id,
                    date_of_failure: reclamation_data_old.date_of_failure,
                    date_of_restoration: reclamation_data_old.date_of_restoration,
                    description_of_failure: reclamation_data_old.description_of_failure,
                    downtime: reclamation_data_old.downtime,
                    failure_node: reclamation_data_old.failure_node,
                    machine: reclamation_data_old.machine.brand,
                    recovery_method: reclamation_data_old.recovery_method,
                    service_company: reclamation_data_old.service_company.name,
                    spare_parts: reclamation_data_old.spare_parts,
                    working_hours: reclamation_data_old.working_hours,
                }]
                setRedactionData(reclamData_for_redaction)
                setRedaction(true) 
            }
            else{
                setRedaction(false)
            }

        }, [targetIDReclama])

    useEffect(() => {
        if(!flag) {
            reset()
        }

    }, [flag])


    const reclamData = [{
        date_of_failure: "",
        date_of_restoration: "",
        description_of_failure: "",
        downtime: '',
        failure_node: "",
        machine: "",
        recovery_method: '',
        service_company: '',
        spare_parts: '',
        working_hours: '',

    }]

    const reclamMachine = [{
        date_of_failure: "",
        date_of_restoration: "",
        description_of_failure: "",
        downtime: '',
        failure_node: "",
        machine: "",
        recovery_method: '',
        service_company: '',
        spare_parts: '',
        working_hours: '',
        service_company: '',


    }]

    const path_reclamation = "http://127.0.0.1:8000/api/service/v1/reclamation/"



    const onSubmitPost = (data) => {
        const dataIsValid = isValid_data_patch(data)
        const date_start = dataIsValid.date_of_failure 
        const date_finish = dataIsValid.date_of_restoration
        if(date_start >= date_finish){
            alert("дата отказа не может быть раньше, чем дата восстановления")
        }
        else{
            axios.post(path_reclamation, dataIsValid, isAuth.confermAut)
            .then(res => {
                addReclama(overload => true)
                reset()
                alert("Рекламация успешно добавлена")
            })
            .catch(err => {
                if(err.request.status >= 500) {
                    alert("Извените, проблема с сервером, попробуйте отправить позже!");
            }
            })
            setRedaction(false)
            setFlag(res => !res)

        }}

    const onSubmitPatch = (data) => {
        const dataIsValid = isValid_data_patch(data)
        if(Object.keys(dataIsValid).length ===1){
            return alert("Вы ничего не редактировали")
        }
        const date_start = dataIsValid.date_of_failure ? dataIsValid.date_of_failure: redactionData[0].date_of_failure
        const date_finish = dataIsValid.date_of_restoration ? dataIsValid.date_of_restoration: redactionData[0].date_of_restoration
        if(date_start >= date_finish){
            alert("дата отказа не может быть раньше, чем дата восстановления")
        }
        else {
            const path_patch = path_reclamation + Number(data.id)+"/"
            axios.patch(path_patch, dataIsValid, isAuth.confermAut)
            .then(res => {
                addReclama(overload => true)
                alert("Рекламация успешно обновлена")
                setFlag(res=>!res)
                reset()
                
            })
            .catch(err => {
                alert(err)
                if(err.request.status >= 500) {
                    alert("Извените, проблема с сервером, попробуйте отправить позже!");
                    reset()
                }

            })

        }}
    


    if(!isReclamation.sorted_data[target]&&!isReclamation.data) return <></>

    return(
        <>
        <div className="reclamation-wrapper">
            <div classnema="reclamation-element">
                {isReclamation.sorted_data[target]&&!flag&&
                <StickyTableReclama dataTable={isReclamation.sorted_data[target]} columnsTable={ColomnsReclamation}/>}
                {!isReclamation.sorted_data[target]&&!flag&&
                <StickyTableReclama dataTable={isReclamation.data} columnsTable={ColomnsReclamation}/>}
            </div>  
            {!role_user_is_client&&
                <div classnema="reclamation-element">
                    {!redaction&&
                        <Button onClick={() => {setFlag(res=>!res)}}>{!flag?"Написать рекламацию": "Назад"}</Button>}
                    <form onSubmit={handleSubmit(onSubmitPost)}> 
                    {!target&&flag&&!redaction&&   
                       <div classnema="reclamation-element">   
                        <StickyTableReclama dataTable={reclamMachine} columnsTable={ColomnsReclamationPOST}/>
                        <Button disabled={!isValid}>Отправить рекламацию</Button>
                        </div>}
                        <div classnema="reclamation-element">
                    {target&&!redaction&&flag&&
                        <StickyTableReclama dataTable={reclamData} columnsTable={ColomnsReclamationPOSTWithMachine}/>}
                    {target&&!redaction&&flag&&
                        <Button disabled={!isValid}>Отправить рекламацию</Button>}
                    </div>
                    </form>
                    {redaction&&
                        <Button onClick={() => {setFlag(res=>!res)}}>{!flag?"Редактировать рекламацию": "Назад"}</Button>}
                    {flag&&redaction&&
                        <form onSubmit={handleSubmit(onSubmitPatch)}>
                            <div classnema="reclamation-element">
                            <StickyTableForPatch dataTable={redactionData} columnsTable={ColomnsReclamaRedact}/>
                            <Button disabled={!isValid}>Редактировать рекламацию</Button> 
                            </div>
                        </form>}

                </div>}
        </div>
        </>
    )
}