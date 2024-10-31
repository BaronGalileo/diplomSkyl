import React, { useEffect, useState } from "react";
import { Text } from "../../components/Text/Text";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import './styles.css'
import { Img } from "../../components/Img/Img";
import { Button } from "../../components/Button/Button";
import { useFormContext } from "react-hook-form";
import { RedactTextDate } from "../../components/ElementForRedaction/RedactTextDate";


export const MachinePage = () => {

    const {
        handleSubmit,
        register,
        formState: {isValid},
        reset,
    
      } = useFormContext()

    const isAuth = useSelector(state => state.auth)

    const manager = Boolean(isAuth.user_role !== 'client' || isAuth.user_role !== 'serviseorg')

    const my_machine = useSelector(state => state.one_machine)

    const data_machines = useSelector(state => state.machines.sorted_serian_num)

    const[machineObj, setMachineObj] = useState(null) 

    useEffect(() => {

        if(my_machine&&data_machines){
            setMachineObj(data_machines[my_machine.serial_num][0])
        }

    }, [data_machines, my_machine])

    const navigate = useNavigate();

    const goBack = () => navigate(-1)

    const[flag, setFlag] = useState(false)

    const onSubmit = (data) => {
        console.log("Data", data)
    }

    const  errorsSubmit = (data) => {
        console.log("ERRORsubmit", data)
    }

    if(!isAuth.isAuth) return <Navigate to="/"/>

    if(!machineObj) return <></>


    return(
        
        
            <div className="templates-wraper">
            <div>
                <div className="templates-element">
                    <Text className="dark-color" as='h1'>Бренд : {machineObj.brand}</Text>
                    <Text className="dark-color" as='h1'>Серийный номер : {machineObj.serial_num}</Text>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/logo-machine.png"/>
                    <Text className="dark-color" as='h2'>Модель: {machineObj.car_model.name}</Text>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Описание модели</Text>
                        <Text className="dark-color">{machineObj.car_model.specification}</Text>
                    </div>
                    <div>
                        {flag&&<Button href={`http://localhost:3000/carmodel/${machineObj.car_model.id}`} className="red">Редактировать модель</Button>}
                    </div>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/client.png"/>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Хозяин техники :</Text>
                        <Text className="dark-color" as='h3'>{machineObj.client.name}</Text>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Грузополучатель</Text>
                        <Text className="dark-color" as='h3'>{machineObj.consignee}</Text>
                    </div>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/date_of-factore.png"/>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Дата отгрузки с завода</Text>
                        <Text className="dark-color" as='h3'>{machineObj.date_from_the_factory}</Text>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Контракт №</Text>
                        <Text className="dark-color" as='h3'>{machineObj.contractNo}</Text>
                    </div>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/adres.png"/>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Адрес поставки (эксплуатации)</Text>
                        <Text className="dark-color" as='h3'>{machineObj.delivery_address}</Text>
                    </div>
                    <Img className='logo-header' src="../images/servis.png"/>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Сервисная компания</Text>
                        <Text className="dark-color" as='h3'>{machineObj.service_company.name}</Text>
                    </div>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/most-drive.png"/>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Модель ведущего моста</Text>
                        <Text className="dark-color" as='h3'>{machineObj.driving_axle_model.name}</Text>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Зав.№ ведущего моста</Text>
                        <Text className="dark-color" >{machineObj.driving_axle_num}</Text>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Описание модели</Text>
                        <Text className="dark-color" >{machineObj.driving_axle_model.specification}</Text>
                    </div>
                    <div>
                        {flag&&<Button href={`http://localhost:3000/drivingaxlemodel/${machineObj.driving_axle_model.id}`} className="red">Редактировать модель</Button>}
                    </div>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/engine.png"/>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Модель двигателя</Text>
                        <Text className="dark-color" as='h3'>{machineObj.engine_model.name}</Text>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Зав.№ двигателя</Text>
                        <Text className="dark-color" >{machineObj.engine_num}</Text>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Описание модели</Text>
                        <Text className="dark-color" >{machineObj.engine_model.specification}</Text>
                    </div>
                    <div>
                        {flag&&<Button href={`http://localhost:3000/enginemodel/${machineObj.engine_model.id}`} className="red">Редактировать модель</Button>}
                    </div>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/control-drive.png"/>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Модель управляемого моста</Text>
                        <Text className="dark-color" as='h3'>{machineObj.model_of_a_controlled_bridge.name}</Text>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Зав.№ управляемого моста</Text>
                        <Text className="dark-color" >{machineObj.num_of_a_controlled_bridge}</Text>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Описание модели</Text>
                        <Text className="dark-color" >{machineObj.model_of_a_controlled_bridge.specification}</Text>
                    </div>
                    <div>
                        {flag&&<Button href={`http://localhost:3000/modelofacontrolledbridge/${machineObj.model_of_a_controlled_bridge.id}`} className="red">Редактировать модель</Button>}
                    </div>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/transmish.png"/>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Модель трансмиссии</Text>
                        <Text className="dark-color" as='h3'>{machineObj.transmission_model.name}</Text>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Зав.№ трансмиссии</Text>
                        <Text className="dark-color" >{machineObj.transmission_num                        }</Text>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Описание модели</Text>
                        <Text className="dark-color" >{machineObj.transmission_model.specification}</Text>
                    </div>
                    <div>
                        {flag&&<Button href={`http://localhost:3000/transmissionmodel/${machineObj.transmission_model.id}`} className="red">Редактировать модель</Button>}
                    </div>
                </div>
            </div>
            {manager&&
            <form className='templates-wraper-redact' onSubmit={handleSubmit(onSubmit, errorsSubmit)}>
                {flag&&
                <div>
                    <div className="templates-element">
                        <input {...register(`serial_num`)} type="hidden" value={my_machine.serial_num} />
                        <RedactTextDate field_name="brand" value={my_machine.brand}/>
                    </div>
                    <div className="templates-element">
                        <RedactTextDate field_name="engine_num" value={my_machine.engine_num}/>
                    </div> 
                </div> 

                }
                <div>
                <Button className="red" onClick={() => {setFlag(res=>!res)}}>{!flag?"Редактировать": "Отправить"}</Button>
                </div>
            </form>}
            {flag&&
            <div>
                <Button onClick={() => {
                    reset()
                    setFlag(res=>!res)
            }}>Не редактировать</Button>
            </div>}
            <div>
                <Button onClick={goBack}>Назад вернуться</Button>
            </div>
        </div>
    )
}