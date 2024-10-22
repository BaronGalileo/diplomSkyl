import React from "react"
import { FindMachine } from "../../components/FindMachine/FindMachine"
import { ResultFind } from "../../components/ResultFind/ResultFind"
import { useDispatch, useSelector } from "react-redux";
import { MainPanel } from "../../components/MainPanel/MainPanel";
import { Button } from "../../components/Button/Button";
import { removeMachines } from "../../store/machinesSlice";


function Home() {

    const isAuth = useSelector(state => state.auth)

    const machines = useSelector(state => state.machines)

    const dispatch = useDispatch()

    function show() {
        console.log("Machine", machines)
        console.log("Machine", machines["23131"])
        Object.entries(machines).map(key => {
            console.log(key)
        })
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