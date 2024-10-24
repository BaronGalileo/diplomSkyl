import React, { useEffect } from "react";
import "./styles.css"
import { Text } from "../Text/Text";
import {  useFormContext } from "react-hook-form"


export const SelectBox = ({options, name, message, children, placeholder, defaultSelect, ...restProps}) => {


    const {
        register,
        formState: {errors}
    } = useFormContext()

    const error = errors[name]?.message

    return(


    <label className="select-wrapper">
        <Text className="left">{children}</Text>
        <span>{error}</span>
        <select
            {...register(name, {
                required: message? `${message}`: false,
                }
            )}
            className={(error ? "error " : "") +"select-element"}
            {...restProps}>
            <option value="">{placeholder}</option>
            {options.map(index => {
            return(<option key={index.value} value={index.value}>{index.text}</option>)
            })}
        </select>
    </label>    
    )
}

