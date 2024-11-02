import React from "react";
import classNames from "classnames";
import './styles.css'
import { Text } from "../Text/Text";
import {  useFormContext } from "react-hook-form"



function Input({name, classText,  message, valueAsNumber, children, ...restProps}) {

    const classes = classNames(
        'txt',
        classText
    )

    const {
        register,
        formState: {errors}
    } = useFormContext()


    const error = errors[name]?.message


    return (
        <label className="input-wrapper">
            <Text className={classes}>{children}</Text>
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