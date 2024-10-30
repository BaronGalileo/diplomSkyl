import React from "react";
import { useFormContext } from "react-hook-form";
import { Text } from "../../Text/Text";

export const IDInsible = ({value, name}) => {

    const {
        register
    } = useFormContext()

    return(
        <>
        <Text className="dark-color">Значение ID {value}, менять нельзя</Text>
            <input {...register(`${name}`)} type="hidden" value={value} />
        </>
        )
}