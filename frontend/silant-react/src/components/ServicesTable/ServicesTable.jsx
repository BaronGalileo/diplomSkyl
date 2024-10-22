import React from "react";
import { useSelector } from "react-redux";
import { StickyTable } from "../Tables/StickyTable";
import { ColomnsService } from "../Tables/ColomnsTables/columnsService";

export const ServicesTable = () => {

    const isServices = useSelector(state => state.services)

    return(
        <>
        <StickyTable dataTable={isServices} columnsTable={ColomnsService}/>
        </>
    )
}