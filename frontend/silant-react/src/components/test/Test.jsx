import React from 'react';
import { Button } from '../Button/Button';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setAuth, removeAuth } from "../../store/authSlice"
import './index.css'
import { Input } from '../Input/Input';
import {  useFormContext } from "react-hook-form";


function Test() {

    const {
        handleSubmit,
        reset,
        formState: {isValid}
    } = useFormContext()

    const isAuth = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const path = 'http://127.0.0.1:8000/auth/token/login/'

    const path2 = 'http://127.0.0.1:8000/api/v1/carmodel/'

    const data = {
        username : 'manager',
        password : 'manager1qwerty'

    }

    const data2 = {
        name : 'Test Обрил',
        specification : 'Какой-то текст. Для тестирования!'

    }

    function click() {
        axios.post(path, data)
        .then(res => {
            console.log(res.data.auth_token)
            const account = {
                username: data.username,
                token: res.data.auth_token,
                confermAut : {headers: {"Authorization" : `Token ${res.data.auth_token}`}},               
                ...res.data}
            dispatch(setAuth(account))
    })}


    function click_after() {
        console.log(isAuth)
    }

    function logu() {
        dispatch(removeAuth())
    //     console.log("path2, data2, isAuth.confermAut", path2, data2, isAuth.confermAut)
    //     axios.post(path2, data2, isAuth.confermAut)
    //     .then(res => {
    //         console.log("logu", res.data)
            
    // })
        }

    const onSubmit = (data) => {
        console.log(data)
        // axios.post(path, data)
        // .then(res => {
        //     const account = {
        //         login: data.login,
        //         confermAut : { headers: {"Authorization" : `Bearer ${res.data.accessToken}`}},               
        //         ...res.data}
        //     dispatch(setAuth(account))
        
        // })
        // .catch(err => {
        //     if(err.request.status === 401){
        //         alert("Вы ошиблись! Проверьте Логин и Пароль");
        //         reset()
        //     }
        //     else if(err.request.status >= 500) {
        //         alert("Извените, проблема с сервером, попробуйте зайти позже!");
        //         reset()
        //     }

        // })
    }

    function err(errors) {
        console.log(errors)
    }





    return(
        <div className='test'>
            <Button onClick={click}>Жмых</Button>
            <Button onClick={click_after}>Потом Жмых</Button>
            <Button onClick={logu}>Выйти</Button>
            <Button disabled>Disable</Button>
            <Button>Ghjaq</Button>
            <form onSubmit={handleSubmit(onSubmit, err)}>
                <Input name="test.login" >Логин или номер телефона:</Input>
                <Input name="password" type="password" message="Обязательно заполнить!">Пароль:</Input>
                <Button>Войти</Button>
            </form>
        
            <div className='col1'>привет</div>
            <div className='col2'>привет</div>
            <div className='col3'>привет</div>
            <div className='col1'>привет</div>
            <div className='col2'>привет</div>
            <div className='col3'>привет</div>
            <div className='col1'>привет</div>
            <div className='col2'>привет</div>
            <div className='col3'>привет</div>
            <div className='col1'>привет</div>
            <div className='col2'>привет</div>
            <div className='col3'>привет</div>
            <div className='col1'>привет</div>
            <div className='col2'>привет</div>
            <div className='col3'>привет</div>
        </div>
    )
}

export {Test}