import React from "react";
import { useSelector } from "react-redux";
import { StickyTable } from "../Tables/StickyTable";
import { ColomnsReclamation } from "../Tables/ColomnsTables/columnsReclamation";


export const ReclamationTable = () => {

    const isReclamation = useSelector(state => state.reclamation)

    return(
        <>
        <StickyTable dataTable={isReclamation} columnsTable={ColomnsReclamation}/>
        <h1>Рекламация</h1>
        </>
    )
}