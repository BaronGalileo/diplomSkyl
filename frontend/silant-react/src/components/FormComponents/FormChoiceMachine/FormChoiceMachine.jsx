import { useSelector } from "react-redux"
import { Text } from "../../Text/Text"
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMachine_obj } from "../../../store/machinesSlice";


export const FormChoiceMachine = () => {

    debugger

    const {
        register
    } = useFormContext()

    const isMachines = useSelector(state => state.machines.sorted_serian_num)

    const target = useSelector(state => state.targetmachine.target)

    const machine_obj = isMachines[target][0]

    const dispatch  = useDispatch()

    useEffect(() => {
        const data = {machine_obj:machine_obj}
        dispatch(setMachine_obj(data))

    }, [])


    return(
        <>
        <input {...register(`machine`)} type="hidden" value={machine_obj.id}/>
        {machine_obj&&
        <Text className="dark-color">{machine_obj.brand}</Text>}
        </>
    )
}