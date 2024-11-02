import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { select_machine } from "../../helpers/selectData";
import { SelectBox } from "../SelectBox/SelectBox";


export const FindMachines = ({path, value,  placeholder, message, name}) => {

    const isAuth = useSelector(state => state.auth)

    const[options, setOptions] = useState(null)

    const path_serv = path

    useEffect(() => {
        axios.get(path, isAuth.confermAut)
        .then(res => {
            const data_select = select_machine(res.data)
            setOptions(data_select)
        })
    }, [])

    return(
        <>
        {options&&
        <SelectBox options={options} message={message} name={name} placeholder={placeholder} >{value}</SelectBox>}

        </>
    )
}