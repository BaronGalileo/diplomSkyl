import React, { useEffect } from "react";
import classNames from "classnames";
import "./styles.css"
import {  useFormContext } from "react-hook-form";
import { Text } from "../Text/Text";




function Checkbox({name, className="", type="checkbox", message, children, ...restProps}) {


    useEffect(() =>{
      })
    const {
        register,
        formState: {errors}
    } = useFormContext()

    const classes = classNames(
        'checkbox-element',
        className,
    )


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
                className={classes}/>
            <Text className="left dark-color">{children}</Text>
        </label>
    )
}
export {Checkbox}

