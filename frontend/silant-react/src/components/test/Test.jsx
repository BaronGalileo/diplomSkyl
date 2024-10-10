import React from 'react';
import { Button } from '../Button/Button';
import axios from 'axios';


function Test() {

    const path = 'http://127.0.0.1:8000/auth/token/login/'

    const data = {
        username : 'manager',
        password : 'manager1qwerty'

    }

    function click() {
        axios.post(path, data)
        .then(res => {
            console.log(res.data)
    })
    }




    return(
        <div className='test'>
            <Button onClick={click}>Жмых</Button>
        Test1
        </div>
    )
}

export {Test}