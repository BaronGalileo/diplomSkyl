import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Img } from '../Img/Img';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { useLocation } from "react-router-dom";
import { removeAuth } from "../../store/authSlice"
import axios from 'axios';
import './styles.css'
import { removeMachine } from '../../store/machineSlice';


function Header() {

    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.auth)

    const loca = useLocation()

    const isLogin = loca.pathname === '/login'

    function logout() {
        dispatch(removeAuth())
        dispatch(removeMachine())
        }
    
    const pach_user = "http://127.0.0.1:8000/api/v1/auth/users/me/"

    function show() {
        console.log(isAuth)
        axios.get(pach_user, isAuth.confermAut)
        .then(resol => {
            console.log(resol.data.id)
        })
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
                    
                </div>
                <Text as='h1'>Электронная сервисная книжка "Мой Силант"</Text>
                <Button onClick={show}>Жмых</Button>
            </div>

        </div>
    )
}
export {Header}