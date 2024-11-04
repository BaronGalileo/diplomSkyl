import React from "react"
import { FindMachine } from "../../components/FindMachine/FindMachine"
import { ResultFind } from "../../components/ResultFind/ResultFind"
import { useSelector } from "react-redux";
import { MainPanel } from "../../components/MainPanel/MainPanel";



function Home() {

    const isAuth = useSelector(state => state.auth)



    return(
        <div>
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