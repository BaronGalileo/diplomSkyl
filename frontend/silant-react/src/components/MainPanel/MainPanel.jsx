import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../Text/Text";
import "./styles.css"
import { Button } from "../Button/Button";
import axios from "axios";
import { LayoutTable } from "../Tables/LayoutTable";
import { columnsFullMachine } from "../Tables/ColomnsTables/columnsFullMachine";
import { ColomnsService } from "../Tables/ColomnsTables/columnsService"
import { ColomnsReclamation } from "../Tables/ColomnsTables/columnsReclamation"
import { StickyTable } from "../Tables/StickyTable";
import { setMachines } from "../../store/machinesSlice";
import { MachinesTable } from "../MachinesTable/MachinesTable";
import { ServicesTable } from "../ServicesTable/ServicesTable";
import { ReclamationTable } from "../ReclamationTable/ReclamationTable";




function MainPanel() {

    const dispatch  = useDispatch()

    const isMashines = useSelector(state => state.machines)


    const isAuth = useSelector(state => state.auth)

    const[macinesTable, setMacinesTable] = useState(true)

    const[servicesTable, setServicesTable] = useState(false)

    const[reclamationTable, setReclamationTable] = useState(false)
    

    const DICT_ROLE = {
        "client": "Клиент",
        "manager": "Менеджер",
        "serviseorg": "Сервисная компания"
    }


    const path_machine = "http://127.0.0.1:8000/api/v1/machine/"

    const path_service = "http://127.0.0.1:8000/api/service/v1/service/"

    const path_reclamation = "http://127.0.0.1:8000/api/service/v1/reclamation/"

    useEffect(() => {
        console.log("useEffect addMachine")
        addDataMachine()
    }, [])

    function addDataMachine() {
        if(!isMashines[0]){
            axios.get(path_machine, isAuth.confermAut)
            .then(res => {
                const data_for_store = {
                    machines_data: res.data,
                }
                dispatch(setMachines(data_for_store))
                console.log("setMachines(res.data)",res)
              })
        }
    }

    function addDataService() {
        axios.get(path_service, isAuth.confermAut).then(res => {
            console.log(res.data)
          })
    }

    function addDataReclamations() {
        axios.get(path_reclamation, isAuth.confermAut).then(res => {
            console.log(res.data)
          })
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


    if(!isAuth){
        return( 
        <>
        </>
        )
    }
    


    return(
        <div className="main-panel-wrapper">
        {isAuth &&
        <div className="main-panel-element">
            <Text className="left" as="h2">{DICT_ROLE[isAuth.user_role]} / {isAuth.name},  добро пожаловать!</Text>
        </div>}
        <Text as="h3">Информация о комплектации и технических характеристиках Вашей техники</Text>
        {/* <div className="main-panel-element">
            <Button className="all-info"onClick={change} active>Общая информация</Button>
            <Button className="TO" onClick={change}>Техническое обслуживание</Button>
            <Button className="reclam" onClick={change}>Рекламация</Button>
        </div> */}
        <div className="main-panel-element">
            <MachinesTable show={macinesTable}/>
            <ServicesTable show={servicesTable}/>
            <ReclamationTable show={reclamationTable}/>
{/* 
            <StickyTable dataTable={machines} columnsTable={columnsFullMachine}/>
            {services&&
            <StickyTable dataTable={services} columnsTable={ColomnsService}/>}
            {reclamation&&
            <StickyTable dataTable={reclamation} columnsTable={ColomnsReclamation}/>} */}
            {/* {machines&&
            <LayoutTable dataTable={machines} columnsTable={columnsFullMachine}/>}
            {services&&
            <LayoutTable dataTable={services} columnsTable={ColomnsService}/>}
            {reclamation&&
            <LayoutTable dataTable={reclamation} columnsTable={ColomnsReclamation}/>} */}
        </div>
        </div>
    
    )
}
export { MainPanel }