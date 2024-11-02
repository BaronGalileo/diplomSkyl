import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ColomnsReclamation } from "../Tables/ColomnsTables/columnsReclamation";
import { ColomnsReclamationPOST } from "../Tables/ColomnsTables/ColomnsReclamationForPost";
import { ColomnsReclamaRedact } from "../Tables/ColomnsTables/colomnsReclamaRedact"
import { Button } from "../Button/Button";
import { useFormContext } from "react-hook-form"
import { useDispatch } from "react-redux";
import axios from "axios";
import { removeReclamation } from "../../store/reclamationSlice";
import { StickyTableReclama } from "../Tables/StickyTableReclama";
import { ColomnsReclamationPOSTWithMachine } from "../Tables/ColomnsTables/colomnReclamaPostWithMachine";




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

    const[machineNot, setMachineNot] = useState(Boolean(!target))

    const dispatch  = useDispatch()

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
                // setFlag(true)      
            }
            else{
                setRedaction(false)
                // setFlag(res => !res)
            }

        }, [targetIDReclama])

    useEffect(() => {
        setFlag(false)

    }, [])

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

    // const onSubmit = (data) => {
    //     if(data?.id) {
            
    //         const reclamation_data_old = isReclamation.ids[data.id[0]]

    //         const reclamData_for_redaction = [{
    //             id: reclamation_data_old.id,
    //             date_of_failure: reclamation_data_old.date_of_failure,
    //             date_of_restoration: reclamation_data_old.date_of_restoration,
    //             description_of_failure: reclamation_data_old.description_of_failure,
    //             downtime: reclamation_data_old.downtime,
    //             failure_node: reclamation_data_old.failure_node,
    //             machine: reclamation_data_old.machine.brand,
    //             recovery_method: reclamation_data_old.recovery_method,
    //             service_company: reclamation_data_old.service_company.name,
    //             spare_parts: reclamation_data_old.spare_parts,
    //             working_hours: reclamation_data_old.working_hours,
    //         }]
    //         setRedactionData(reclamData_for_redaction)
    //         setFlag(true)
    //         reset()
            
    //     }
    // }

    const onSubmitPost = (data) => {
        if(data.date_of_failure >= data.date_of_restoration&& data.date_of_restoration){
            alert("дата отказа не может быть раньше, чем дата восстановления")
        }
        else {
            if(!data.date_of_restoration){
                delete data["date_of_restoration"]
            }
            
        axios.post(path_reclamation, data, isAuth.confermAut)
        .then(res => {
            addReclama(overload => true)
            reset()
            alert("Рекламация успешно добавлена")
        })
        .catch(err => {
            console.log("errr", err)
            if(err.request.status >= 500) {
                console.log("ERROR", err)
                alert("Извените, проблема с сервером, попробуйте отправить позже!");
                reset()
            }

        })
        setRedaction(false)
        setFlag(res => !res)
        }
    }

    const onSubmitPatch = (data) => {
          const touchedFields = {
            date_of_failure: data.date_of_failure?  data.date_of_failure : redactionData[0].date_of_failure,
            date_of_restoration: data.date_of_restoration? data.date_of_restoration : redactionData[0].date_of_restoration,
        }
        if(touchedFields.date_of_failure >= touchedFields.date_of_restoration){
            alert("дата отказа не может быть раньше, чем дата восстановления")

        }
        else {
            const path_patch = path_reclamation + Number(data.id)+"/"
            axios.patch(path_patch, data, isAuth.confermAut)
            .then(res => {
                dispatch(removeReclamation())
                reset()
                alert("Рекламация успешно обновлена")
            })
            .catch(err => {
                alert(err)
                if(err.request.status >= 500) {
                    alert("Извените, проблема с сервером, попробуйте отправить позже!");
                    reset()
                }

            })
            setRedaction(false)
            // setFlag(res => !res)

        }
    }

    // const checkedCheckBox = () => {
    //     const checkboxsArray = document.querySelectorAll(".check-reclamation");
    //     checkboxsArray.forEach((elem) => {
    //     elem.addEventListener("click", (e) => {

    //         for (let i = 0; i < checkboxsArray.length; i++) {
    //             if(checkboxsArray[i] !== e.target){
    //                 checkboxsArray[i].checked = false
    //             }
    //           }
    //         if(e.target.checked){
    //             setRedaction(true)
    //         } else {
    //             setRedaction(false) 
    //         }
    //     });
    // });
    // }


    const errorSubmit = (data) => {
        console.log("error", data)
    }
    if(!isReclamation.sorted_data[target]&&!isReclamation.data) return <></>

    return(
        <>
        <div className="reclamation-wrapper">
            <div classnema="reclamation-element">
                {isReclamation.sorted_data[target]&&!flag&&
                <StickyTableReclama dataTable={isReclamation.sorted_data[target]} columnsTable={ColomnsReclamation}/>}
                {!isReclamation.sorted_data[target]&&!flag&&
                <StickyTableReclama dataTable={isReclamation.data} columnsTable={ColomnsReclamation}/>}
                {/* {redaction&&!flag&&
                    <Button>Редактировать</Button>} */}
            </div>  
            {!role_user_is_client&&
                <div classnema="reclamation-element">
                {!redaction&&
                    <Button onClick={() => {setFlag(res=>!res)}}>{!flag?"Написать рекламацию": "Назад"}</Button>}
                    <form onSubmit={handleSubmit(onSubmitPost, errorSubmit)}> 
                    {!target&&flag&&!redaction&&   
                       <div classnema="reclamation-element">   
                        <StickyTableReclama dataTable={reclamMachine} columnsTable={ColomnsReclamationPOST}/>
                        <Button disabled={!isValid}>Отправить рекламацию</Button>
                        </div>}
                        {target&&!redaction&&flag&&
                        <div classnema="reclamation-element">
                        <StickyTableReclama dataTable={reclamData} columnsTable={ColomnsReclamationPOSTWithMachine}/>
                        <Button disabled={!isValid}>Отправить рекламацию</Button>
                        </div>}
                    </form>
                    {redaction&&
                    <Button onClick={() => {setFlag(res=>!res)}}>{!flag?"Редактировать рекламацию": "Назад"}</Button>}
                    {flag&&redaction&&
                    <form onSubmit={handleSubmit(onSubmitPatch, errorSubmit)}>
                        <div classnema="reclamation-element">
                        <StickyTableReclama dataTable={redactionData} columnsTable={ColomnsReclamaRedact}/>
                        <Button disabled={!isValid}>Редактировать рекламацию</Button> 
                        </div>
                    </form>}

                </div>}
        </div>
        </>
    )
}