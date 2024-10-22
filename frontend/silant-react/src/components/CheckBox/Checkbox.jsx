import React, { useEffect } from "react";
import "./styles.css"
import {  useFormContext } from "react-hook-form";
import { Text } from "../Text/Text";




function Checkbox({name, message, children, ...restProps}) {


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
                type="checkbox"
                className="checkbox-element"/>
            <Text className="left dark-color">{children}</Text>
        </label>
    )
}
export {Checkbox}

// import React from "react";

// export const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
//     const defaultRef = React.useRef()
//     const resolvedRef = ref || defaultRef

//     React.useEffect(() => {
//         resolvedRef.current.indeterminate = indeterminate
//     }, [resolvedRef, indeterminate])

//     return (
//         <>
//         <input type="checkbox" ref={resolvedRef} {...rest}/>
//         </>
//     )
// })