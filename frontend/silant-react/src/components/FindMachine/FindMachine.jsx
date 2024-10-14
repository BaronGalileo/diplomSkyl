import React from "react";
import { Input } from "../Input/Input"
import { Button } from "../Button/Button";
import {  useFormContext } from "react-hook-form";
import axios from 'axios';


function FindMachine() {

    const {
        handleSubmit,
        reset,
        formState: {isValid}
    } = useFormContext()

    const path = "http://127.0.0.1:8000/api/v1/machine/"

    function onSubmit(data){

        axios.get(path + data.serial_num).then(res =>{
            console.log(res.data)
        }).catch(err => {
            if(err.status === 404)
                alert("К сожалению машины с таким серийным номером не удалось найти")
                reset()

        })
    }

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="serial_num">введите серийный номер</Input>
            <Button>Жмых</Button>
        </form>

        </>
    )
}
export { FindMachine }