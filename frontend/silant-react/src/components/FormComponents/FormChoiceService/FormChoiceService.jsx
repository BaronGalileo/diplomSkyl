import { useSelector } from "react-redux"
import { Checkbox } from "../../CheckBox/Checkbox";
import { Text } from "../../Text/Text";




export const FormChoiceService = ({name, value}) => {

    const isService_ids = useSelector(state => state.services.ids)

    const title_name = isService_ids[value].machine.brand

    return(
        <div className="redact-element">  
        {title_name&&
            <Checkbox className="check-service" value={value} name={name}>{title_name}</Checkbox>
        }
        </div>
    )
}