import React, { useState } from "react";
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



export const MachineFromTable = ({ data_row, path_ser, field_value}) => {


    const[pathMachinePage, setPathMachinePage] = useState(null)

    const[flag, setFlag] = useState(false)


    const clickKlack =() => {

        if(data_row.index|| data_row.index === 0) {
            const my_machine = {
                id: data_row.values.id}

            const path_for_machine = path_ser + my_machine.id
            
            setPathMachinePage(path_for_machine)
        }

    }


    if(pathMachinePage&&flag){

        return <Navigate to={pathMachinePage}/>

    } 
 
    return(
            <Button clean className="btn-table" onClick={() => {
                setFlag(res=>!res)
                clickKlack()
            }}>{field_value}</Button>

    )
}