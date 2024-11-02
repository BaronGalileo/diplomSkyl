import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import {  useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const FindTempateElement = ({ data_row, user, path, role, name_fild, children}) => {

    const targetIndexRow = useSelector(state => state.clickIndex)

    const servis = useSelector(state => state.services.ids)

    const reclama = useSelector(state => state.reclamation.ids)

    const machine = useSelector(state => state.machines.ids?.ids)

    const[pathFindPage, setPathFindPage] = useState(null)

    const[flag, setFlag] = useState(false)

    const dict_change = {
        "servis": servis,
        "reclama": reclama,
        "machine": machine,
    }


    const clickTak = () => {
        if(data_row.index === Number(targetIndexRow) && targetIndexRow !== null) {
            const elementID = data_row.values?.id
            const data_path = dict_change[role][elementID]

            const id_path = user ? data_path[name_fild].user : data_path[name_fild].id

            const path_for_element = `${path}${id_path}`
            setPathFindPage(path_for_element)
        }

    }

    useEffect(() => {

    }, [pathFindPage])

    if(pathFindPage&&flag){

        return <Navigate to={pathFindPage}/>

    }




 
    return(
            <Button clean className="btn-table" onClick={() => {setFlag(res=>!res)
                clickTak()}

            }>{children}</Button>

    )
}