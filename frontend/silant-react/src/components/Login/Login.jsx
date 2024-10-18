import React from "react";
import { Button } from "../Button/Button";
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../store/authSlice"
import { Input } from "../Input/Input";
import {  useFormContext } from "react-hook-form";
import { removeMachine } from "../../store/machineSlice";



function Login() {

    const {
        handleSubmit,
        reset,
        formState: {isValid}
    } = useFormContext()

    const isAuth = useSelector(state => state.auth)    

    const dispatch = useDispatch();

    const path = "http://127.0.0.1:8000/auth/token/login/"

    const pach_user = "http://127.0.0.1:8000/api/v1/auth/users/me/"

    const pach_id_user = "http://127.0.0.1:8000/api/v1/auth/users/me/"
    


    const onSubmit = (data) => {
        dispatch(removeMachine())
        axios.post(path, data)
        .then(res => {
            const account = {
                username: data.username,
                token: res.data.auth_token,
                confermAut : {headers: {"Authorization" : `Token ${res.data.auth_token}`}},               
                ...res.data}
            dispatch(setAuth(account))
        
        })
        .catch(err => {
            console.log(err.request.status)
            if(err.request.status === 401){
                alert("Вы ошиблись! Проверьте Логин и Пароль");
                reset()
            }
            else if(err.request.status >= 500) {
                alert("Извените, проблема с сервером, попробуйте зайти позже!");
                reset()
            }

        })
    }

    function click() {
        console.log(isAuth)
    }

    if(isAuth.isAuth) return <Navigate to="/"/>
    

    return (
        <>
        <div className="conteyner_form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="username" message="Обязательно заполнить!">Логин:</Input>
                <Input name="password" type="password" message="Обязательно заполнить!">Пароль:</Input>
                <Button className="btn_login" disabled={!isValid}>Войти</Button>
            </form>
            <Button onClick={click}>Проверка</Button>
        </div>
        </>
    )
}
export {Login}