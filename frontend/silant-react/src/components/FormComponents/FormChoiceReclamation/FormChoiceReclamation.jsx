import { useSelector } from "react-redux"
import { Checkbox } from "../../CheckBox/Checkbox";
import { useFormContext } from "react-hook-form";



export const FormChoiceReclamation = ({name}) => {

    const {
        register
    } = useFormContext()

    // const isMachines = useSelector(state => state.machines.sorted_serian_num)

    // const target = useSelector(state => state.targetmachine.target)

    // const machine_obj = isMachines[target][0]


    // useEffect(() => {
    //     const data = {machine_obj:machine_obj}
    //     dispatch(setMachine_obj(data))

    // }, [])


    return(
        <>
        {/* <input {...register(`id`)} type="hidden" value={id}/> */}
            
            <Checkbox type="checkbox"  name={name}>Редактировать</Checkbox>
        </>
    )
}

