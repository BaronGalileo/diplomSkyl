import { useSelector } from "react-redux"
import { Text } from "../../Text/Text"
import { useFormContext } from "react-hook-form";


export const FormChoiceMachine = ({children}) => {

    const {
        register
    } = useFormContext()

    const isMachines = useSelector(state => state.machines)

    const target = useSelector(state => state.targetmachine)

    const machine = isMachines.sorted_serian_num[target.target][0]

    return(
        <>
        <input {...register(`machine`)} type="hidden" value={machine.id}/>
        {machine&&
        <Text className="dark-color">{machine.brand}</Text>}
        </>
    )
}