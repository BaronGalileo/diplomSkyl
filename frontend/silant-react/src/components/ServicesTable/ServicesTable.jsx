import React from "react";
import { useSelector } from "react-redux";
import { StickyTable } from "../Tables/StickyTable";
import { ColomnsService } from "../Tables/ColomnsTables/columnsService";

export const ServicesTable = () => {

    const isServices = useSelector(state => state.services)
    const target = useSelector(state => state.targetmachine)

    return(
        <>
        {isServices.sorted_data[target.target]&&
        <StickyTable dataTable={isServices.sorted_data[target.target]} columnsTable={ColomnsService}/>}
        </>
    )
}