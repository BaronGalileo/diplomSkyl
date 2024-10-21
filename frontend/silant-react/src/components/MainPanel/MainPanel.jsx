import React from "react";
import { Text } from "../Text/Text";
import "./styles.css"
import { useSelector } from "react-redux";


function MainPanel() {

    const isAuth = useSelector(state => state.auth)

    const DICT_ROLE = {
        "client": "Клиент",
        "manager": "Менеджер",
        "serviseorg": "Сервисная компания"
    }


    return(
        <div className="main-panel-wrapper">
        {isAuth &&
        <div className="main-panel-element">
            <Text className="left" as="h2">{DICT_ROLE[isAuth.user_role]} / {isAuth.name},  добро пожаловать!</Text>
        </div>}
            <Text as="h3">Информация о комплектации и технических характеристиках Вашей техники</Text>
        </div>
    )
}
export { MainPanel }