import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import {  useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const FindTempateServisOrg = ({ data_row, path, children}) => {

    const targetIndexRow = useSelector(state => state.clickIndex)

    const reclama = useSelector(state => state.reclamation.ids)

    const[pathFindPage, setPathFindPage] = useState(null)

    const[flag, setFlag] = useState(false)





    useEffect(() => {
        if(data_row.index === Number(targetIndexRow) && targetIndexRow !== null) {
            const elementID = data_row.values.id
            const company = reclama[elementID].service_company.user
            const path_for_element = `${path}${company}`
            setPathFindPage(path_for_element)

        }
    })


    if(pathFindPage&&flag){

        return <Navigate to={pathFindPage}/>

    } 
 
    return(
            <Button clean className="btn-table" onClick={() => setFlag(res=>!res)}>{children}</Button>

    )
}