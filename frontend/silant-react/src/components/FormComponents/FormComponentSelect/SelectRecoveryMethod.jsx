import { useEffect, useState } from "react";
import { SelectBox } from "../../SelectBox/SelectBox"
import axios from "axios";
import { useSelector } from "react-redux";
import { select_data } from "../../../helpers/selectData";


export const SelectRecoveryMethod = ({value, message, name}) => {

    const isAuth = useSelector(state => state.auth)

    const[recoveryMetod, setRecoveryMetod] = useState(null)

    const path = "http://127.0.0.1:8000/api/service/v1/recoverymethod/"

    useEffect(() => {
        axios.get(path, isAuth.confermAut)
        .then(res => {
            const data_select = select_data(res.data)
            setRecoveryMetod(data_select)
        })
    }, [])


    return(
        <>
        {recoveryMetod&&
        <SelectBox options={recoveryMetod} message={message} name={name} >{value}</SelectBox>}

        </>
    )
}