import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";


export const RedactionText = ({name, children, ...restProps}) => {

    const classes = classNames(
        'txt',
    )

    const[values, setValues] =  useState("")

    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useFormContext()

    const error = errors[name]?.message

    const onSubmitPost = (data) => {
        console.log("DATA".data)
    }


    return(
        <form onSubmit={handleSubmit(onSubmitPost)}>
            <label className="input-wrapper">
                <Text className={classes}>{children}</Text>
                <input {...register(name, {
                // required: message? `${message}`: false,
                // valueAsNumber: valueAsNumber? `${valueAsNumber}` : false
                })}
            
            
                {...restProps}
                className={(error ? "error " : "") +"input-element"} value={values} onChange={({target}) => setValues(target.value)} type='text'/>
            {values&&<Button>Редактировать</Button>}

            </label>
        </form>

    )

}