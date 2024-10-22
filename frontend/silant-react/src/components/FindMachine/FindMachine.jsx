import React from "react";
import { Input } from "../Input/Input"
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";
import {  useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import './styles.css'
import { setOne_machine } from "../../store/oneMachineSlice";


function FindMachine() {

    const {
        handleSubmit,
        reset,
        formState: {isValid}
    } = useFormContext()

    const dispatch = useDispatch();

    const targetMachine = useSelector(state => state.one_machine)

    const isAuth = useSelector(state => state.auth)

    const path = "http://127.0.0.1:8000/api/v1/machine/"

    function onSubmit(data){
        reset()
        axios.get(path + data.serial_num, isAuth.confermAut).then(res => {
            console.log(res.data)
            const my_machine = {
                brand: res.data.brand,
                serial_num:  res.data.serial_num,
                car_model: res.data.car_model.name,
                engine_model:  res.data.engine_model.name,
                engine_num: res.data.engine_num,
                transmission_model:  res.data.transmission_model.name,
                transmission_num: res.data.transmission_num,
                driving_axle_model:  res.data.driving_axle_model.name,
                driving_axle_num:  res.data.driving_axle_num,
                model_of_a_controlled_bridge: res.data.model_of_a_controlled_bridge.name,
                num_of_a_controlled_bridge: res.data.num_of_a_controlled_bridge,
            }
                console.log("machine", my_machine)
                dispatch(setOne_machine(my_machine))
        }).catch(err => {
            if(err.status === 404)
                alert("К сожалению машины с таким серийным номером не удалось найти")
                reset()

        })
    }

    return(
        <>
        <Text as="h2">Проверте комплектацию и технические характеристики техники Силант</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-serialNum">
                <Input name="serial_num" message="введите серийный номер машины">введите серийный номер</Input>
                <Button className="input-btn">Найти машину</Button>
            </div>
        </form>
        </>
    )
}
export { FindMachine }