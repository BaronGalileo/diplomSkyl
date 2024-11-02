import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setOne_machine } from "../../store/oneMachineSlice";
import { Navigate } from "react-router-dom";
import { removeClick } from "../../store/clickIndexRow";


export const MachineFromTable = ({ data_row, field_value}) => {

    const targetIndexRow = useSelector(state => state.clickIndex)

    const[pathMachinePage, setPathMachinePage] = useState(null)

    const[flag, setFlag] = useState(false)

    const dispatch = useDispatch()



    useEffect(() => {
        if(data_row.index === Number(targetIndexRow) && targetIndexRow !== null) {
            const my_machine = {
                id: data_row.values.id,
                brand: data_row.values.brand,
                serial_num:  data_row.values.serial_num,
                car_model: data_row.values.car_model,
                engine_model:  data_row.values.engine_model,
                engine_num: data_row.values.engine_num,
                transmission_model:  data_row.values.transmission_model,
                transmission_num: data_row.values.transmission_num,
                driving_axle_model:  data_row.values.driving_axle_model,
                driving_axle_num:  data_row.values.driving_axle_num,
                model_of_a_controlled_bridge: data_row.values.model_of_a_controlled_bridge,
                num_of_a_controlled_bridge: data_row.values.num_of_a_controlled_bridge,
                service_company: data_row.values.service_company,
                client: data_row.values.client,
                contractNo: data_row.values.contractNo,
                consignee: data_row.values.consignee,
                date_from_the_factory: data_row.values.date_from_the_factory,
                delivery_address: data_row.values.delivery_address,
                equipment: data_row.values.equipment,

            }
            const path_for_machine = `machine/${my_machine.id}`
            setPathMachinePage(path_for_machine)
            dispatch(setOne_machine(my_machine))
        }
    })


    if(pathMachinePage&&flag){

        return <Navigate to={pathMachinePage}/>

    } 
 
    return(
            <Button clean className="btn-table" onClick={() => setFlag(res=>!res)}>{field_value}</Button>

    )
}