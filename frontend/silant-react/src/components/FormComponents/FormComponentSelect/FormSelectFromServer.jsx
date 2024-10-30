import { useEffect, useState } from "react";
import { SelectBox } from "../../SelectBox/SelectBox"
import axios from "axios";
import { useSelector } from "react-redux";
import { select_data } from "../../../helpers/selectData";


export const FormSelectFromServer = ({path, value, message, name}) => {

    const isAuth = useSelector(state => state.auth)

    const[options, setOptions] = useState(null)

    const path_serv = path

    useEffect(() => {
        axios.get(path, isAuth.confermAut)
        .then(res => {
            const data_select = select_data(res.data)
            setOptions(data_select)
        })
    }, [])


    return(
        <>
        {options&&
        <SelectBox options={options} message={message} name={name} >{value}</SelectBox>}

        </>
    )
}