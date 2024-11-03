import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { SelectBox } from "../SelectBox/SelectBox";
import { select_machine, select_user_data } from "../../helpers/selectData";


export const SelectForReclama = ({path, machine, name}) => {

    const isAuth = useSelector(state => state.auth)

    const[options, setOptions] = useState(null)

    const path_serv = path

    useEffect(() => {
        axios.get(path_serv, isAuth.confermAut).then(res => {
            const data = machine ? select_machine(res.data) : select_user_data(res.data)
            setOptions(data)
        })
    }, [])


    return(
        <>
        {options&&
            <SelectBox options={options} name={name} message={"Обязательное для заполнения"}></SelectBox>}

        </>

    )
}