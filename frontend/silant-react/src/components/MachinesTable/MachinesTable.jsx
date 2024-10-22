import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormContext } from "react-hook-form"
import { StickyTable } from "../Tables/StickyTable";
import { columnsFullMachine } from "../Tables/ColomnsTables/columnsFullMachine";
import { Button } from "../Button/Button";
import { setMachines } from "../../store/machinesSlice";
import axios from "axios";



export const MachinesTable = () => {


    const isMashines = useSelector(state => state.machines)

    // const dispatch  = useDispatch()

    const isAuth = useSelector(state => state.auth)

    // const[macinesTable, setMacinesTable] = useState(true)

    // const[servicesTable, setServicesTable] = useState(false)

    // const[reclamationTable, setReclamationTable] = useState(false)

    // const[isTargetMachine, setIsTargetMachine] = useState(false)

    // const {
    //     handleSubmit,
    //     formState: {isValid},
    
    //   } = useFormContext()
    
    // const elementsArray = document.querySelectorAll(".checkbox-element");

    // elementsArray.forEach((elem) => {
    //     elem.addEventListener("change", () => {

    //     });
    // })
    
    // useEffect(() => {
    //     let count_checkbox = 0
    //     const elementsArray = document.querySelectorAll(".checkbox-element");
    //     elementsArray.forEach((elem) => {
    //         console.log('arrr', elem)
    //     elem.addEventListener("change", (e) => {
    //         if(e.target.checked){
    //             count_checkbox ++
    //             setIsTargetMachine(true)
    //         }
    //         else {
    //             count_checkbox --
    //             if(count_checkbox === 0){
    //                 setIsTargetMachine(false)
    //             }
    //         }
    //         console.log("мена", e.target.checked)
    //     });
    // });



    // }, [])

    // const path_service = "http://127.0.0.1:8000/api/service/v1/service/"

    // const path_reclamation = "http://127.0.0.1:8000/api/service/v1/reclamation/"


    // function addDataService() {
    //     axios.get(path_service, isAuth.confermAut).then(res => {
    //         console.log(res.data)
    //       })
    // }

    // function addDataReclamations() {
    //     axios.get(path_reclamation, isAuth.confermAut).then(res => {
    //         console.log(res.data)
    //       })
    // }

    // function change(e) {
    //     if(e.target.className === "btn all-info"){
    //         setMacinesTable(res => true)
    //         setServicesTable(res => false)
    //         setReclamationTable(res => false)
    //     }
    //     else if(e.target.className === "btn TO"){
    //         addDataService()
    //         setMacinesTable(res => false)
    //         setServicesTable(res => true)
    //         setReclamationTable(res => false)
    //     }
    //     else if(e.target.className === "btn reclam"){
    //         addDataReclamations()
    //         setMacinesTable(res => false)
    //         setServicesTable(res => false)
    //         setReclamationTable(res => true)
    //     }
    //     const btns = document.querySelectorAll("button");
    //     for (let i = 0; i < btns.length; i++) {
    //         btns[i].classList.remove("active");
    //       }
        
    //     return e.currentTarget.classList.add("active")
    // }

    // const onSubmit = (data) => {

    //     console.log("DATA", data)

        // axios.post(path, data, isAuth.confermAut).then(res => {
        //   if(res.data.items.length > 0 ) {
        //     dispatch(setResult(res.data));        
    
        //     axios.post(pathHistograms, data, isAuth.confermAut).then(re => {  
        //       let union = unionArray(re.data)
        //       if(union) {
        //         dispatch(setHistograms(union));
        //         setChangePage(true)
        //       }
        //       else alert("К сожалению не нашли ничего.Попробуйте больший отрезок времени.")
    
        //     })
        //     .catch(err => {
        //       alert("Извените, что-то пошло не так!")})
    
        //   } 
        //   else {
        //     dispatch(removeResult())
        //     dispatch(removeHistograms())
        //     alert("К сожалению ниего не удалось найти. Попробуйте фильтр поменять, тональность или проверьте ИНН")
        //   }
        // }
          
        //   )
        // }


    return(
        <>
        <div className="machinesTable-element">
            {isMashines[0]&&
            <StickyTable dataTable={isMashines} columnsTable={columnsFullMachine}/>}
            {/* <form onSubmit={handleSubmit(onSubmit, errorSubmit)}>
                <Button className="all-info"onClick={change} active>Общая информация</Button>
                <Button className="TO" onClick={change} disabled={!isTargetMachine}>Техническое обслуживание</Button>
                <Button className="reclam" onClick={change} disabled={!isTargetMachine}>Рекламация</Button>
                {isMashines[0]&&
                <StickyTable dataTable={isMashines} columnsTable={columnsFullMachine}/>}
            </form> */}
        </div>
        </>
    )
}