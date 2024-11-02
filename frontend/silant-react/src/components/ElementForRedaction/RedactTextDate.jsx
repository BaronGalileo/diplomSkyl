import React, { useEffect, useState } from "react"
import { Text } from "../Text/Text"
import classNames from 'classnames'
import { Input } from "../Input/Input"
import "./styles.css"
import { Button } from "../Button/Button"
import { useFormContext } from "react-hook-form"



export const RedactTextDate = ({type="text", value, field_name=''}) => {

    const classes = classNames(
        "redact-element",
        field_name,

    )

    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useFormContext()


    const[updated_value, setUpdated_value] = useState(value)

    const[touch, setЕouch] = useState(false)

  

    return(
        <>
        <form >
        <div className={classes}>
            <Text className="dark-color">{updated_value}</Text>

            <Input  onChange={({target}) => {setUpdated_value(target.value)
                setЕouch(true)
            }} type={type} name={field_name}/>
            {touch&&<Button>Редактировать</Button>}
        </div>

        </form>
        </>
    )
}