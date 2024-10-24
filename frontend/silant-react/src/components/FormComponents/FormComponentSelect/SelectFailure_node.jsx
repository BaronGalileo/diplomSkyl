import { useEffect, useState } from "react";
import { SelectBox } from "../../SelectBox/SelectBox"
import axios from "axios";
import { useSelector } from "react-redux";


export const SelectFailureNode = ({value, message, name}) => {

    const isAuth = useSelector(state => state.auth)

    const[failureNode, setFailureNode] = useState(null)

    const path = "http://127.0.0.1:8000/api/service/v1/failurenode/"

    useEffect(() => {
        axios.get(path, isAuth.confermAut)
        .then(res => {
            const data_select =[]
            res.data.map(val => {
                const key_value = {value: val.id, text: val.name}
                return data_select.push(key_value)
            })
            setFailureNode(data_select)
        })
    }, [])


    return(
        <>
        {failureNode&&
        <SelectBox options={failureNode} message={message} name={name} placeholder={"-----"}>{value}</SelectBox>}

        </>
    )
}