import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { recursDataWrapper } from "../../helpers/recursData";

export const InvisibleDataForm = ({obj_target}) => {
    const {
        register,
    } = useFormContext()

    const dict_invisble_data = recursDataWrapper(obj_target)

    useEffect(() => {

    }, [dict_invisble_data])


    return(
    <>{
        Object.entries(dict_invisble_data).map(val => {

            return <input key={val[0]}{...register(`${val[0]}`)} type="hidden" value={val[1]}/>
        })
    }
    
    </>)

}