import React, { useState } from "react"
import { FindMachine } from "../../components/FindMachine/FindMachine"
import { ResultFind } from "../../components/ResultFind/ResultFind"
import { useDispatch, useSelector } from "react-redux";
import { MainPanel } from "../../components/MainPanel/MainPanel";
import { Button } from "../../components/Button/Button";
import { removeMachines } from "../../store/machinesSlice";


function Home() {

    const isAuth = useSelector(state => state.auth)

    const target = useSelector(state => state.targetmachine)

    const[timeData, setTimeData] = useState(null) 

    const isReclamation = useSelector(state => state.reclamation)

    const isMashines = useSelector(state => state.machines)

    const isServices = useSelector(state => state.services)

    const dispatch = useDispatch()



    function show() {
        const timeNew = new Date()
        const time = timeNew.getTime() + 3600000
        const time2 = timeNew.getTime()
        const timeApp = new Date(time).toLocaleString()
        const timeApp2 = new Date(time2).toLocaleString()
        setTimeData(timeNew)
        console.log("targetmachine", target)
        console.log("isReclamation", isReclamation)
        console.log("isMashines", isMashines.machines_data)
        console.log("isServices", isServices)
        console.log("const isAuth = useSelector(state => state.auth)" , isAuth.expire )
        console.log("Time +1000",time2 < isAuth.expire)
        // Object.entries(machines).map(key => {
        //     console.log(key)
        // })
    }

    function delite() {
        dispatch(removeMachines())
    }

    return(
        <div>
            <Button onClick={show}>Показать</Button>
            <Button onClick={delite}>Убрать</Button>
            {!isAuth.isAuth &&
            <>
            <FindMachine/>
            <ResultFind/>
            </>}
            {isAuth.isAuth &&
            <MainPanel/>}

        </div>
    )
}

export {Home}