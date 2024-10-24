import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Img } from '../Img/Img';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { useLocation } from "react-router-dom";
import { removeAuth } from "../../store/authSlice"
import { removeMachines } from '../../store/machinesSlice';
import { removeOne_machine } from '../../store/oneMachineSlice';
import './styles.css';
import { removeTargetmachine } from '../../store/targetmachineSlice';
import { removeReclamation } from '../../store/reclamationSlice';
import { removeServices } from '../../store/servicesSlice';



function Header() {

    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.auth)
    const mach = useSelector(state => state.one_machine)

    const loca = useLocation()

    const isLogin = loca.pathname === '/login'

    function logout() {
        dispatch(removeAuth())
        dispatch(removeOne_machine())
        dispatch(removeMachines())
        dispatch(removeServices())
        dispatch(removeTargetmachine())
        dispatch(removeReclamation())
        }

    function del() {
        dispatch(removeOne_machine())
    }

    function sh() {
        console.log(mach)
    }



    return(
        <div>
            <div className='header-wrapper'>
                <div className='header-cap'>
                    <Img className='logo-header' src='./images/Logotype RGB 2.png' alt="logo image"></Img>
                    <Button href="#">+7 -8352-20-12-09, telegram</Button>
                    {isLogin &&
                    <Button href="/">Назад</Button>}
                    {isAuth.isAuth &&
                    <Button onClick={logout}>выход</Button>}
                    {!isLogin && !isAuth.isAuth &&
                    <Button href="login">авторизация</Button>}
                    <Button onClick={del}>Очистить машину</Button>
                    <Button onClick={sh}>Показ маашины</Button>
                    
                </div>
                <Text as='h1'>Электронная сервисная книжка "Мой Силант"</Text>
            </div>

        </div>
    )
}
export {Header}