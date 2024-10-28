import { useEffect, useState } from "react"
import { Text } from "../../Text/Text"


export const FormTextOrСhange = ({value}) => {

    const[change, setChange] = useState(false)


    useEffect(() => {
        
        const elemTargets = document.querySelectorAll(".target-text")
        // elemTarget.addEventListener("click" ,(e) => {
        //     console.log("жмяк", elemTarget)
        // })
        console.log("elem", elemTargets)


    })



    return(
        <Text className="dark-color target-text">{value}</Text>
    )
}