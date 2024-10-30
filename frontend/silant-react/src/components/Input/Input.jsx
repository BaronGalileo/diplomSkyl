import React, { useEffect, useState } from "react";
import './styles.css'
import { Text } from "../Text/Text";
import {  useFormContext } from "react-hook-form"
import { findKey } from "../../helpers/findKey";


function Input({name, message, valueAsNumber, children, ...restProps}) {


    const {
        register,
        formState: {errors}
    } = useFormContext()




   
    //для имени с глубиной вложености
    const errorName =(errors, name) => {
        const nameError = name.split('.')
        const result = findKey(errors, nameError)
        return result

    }    

    const error = errorName(errors, name)?.message;



    return (
        <label className="input-wrapper">
            <Text className="left">{children}</Text>
            <span>{error}</span>
            <input
            {...register(name, {
                required: message? `${message}`: false,
                valueAsNumber: valueAsNumber? `${valueAsNumber}` : false
            })}
            {...restProps}
            className={(error ? "error " : "") +"input-element"}         
            />
        </label>
    )
}

export {Input}