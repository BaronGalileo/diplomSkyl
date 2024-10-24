import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormContext } from "react-hook-form"
import { Text } from "../Text/Text";
import "./styles.css"
import { Button } from "../Button/Button";
import axios from "axios";
import { setMachines } from "../../store/machinesSlice";
import { MachinesTable } from "../MachinesTable/MachinesTable";
import { ServicesTable } from "../ServicesTable/ServicesTable";
import { ReclamationTable } from "../ReclamationTable/ReclamationTable";
import { removeTargetmachine, setTargetmachine } from "../../store/targetmachineSlice";
import { setReclamation } from "../../store/reclamationSlice";
import { setServices } from "../../store/servicesSlice";
import { addValue } from "../../helpers/addValue";
import { sortedDataBySerialNum } from "../../helpers/sortedData";




function MainPanel() {

    const dispatch  = useDispatch()

    const isMashines = useSelector(state => state.machines)

    const isReclamation = useSelector(state => state.reclamation)

    const isServices = useSelector(state => state.services)

    const[isTargetMachine, setIsTargetMachine] = useState(false)

    const isAuth = useSelector(state => state.auth)

    const[macinesTable, setMacinesTable] = useState(true)

    const[servicesTable, setServicesTable] = useState(false)

    const[reclamationTable, setReclamationTable] = useState(false)

    const {
        handleSubmit,
        formState: {isValid},
        reset,
    
      } = useFormContext()
    

    const DICT_ROLE = {
        "client": "Клиент",
        "manager": "Менеджер",
        "serviseorg": "Сервисная компания"
    }


    const path_machine = "http://127.0.0.1:8000/api/v1/machine/"

    const path_service = "http://127.0.0.1:8000/api/service/v1/service/"

    const path_reclamation = "http://127.0.0.1:8000/api/service/v1/reclamation/"

    useEffect( () => checkedCheckBox())
 
    useEffect(() => {
        addDataMachine()
        checkedOff()
        
    }, [macinesTable])


    function addDataMachine() {
        if(!isMashines[0]){
            axios.get(path_machine, isAuth.confermAut)
            .then(res => {
                const dataRES = sortedDataBySerialNum(res.data)
                const data_for_store = {
                    machines_data: res.data,
                    sorted_serian_num: dataRES,
                }
                dispatch(setMachines(data_for_store))
              })
        }
    }

    function addDataService() {
        if(!isServices[0]){
            axios.get(path_service, isAuth.confermAut)
            .then(res => {
                const dataRES = sortedDataBySerialNum(res.data)
                const data_for_store = {
                    services_data: dataRES
                }
                dispatch(setServices(data_for_store))
            })
        }
    }

    function addDataReclamations() {
        if(!isReclamation[0]) {
            axios.get(path_reclamation, isAuth.confermAut)
            .then(res => {
                const dataRES = sortedDataBySerialNum(res.data)
                const data_for_store = {
                    reclamation_data: dataRES,
                }
                dispatch(setReclamation(data_for_store))
            })
        }
    }

    const onSubmit = (data) => {
        Object.entries(data).map(key => {
            if(key[1]&&isMashines.sorted_serian_num[key[0]]){
                dispatch(setTargetmachine(key[0]))
            }
            reset()
        })

        console.log("DATA", data)
        }

    function checkedOff() {
        const checkboxsArray = document.querySelectorAll(".checkbox-element");
        for (let i = 0; i < checkboxsArray.length; i++) {
            if(checkboxsArray[i].checked){
                return checkboxsArray[i].checked = false
            }
            setIsTargetMachine(false)
        }
        }


    function change(e) {
        if(e.target.className === "btn all-info"){
            addDataMachine()
            setMacinesTable(res => true)
            setServicesTable(res => false)
            setReclamationTable(res => false)
        }
        else if(e.target.className === "btn TO"){
            addDataService()
            setMacinesTable(res => false)
            setServicesTable(res => true)
            setReclamationTable(res => false)
        }
        else if(e.target.className === "btn reclam"){
            addDataReclamations()
            setMacinesTable(res => false)
            setServicesTable(res => false)
            setReclamationTable(res => true)
        }
        const btns = document.querySelectorAll("button");
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("active");
          }
        
        return e.currentTarget.classList.add("active")
    }

    const checkedCheckBox = () => {
        const checkboxsArray = document.querySelectorAll(".checkbox-element");
        checkboxsArray.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            dispatch(removeTargetmachine())
            for (let i = 0; i < checkboxsArray.length; i++) {
                if(checkboxsArray[i] !== e.target){
                    checkboxsArray[i].checked = false
                }
              }
            if(e.target.checked){
                setIsTargetMachine(true)
            } else { 
                setIsTargetMachine(false)
            }
        });
    });
    }
   
    if(!isAuth.isAuth) return <Navigate to="/"/>


    const errorSubmit = (data) => {
    } 
    


    return(
        <div className="main-panel-wrapper">
        {isAuth &&
        <div className="main-panel-element">
            <Text className="left" as="h2">{DICT_ROLE[isAuth.user_role]} / {isAuth.name},  добро пожаловать!</Text>
        </div>}
        {macinesTable&&
        <Text as="h3">Информация о комплектации и технических характеристиках Вашей техники</Text>}
        {servicesTable &&
        <Text as="h3">Информация о проведенных ТО Вашей техники</Text>}
        {reclamationTable &&
        <Text as="h3">Информация о рекламации Вашей техники</Text>}
        <form onSubmit={handleSubmit(onSubmit, errorSubmit)}>
                <Button className="all-info"onClick={change} active>Общая информация</Button>
                <Button className="TO" onClick={change} disabled={!isTargetMachine}>Техническое обслуживание</Button>
                <Button className="reclam" onClick={change} disabled={!isTargetMachine}>Рекламация</Button>
                {isMashines.machines_data&&macinesTable&&
                <MachinesTable/>}
        </form>
        {servicesTable&&
            <ServicesTable/>
        }
        {reclamationTable&&
            <ReclamationTable/>
        }
        </div>
    
    )
}
export { MainPanel }