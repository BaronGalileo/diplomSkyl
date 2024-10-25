import { useSelector } from "react-redux"
import { Text } from "../../Text/Text"
import { useFormContext } from "react-hook-form";


export const FormChoiceServiceOrg = () => {

    const {
        register
    } = useFormContext()

    const isMachines = useSelector(state => state.machines.sorted_serian_num)

    const target = useSelector(state => state.targetmachine.target)

    const serviceOrg = isMachines[target][0]

    console.log("serviceOrg", serviceOrg)

    return(
        <>
        <input {...register(`service_company`)} type="hidden" value={serviceOrg.service_company.user}/>
        {serviceOrg&&
        <Text className="dark-color bold">{serviceOrg.service_company.name}</Text>}
        </>
    )
}