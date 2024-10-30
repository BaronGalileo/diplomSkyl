import React from 'react';
import { Img } from '../Img/Img';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import './styles.css'


function Footer() {
    return(
        <div>
            <div className='footer-wrapper'>
                <Img className='logo-header' src='./images/logotip ap.png' alt="logo image"></Img>
                <Text className='text-footer'>+7 -8352-20-12-09, telegram</Text>
                <Text className='text-footer'>Мой Силант 2024г.</Text>
            </div>

        </div>
    )
}
export {Footer}