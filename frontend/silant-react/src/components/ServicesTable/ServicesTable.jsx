import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ColomnsService } from "../Tables/ColomnsTables/columnsService";
import { useFormContext } from "react-hook-form"
import { Button } from "../Button/Button";
import { ColomnsServicePost } from "../Tables/ColomnsTables/columnsServicePost";
import axios from "axios";
import { removeTargetServID } from "../../store/servicesSlice";
import { ColomnsServicePatch } from "../Tables/ColomnsTables/columnsServicePatch";
import { StickyTableServes } from "../Tables/StickyTableServes";
import { ColomnsServicePostNotMachine } from "../Tables/ColomnsTables/ColumnsServicePostNotMachine";
import { StickyTableForPatch } from "../Tables/StickyTableForPath";
import { isValid_data_patch } from '../../helpers/isValidData'

export const ServicesTable = ({addService}) => {

    const {
        handleSubmit,
        formState: {isValid},
        reset,
    
    } = useFormContext()

    const isAuth = useSelector(state => state.auth)

    const isServices = useSelector(state => state.services)

    const target = useSelector(state => state.targetmachine)

    const machine_obj = useSelector(state => state.machines.ids)

    const targetService = useSelector(state => state.services.targetServID)

    const[redactionData, setRedactionData] = useState(null)

    const[flag, setFlag] = useState(false)

    const[redaction, setRedaction] = useState(false)

    const timeNew = new Date().toISOString("YYYY-MM-DD")

    const dispatch  = useDispatch()

    const service_data = [{
        date_order: '',
        date_service: '',
        machine: '',
        order_No: '',
        service_company: '',
        type_of_service: '',
        working_hours: '',   
    }]


    const path_service = "http://127.0.0.1:8000/api/service/v1/service/"

    useEffect( () => {
        if(!flag){
            reset()
        }

    }, [target, flag])

    useEffect( () => {
        dispatch(removeTargetServID())
    }, [])

    

    useEffect( () => {

        if(targetService) {
            const service_data_old = isServices.ids[targetService]

            const serviceData_for_redaction = [{
                id: service_data_old?.id,
                date_order: service_data_old?.date_order,
                date_service: service_data_old?.date_service,
                order_No: service_data_old?.order_No,
                service_company: service_data_old?.service_company.name,
                type_of_service: service_data_old?.type_of_service.name,
                working_hours: service_data_old?.working_hours,
            }]
            if (serviceData_for_redaction[0]){
                setRedaction(true)
                setRedactionData(serviceData_for_redaction)
            }
        }
        else{
            setRedaction(false)
            setRedactionData(null)
        }

    }, [targetService])


    const onSubmitPost = (data) => {
        const dataIsValid = isValid_data_patch(data)
        const servOrgID = machine_obj.ids[data.machine]?.service_company.user
        dataIsValid['service_company'] = servOrgID
        if(dataIsValid.date_service&&timeNew>dataIsValid.date_service){
                alert("Невозможно вернуться в прошлое. Поменяйте, пожалуйста, дату проведения ТО")
    
        }
        else if(dataIsValid.date_order&&timeNew>dataIsValid.date_order){
                alert("Невозможно вернуться в прошлое. Поменяйте, пожалуйста, дату заказ-наряда")
        }
        else{
            axios.post(path_service, dataIsValid, isAuth.confermAut)
            .then(res => {
                addService(overload=>!overload)
                reset()
                alert("Заяка на ТО успешна принята")
            })
            .catch(err => {
                if(err.request.status >= 500) {
                    alert("Извените, проблема с сервером, попробуйте отправить позже!");
                    reset()
                }
            })
            setRedaction(false)
            setFlag(res => !res)
        }
    }

    const onSubmitPatch = (data) => {
        const dataIsValid = isValid_data_patch(data)
        if(Object.keys(dataIsValid).length ===1){
            return alert("Вы ничего не редактировали")
        }
        const date_TO = dataIsValid.date_service
        const date_TO_old = redactionData[0].date_service
        const date_Order = dataIsValid.date_order 
        const date_Order_old = redactionData[0].date_order

        if(date_Order){
            if(date_Order>date_TO||date_TO_old){
                return alert("Дата заказ-наряда не может быть позже проведения ТО")
            }
        }
        else if(date_TO) {
            if(date_TO<date_Order||date_Order_old ){
                return alert("Дата проведения ТО  не может быть раньше заказ-наряда")
            }
        }
        else {
            const path_patch = path_service + data.id +"/"
            axios.patch(path_patch, dataIsValid, isAuth.confermAut)
            .then(res => {
                reset()
                addService(overload=>!overload)
                alert("Редакция на ТО успешна принята")
            })
            .catch(err => {
                if(err.request.status >= 500) {
                    alert("Извените, проблема с сервером, попробуйте отправить позже!");
                    reset()
                }
            })
            setRedaction(false)
            setFlag(res => !res)

        }
        reset()
    }


    return(
        <div className="reclamation-wrapper">
            <div classnema="reclamation-element">
            {isServices.sorted_data[target.target]&&!flag&&
                <StickyTableServes dataTable={isServices.sorted_data[target.target]} columnsTable={ColomnsService}/>}
            {!isServices.sorted_data[target.target]&&!flag&&isServices.data&&
                <StickyTableServes dataTable={isServices.data} columnsTable={ColomnsService}/>}

                {redaction&&
                <div classnema="reclamation-element">
                    <Button className={!flag ? "red" : ""} onClick={() => {setFlag(res=>!res)}}>{!flag?"Редактировать ТО": "Назад"}</Button>
                </div>}
            </div>
            <div classnema="reclamation-element">
            {!redaction&&
                    <Button className={!flag ? "red" : ""} onClick={() => {setFlag(res=>!res)}}>{!flag?"Заказать ТО": "Назад"}</Button>}
                {flag&&!redaction&&target.target&&
                    <form onSubmit={handleSubmit(onSubmitPost)}>               
                        <StickyTableServes dataTable={service_data} columnsTable={ColomnsServicePost}/>
                        <Button disabled={!isValid}>Заказать ТО</Button>
                    </form>}

                {flag&&!redaction&&!target.target&&
                <form onSubmit={handleSubmit(onSubmitPost)}>               
                    <StickyTableServes dataTable={service_data} columnsTable={ColomnsServicePostNotMachine}/>
                    <Button disabled={!isValid}>Заказать ТО</Button>
                </form>}
                {flag&&redaction&&
                    <form onSubmit={handleSubmit(onSubmitPatch)}>
                        <StickyTableForPatch dataTable={redactionData} columnsTable={ColomnsServicePatch}/>
                        <Button >Редактировать</Button>                    
                    </form>}
            </div>
        </div>
    )
}