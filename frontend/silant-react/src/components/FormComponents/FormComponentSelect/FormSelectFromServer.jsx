import { useEffect, useState } from "react";
import { SelectBox } from "../../SelectBox/SelectBox"
import axios from "axios";
import { useSelector } from "react-redux";
import { select_data, select_machine, select_user_data } from "../../../helpers/selectData";


export const FormSelectFromServer = ({path, value, select, placeholder, message, name}) => {

    const isAuth = useSelector(state => state.auth)

    const[options, setOptions] = useState(null)


    useEffect(() => {
        axios.get(path, isAuth.confermAut)
        .then(res => {
            const dict_sekected = {
                "user": select_user_data(res.data),
                'name': select_data(res.data),
                'machine': select_machine(res.data)
            }
            const data_select = dict_sekected[select]
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