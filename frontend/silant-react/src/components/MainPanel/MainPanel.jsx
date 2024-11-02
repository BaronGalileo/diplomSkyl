import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../Text/Text";
import "./styles.css"
import { Button } from "../Button/Button";
import axios from "axios";
import { setMachineID, setMachines, setSorted_serian_num } from "../../store/machinesSlice";
import { MachinesTable } from "../MachinesTable/MachinesTable";
import { ServicesTable } from "../ServicesTable/ServicesTable";
import { ReclamationTable } from "../ReclamationTable/ReclamationTable";
import { removeTargetmachine, setTargetmachine } from "../../store/targetmachineSlice";
import { setReclamaData, setReclamation, setReclamation_id } from "../../store/reclamationSlice";
import { setDataServ, setServices, setServices_ids } from "../../store/servicesSlice";
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
   

    const DICT_ROLE = {
        "client": "Клиент",
        "manager": "Менеджер",
        "serviseorg": "Сервисная компания"
    }


    const path_machine = "http://127.0.0.1:8000/api/v1/machine/"

    const path_service = "http://127.0.0.1:8000/api/service/v1/service/"

    const path_reclamation = "http://127.0.0.1:8000/api/service/v1/reclamation/"


    useEffect(() => {
        addDataMachine()
        addDataService()
        addDataReclamations()
        
    }, [])

    useEffect(() => {
        addDataMachine()
        
    }, [macinesTable, flag])

    useEffect(() => {
    }, [isTargetMachine])

    useEffect(() => {
        dispatch(removeTargetmachine())

    },[])


    useEffect(() => {
           if(target.target){
            const full_data_machine = isMashines.sorted_serian_num[target.target]
            setMachineObj(full_data_machine)
            setTitleMachine(full_data_machine[0])
            setIsTargetMachineForManager(true)
            setRedactionForManager(true)
            setIsTargetMachine(true)

        }
        else{
            setIsTargetMachineForManager(false)
            setTitleMachine(null)
            setMachineObj(null) 
            setRedactionForManager(false)
            setReclamationTable(false)
            setServicesTable(false)
            setIsTargetMachine(false)
        }


    }, [target])

    useEffect(() => {

    }, [servicesTable, reclamationTable])


    useEffect(() => {
        const elements = document.querySelectorAll(".td")
        elements.forEach((elem) => {
            elem.addEventListener("click", (e) => {
                const click_index = elem.classList[1]
                dispatch(setClick(click_index))
           })
        })
    })

    function addDataMachine(overload) {
        if(!isMashines.machines_data||overload){
            setRedactionForManager(false)
            axios.get(path_machine, isAuth.confermAut)
            .then(res => {
                const data_by_id = {
                    ids:sorted_id(res.data)
                }
                const data = {
                    machines_data: res.data
                }
                dispatch(setMachineID(data_by_id))
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

    function addDataService(overload) {
        if(!isServices[0] ||overload){
            axios.get(path_service, isAuth.confermAut)
            .then(res => {
                dispatch(setDataServ(res.data))
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

    function addDataReclamations(overload) {
        if(!isReclamation[0] ||overload) {
            axios.get(path_reclamation, isAuth.confermAut)
            .then(res => {
                dispatch(setReclamaData(res.data))
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


    function change(e) {
        if(e.target.className === "btn all-info"){
            setRedactionForManager(false)
            addDataMachine()
            setMacinesTable(res => true)
            setServicesTable(res => false)
            setReclamationTable(res => false)
        }
        else if(e.target.className === "btn TO"){
            setRedactionForManager(false)
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
        const btns = document.querySelectorAll(".btn");
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("active");
          }
        return e.currentTarget.classList.add("active")
    }

   
    if(!isAuth.isAuth) return <Navigate to="/"/>
    

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
        <div className="main-panel-element">
            <Button className="all-info"onClick={change} active>Общая информация</Button>
            <Button className="TO" onClick={change}>{!isTargetMachine?"Техническое обслуживание всех машин": "ТО выбранной машины"}</Button>
            <Button className="reclam" onClick={change} >{!isTargetMachine?"Рекламация всей техники": "Рекламация выбранной машины"}</Button>
        </div>
            {machinesDataTable&& macinesTable&&!flag&&
            <StickyTableFilters dataTable={machinesDataTable} columnsTable={columnsFullMachine}/>}
            <div className="main-panel-element">
            {redactionForManager&&!client_and_serv&&
                <Button  onClick={() => {
                    setIsTargetMachine(res=>!res)
                    setFlag(res=>!res);
                }}>{!flag?"Редактировать машину": "В меню"}</Button>}</div>
        <div className="main-panel-element">
            {!client_and_serv&&!redactionForManager&&!servicesTable&&!reclamationTable&&
                <Button onClick={() => {
                    setCreateMachine(res=>!res)
                    setFlag(res=>!res)
                }}
                >{!flag?"Создать машину": "В меню"}</Button>}
        </div>

        <div >
        {flag&&(createMachine||machineObj)&&
                <MachinesTable createMachine={createMachine} machineObj={machineObj} addDataMachine={addDataMachine} setFlag={setFlag}/>}
        </div>
        <div className="main-panel-element">
        {servicesTable&&!flag&&
            <ServicesTable/>}
        </div>
        <div className="main-panel-element">
        {reclamationTable&&!flag&&
            <ReclamationTable addReclama={addDataReclamations}/>}
        </div>
        </div>
    
    )
}
export { MainPanel }