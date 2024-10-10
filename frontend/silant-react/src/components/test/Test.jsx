import React from 'react';
import { Button } from '../Button/Button';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../store/authSlice"



function Test() {

    const isAuth = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const path = 'http://127.0.0.1:8000/auth/token/login/'

    const data = {
        username : 'manager',
        password : 'manager1qwerty'

    }

    function click() {
        axios.post(path, data)
        .then(res => {
            debugger
            console.log(res.data.auth_token)
            const account = {
                username: data.username,
                token: res.data.auth_token,
                confermAut : { headers: {"Authorization" : `Token ${res.data.auth_token}`}},               
                ...res.data}
            dispatch(setAuth(account))
    })}


    function click_after() {
        console.log(isAuth)
    }





    return(
        <div className='test'>
            <Button onClick={click}>Жмых</Button>
            <Button onClick={click_after}>Потом Жмых</Button>
        Test1
        </div>
    )
}

export {Test}