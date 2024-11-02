import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ColomnsService } from "../Tables/ColomnsTables/columnsService";
import { useFormContext } from "react-hook-form"
import { Button } from "../Button/Button";
import { ColomnsServicePost } from "../Tables/ColomnsTables/columnsServicePost";
import axios from "axios";
import { removeServices, removeTargetServID } from "../../store/servicesSlice";
import { ColomnsServicePatch } from "../Tables/ColomnsTables/columnsServicePatch";
import { StickyTableServes } from "../Tables/StickyTableServes";

export const ServicesTable = () => {

    const {
        handleSubmit,
        formState: {isValid},
        reset,
    
    } = useFormContext()

    const isAuth = useSelector(state => state.auth)

    const isServices = useSelector(state => state.services)

    const target = useSelector(state => state.targetmachine)

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

    }, [target, flag])

    useEffect( () => {
        dispatch(removeTargetServID())
    }, [])

    useEffect( () => {

        if(targetService) {
            const service_data_old = isServices.ids[targetService]

            const serviceData_for_redaction = [{
                id: service_data_old.id,
                date_order: service_data_old.date_order,
                date_service: service_data_old.date_service,
                machine: service_data_old.machine.brand,
                order_No: service_data_old.order_No,
                service_company: service_data_old.service_company.name,
                type_of_service: service_data_old.type_of_service,
                working_hours: service_data_old.working_hours,
            }]
            setRedaction(true)
            setRedactionData(serviceData_for_redaction)
        }
        else{
            setRedaction(false)
            setRedactionData(null)
        }

    }, [targetService])


    const onSubmitPost = (data) => {
        if(!data.date_order){
            delete data["date_order"]
        }
        if(timeNew>data.date_service||timeNew>data.date_order){
            alert("Невозможно вернуться в прошлое. Выберете, пожалуйста, дату проведения ТО(дата заказ-наряда) минимум на завтра")
        }      
        else {
            console.log("POST", data)
            axios.post(path_service, data, isAuth.confermAut)
            .then(res => {
                dispatch(removeServices())
                reset()
                alert("Заяка на ТО успешна принята")
            })
            .catch(err => {
                console.log("ERROR", err, data)
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

        if(!data.date_order){
            delete data["date_order"]
        }
        debugger
        if(timeNew>data.date_service&&!redactionData[0].date_service){
            alert("Невозможно вернуться в прошлое. Выберете, пожалуйста, дату проведения ТО минимум на завтра")
        }
        else if(timeNew>data.date_service&&redactionData[0].date_service) {
            alert("Вы поменяли дату проведения ТО на дату, которая уже прошла. Выберете, пожалуйста, дату проведения ТО минимум на завтра")
        }
        else if(timeNew>data.date_order&&!redactionData[0].date_order){
            alert("Невозможно вернуться в прошлое. Выберете, пожалуйста, дату заказ-наряда минимум с сегодняшнего дня")
        }
        else if(timeNew>data.date_order&&redactionData[0].date_order) {
            alert("Вы поменяли дату заказ-наряда на дату, которая уже прошла. Выберете, пожалуйста, дату заказ-наряда минимум с сегодняшнего дня")
        }
        else {
            const path_patch = path_service + data.id +"/"
            axios.patch(path_patch, data, isAuth.confermAut)
            .then(res => {
                reset()
                alert("Редакция на ТО успешна принята")
            })
            .catch(err => {
                console.log("ERROR", err, data)
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

    const errorSubmit = (data) => {
        console.log("ERROR", data)
    }

    

    return(
        <div className="reclamation-wrapper">
            <div classnema="reclamation-element">
            {isServices.sorted_data[target.target]&&!flag&&
                <StickyTableServes dataTable={isServices.sorted_data[target.target]} columnsTable={ColomnsService}/>}
                {!isServices.sorted_data[target.target]&&isServices&&!flag&&
                <StickyTableServes dataTable={isServices.data} columnsTable={ColomnsService}/>}

                {redaction&&
                <div classnema="reclamation-element">
                    <Button onClick={() => {setFlag(res=>!res)}}>{!flag?"Редактировать ТО": "Назад"}</Button>
                </div>}
            </div>
            <div classnema="reclamation-element">
            {!redaction&&
                    <Button onClick={() => {setFlag(res=>!res)}}>{!flag?"Заказать ТО": "Назад"}</Button>}
                {flag&&!redaction&&
                    <form onSubmit={handleSubmit(onSubmitPost, errorSubmit)}>               
                        <StickyTableServes dataTable={service_data} columnsTable={ColomnsServicePost}/>
                        <Button >Заказать ТО</Button>
                    </form>}
                {flag&&redaction&&
                    <form onSubmit={handleSubmit(onSubmitPatch, errorSubmit)}>
                        <StickyTableServes dataTable={redactionData} columnsTable={ColomnsServicePatch}/>
                        <Button >Редактировать</Button>                    
                    </form>}
            </div>
        </div>
    )
}