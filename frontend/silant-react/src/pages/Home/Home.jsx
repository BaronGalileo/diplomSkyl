import React from "react"
import { FindMachine } from "../../components/FindMachine/FindMachine"
import { ResultFind } from "../../components/ResultFind/ResultFind"
import { useDispatch, useSelector } from "react-redux";
import { MainPanel } from "../../components/MainPanel/MainPanel";
import { Button } from "../../components/Button/Button";
import { removeMachine } from "../../store/machineSlice";


function Home() {

    const isAuth = useSelector(state => state.auth)

    const machine = useSelector(state => state.machine)

    const dispatch = useDispatch()

    function show() {
        console.log("Machine", machine)

    }

    function delite() {
        dispatch(removeMachine())
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