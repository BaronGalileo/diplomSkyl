import { useSelector } from "react-redux"
import { Checkbox } from "../../CheckBox/Checkbox";
import { useEffect } from "react";
import { Text } from "../../Text/Text";




export const FormChoiceReclamation = ({name, value}) => {

    const role_user = useSelector(state => state.auth.user_role)

    const isReclamation_ids = useSelector(state => state.reclamation.ids)

    const title_name = isReclamation_ids[value].machine.brand


    return(
        <div className="redact-element">  
        {title_name&&role_user!=="client"&&
            <Checkbox className="check-reclamation" value={value} name={name}>{title_name}</Checkbox>
        }
        {role_user === "client"&&
        <Text className="dark-color">{title_name}</Text>}
        </div>
    )
}

