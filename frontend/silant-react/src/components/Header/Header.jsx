import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Img } from '../Img/Img';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { useLocation } from "react-router-dom";
import { removeAuth } from "../../store/authSlice"
import './styles.css'


function Header() {

    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.auth)

    const loca = useLocation()

    const isLogin = loca.pathname == '/login'

    function logout() {
        dispatch(removeAuth())
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
            </div>

        </div>
    )
}
export {Header}