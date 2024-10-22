import React, { useEffect } from "react";
import "./styles.css"
import {  useFormContext } from "react-hook-form";
import { Text } from "../Text/Text";




function Checkbox({name, type, message, children, ...restProps}) {


    useEffect(() =>{
      })
    const {
        register,
        formState: {errors}
    } = useFormContext()


    const error = errors.name?.message;

    return (
        <label className="checkbox-wrapper">
            <span>{error}</span>
            <input
                {...restProps}
                {...register(name, {
                    required: message? `${message}`: false,
                })}
                type={type}
                defaultChecked={false} 
                className="checkbox-element"/>
            <Text className="left dark-color">{children}</Text>
        </label>
    )
}
export {Checkbox}

