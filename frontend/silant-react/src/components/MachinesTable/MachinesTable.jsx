import React from "react";
import { useSelector } from "react-redux";
import { useFormContext } from "react-hook-form"
import { ColumnsMachinePost } from "../Tables/ColomnsTables/columnsMachinePost"
import { Button } from "../Button/Button";
import axios from "axios";
import { ColumnsMachinePatch } from "../Tables/ColomnsTables/columnsMachinePatch";
import { StickyTableFilters } from "../Tables/StickyTableFilters";



export const MachinesTable = ({createMachine, machineObj, setFlag, addDataMachine}) => {    



    const {
        handleSubmit,
        formState: {isValid},
        reset,
    
    } = useFormContext()

    const isAuth = useSelector(state => state.auth)

    const path_machine = "http://127.0.0.1:8000/api/v1/machine/"

    const data_machine = [{
        brand: '',
        serial_num: '',
        car_model: '',
        engine_model: '',
        engine_num: '',
        transmission_model: '',
        transmission_num: '',
        driving_axle_model: '',
        driving_axle_num: '',
        model_of_a_controlled_bridge: '',
        num_of_a_controlled_bridge: '',
        contractNo: '',
        date_from_the_factory: '',
        consignee: '',
        delivery_address: '',
        equipment: '',
        client: '',
        service_company: ''
    }]


    const onSubmitPost = (data) => {
        if(data.target_serial_num){
            delete data["target_serial_num"]
        }
        console.log("DATA machine", data)
        axios.post(path_machine, data, isAuth.confermAut)
        .then(res => {
            alert("Машина создана!")
            setFlag(res=> !res)
            addDataMachine(overload=>!overload)
        })
        .catch(err => {
            alert(err.request.responseText)
        })
        reset()
    }

    const onSubmitPatch = (data) => {
        const path_patch = path_machine + data.id +'/'
        axios.patch(path_patch, data, isAuth.confermAut)
        .then(res => {
            alert("Редакция прошла успешно!")
            setFlag(res=> !res)
            addDataMachine(true)
        })
        .catch(err => {
            alert(err.request.responseText)
        })
        reset()
    }

    const errorsSubmit = (data) => {
        console.log("ERROR", data)
        reset()
    }
 

    return(
        <div className="reclamation-wrapper">
            <div className="reclamation-element">
                {createMachine&&
                <form onSubmit={handleSubmit(onSubmitPost, errorsSubmit)}>               
                    <StickyTableFilters dataTable={data_machine} columnsTable={ColumnsMachinePost}/>
                    <Button>Создать машину</Button>
                </form>}
                {machineObj&&!createMachine&&
                    <form onSubmit={handleSubmit(onSubmitPatch, errorsSubmit)}>            
                        <StickyTableFilters dataTable={machineObj} columnsTable={ColumnsMachinePatch}/>
                        <Button >Редактировать машину</Button>
                </form>}
            </div>
        </div>
    )
}