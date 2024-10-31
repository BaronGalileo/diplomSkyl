import React, { useEffect, useState, useMemo } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormContext } from "react-hook-form"
import { Text } from "../Text/Text";
import "./styles.css"
import { Button } from "../Button/Button";
import axios from "axios";
import { removeMachine_obj, removeMachines, setMachine_obj, setMachines, setSorted_serian_num } from "../../store/machinesSlice";
import { MachinesTable } from "../MachinesTable/MachinesTable";
import { ServicesTable } from "../ServicesTable/ServicesTable";
import { ReclamationTable } from "../ReclamationTable/ReclamationTable";
import { removeTargetmachine, setTargetmachine } from "../../store/targetmachineSlice";
import { setReclamation, setReclamation_id } from "../../store/reclamationSlice";
import { setServices, setServices_ids } from "../../store/servicesSlice";
import { sortedDataBySerialNum } from "../../helpers/sortedData";
import { sorted_id } from "../../helpers/sorted_id";
import { StickyTableFilters } from "../Tables/StickyTableFilters";
import { columnsFullMachine } from "../Tables/ColomnsTables/columnsFullMachine";
import { setClick } from "../../store/clickIndexRow";




function MainPanel() {

    const dispatch  = useDispatch()

    const isMashines = useSelector(state => state.machines)

    const isReclamation = useSelector(state => state.reclamation)

    const isServices = useSelector(state => state.services)

    const target = useSelector(state => state.targetmachine)

    const[isTargetMachine, setIsTargetMachine] = useState(false)

    const[isTargetMachineForManager, setIsTargetMachineForManager] = useState(false)

    const isAuth = useSelector(state => state.auth)

    const[macinesTable, setMacinesTable] = useState(true)

    const[servicesTable, setServicesTable] = useState(false)

    const[reclamationTable, setReclamationTable] = useState(false)

    const[titleMachine, setTitleMachine] = useState(null)

    const[redactionForManager, setRedactionForManager] = useState(false)

    const[flag, setFlag] = useState(false)

    const[createMachine, setCreateMachine] = useState(false)

    const[machinesDataTable, setMachinesDataTable] = useState(isMashines.machines_data)

    const client_and_serv = Boolean(isAuth.user_role === "client" || isAuth.user_role === "serviseorg" )

    const[machineObj, setMachineObj] = useState(null)

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
        
    }, [macinesTable, flag])

    useEffect(() => {

    }, [redactionForManager, machinesDataTable, machineObj])

    useEffect(() => {
        const elements = document.querySelectorAll(".td")
        elements.forEach((elem) => {
            elem.addEventListener("click", (e) => {
                const click_index = elem.classList[1]
                dispatch(setClick(click_index))
           })
        })
    })

    function addDataMachine(overload=false) {
        if(!isMashines.machines_data||overload){
            axios.get(path_machine, isAuth.confermAut)
            .then(res => {
                const data = {
                    machines_data: res.data
                }
                dispatch(setMachines(data))
                const dataRES = sortedDataBySerialNum(res.data)
                const data_for_store = {
                    machines_data: res.data,
                    sorted_serian_num: dataRES,
                }
                dispatch(setSorted_serian_num(data_for_store))
                setMachinesDataTable(res.data)
              }
            )
        }
    }

    function addDataService() {
        if(!isServices[0]){
            axios.get(path_service, isAuth.confermAut)
            .then(res => {
                const data_by_id = {
                    ids:sorted_id(res.data)
                }
                dispatch(setServices_ids(data_by_id))
                const dataRES = sortedDataBySerialNum(res.data)
                const data_for_store = {
                    services_data: dataRES
                }
                if(data_for_store.services_data){
                    dispatch(setServices(data_for_store))
                }
            })
        }
    }

    function addDataReclamations() {
        if(!isReclamation[0]) {
            axios.get(path_reclamation, isAuth.confermAut)
            .then(res => {
                const data_by_id = {
                    ids:sorted_id(res.data)
                }
                dispatch(setReclamation_id(data_by_id))
                const data_for_store = {
                    reclamation_data: sortedDataBySerialNum(res.data)
                }
                if(data_for_store.reclamation_data){
                    dispatch(setReclamation(data_for_store))
                }
            })
        }
    }

    const onSubmit = (data) => {
        console.log("DTAT", data)
        if(data.target_serial_num) {
            for (const [key, value] of Object.entries(data.target_serial_num)) {
                if(value) {
                    const data_for_state = {
                        machine_obj : isMashines.sorted_serian_num[key][0]
                    }
                    dispatch(setMachine_obj(data_for_state))
                    setTitleMachine(isMashines.sorted_serian_num[key][0])
                    dispatch(setTargetmachine(key))
                }
                reset()
            }

        }
        }

    function checkedOff() {
        const checkboxsArray = document.querySelectorAll(".serian-num");
        for (let i = 0; i < checkboxsArray.length; i++) {
            if(checkboxsArray[i].checked){
                setRedactionForManager(false)
                return checkboxsArray[i].checked = false
            }
            setIsTargetMachine(false)
            setIsTargetMachineForManager(false)
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
            setRedactionForManager(false)
            setServicesTable(res => true)
            setReclamationTable(res => false)
        }
        else if(e.target.className === "btn reclam"){
            addDataReclamations()
            setMacinesTable(res => false)
            setRedactionForManager(false)
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
        const checkboxsArray = document.querySelectorAll(".serian-num");
        checkboxsArray.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            setTitleMachine(null)
            dispatch(removeTargetmachine())
            dispatch(removeMachine_obj())
            for (let i = 0; i < checkboxsArray.length; i++) {
                if(checkboxsArray[i] !== e.target){
                    checkboxsArray[i].checked = false
                }
              }
            if(e.target.checked){
                setRedactionForManager(true)
                setIsTargetMachine(true)
                setIsTargetMachineForManager(true)
                dispatch(setTargetmachine(e.target.id))
                setMachineObj(isMashines?.sorted_serian_num[e.target.id])
            } else {
                setMachineObj(null) 
                setRedactionForManager(false)
                setIsTargetMachine(false)
                setIsTargetMachineForManager(false)
            }
        });
    });
    }
   
    if(!isAuth.isAuth) return <Navigate to="/"/>


    const errorSubmit = (data) => {
        console.log("Errrors", data)
    }     

    return(
        <div className="main-panel-wrapper">
        {isAuth &&
        <div className="main-panel-element">
            {macinesTable&&
                <Text className="left" as="h2">{DICT_ROLE[isAuth.user_role]} / {isAuth.name},  добро пожаловать!</Text>}
            {servicesTable&&titleMachine?.brand&& 
                <Text className="left" as="h2">Машина - {titleMachine?.brand} / Серийный номер -{titleMachine?.serial_num}</Text>}
            {reclamationTable&&titleMachine?.brand&& 
                <Text className="left" as="h2">Машина - {titleMachine?.brand} / Серийный номер -{titleMachine?.serial_num}</Text>}
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
            {machinesDataTable&& macinesTable&&!flag&&
            <StickyTableFilters dataTable={machinesDataTable} columnsTable={columnsFullMachine}/>}
            {redactionForManager&&isTargetMachineForManager&&!client_and_serv&&
                <Button  onClick={() => {
                    setFlag(res=>!res);
                    setIsTargetMachine(res=>!res)
                }}>{!flag?"Редактировать машину": "В меню"}</Button>}
            </form>
        <div className="main-panel-element">
            {!client_and_serv&&!redactionForManager&&!servicesTable&&!reclamationTable&&
                <Button onClick={() => {
                    setCreateMachine(res=>!res)
                    setFlag(res=>!res)
                }}
                >{!flag?"Создать машину": "В меню"}</Button>}
        </div>

        <div className="main-panel-element">
        {flag&&(createMachine||machineObj)&&
                <MachinesTable createMachine={createMachine} machineObj={machineObj} addDataMachine={addDataMachine} setFlag={setFlag}/>}
        </div>
        <div className="main-panel-element">
        {servicesTable&&!flag&&
            <ServicesTable/>}
        </div>
        <div className="main-panel-element">
        {reclamationTable&&!flag&&
            <ReclamationTable/>}
        </div>
        </div>
    
    )
}
export { MainPanel }