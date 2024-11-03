import React, { useEffect, useState } from "react";
import { Text } from "../../components/Text/Text";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Img } from "../../components/Img/Img";
import { Button } from "../../components/Button/Button";
import { useFormContext } from "react-hook-form";
import { FormSelectFromServer } from "../../components/FormComponents/FormComponentSelect/FormSelectFromServer";
import { Input } from "../../components/Input/Input";


export const ServPage = () => {

    const { id } = useParams()


    const {
        handleSubmit,
        register,
        reset,   
      } = useFormContext()


    const isAuth = useSelector(state => state.auth)

    const manager = Boolean(isAuth.user_role !== 'client' || isAuth.user_role !== 'serviseorg')

    const my_servise = useSelector(state => state.services.ids[id])

    const navigate = useNavigate();

    const goBack = () => navigate(-1)

    const[flag, setFlag] = useState(false)

    useEffect(() => {

    }, [flag])

    const onSubmit = (data) => {
        console.log("Data", data)
    }

    const  errorsSubmit = (data) => {
        console.log("ERRORsubmit", data)
    }

    if(!isAuth.isAuth) return <Navigate to="/"/>

    if(!my_servise) return <></>


    return(
        
        <div className="templates-wraper">
            <div className="templates-element">
                <div className="templates-element">
                    <Text className="dark-color" as='h1'>Техническое обслуживание</Text>
                </div>
            </div>

            <div className="templates-element">
                <Text className="dark-color" as='h2'>TO от : {my_servise.date_service}</Text>
                <Text className="dark-color" as='h2'>Серийный номер : {my_servise.machine.serial_num}</Text>
            </div>
            <div className="templates-element">
                <Img className='logo-header' src="../images/logo-machine.png"/>
                <Text className="dark-color" as='h2'>Модель: {my_servise.machine.car_model.name}</Text>
            </div>
            <div className="templates-element">
                <Text className="dark-color" as='h3'>дата заказ-наряда</Text>
                <Text className="dark-color" as='h3'>{my_servise.date_order}</Text>
            </div>
            <div className="templates-element">
                <Text className="dark-color" as='h3'>№ заказ-наряда</Text>
                <Text className="dark-color" as='h3'>{my_servise.order_No}</Text>
            </div>
            <div className="templates-element">
                <Text className="dark-color" as='h3'>Сервисная компания</Text>
                <Text className="dark-color" as='h3'>{my_servise.service_company.name}</Text>
            </div>
            <div className="templates-element">
                <Text className="dark-color" as='h3'>наработка, м/час</Text>
                <Text className="dark-color" as='h3'>{my_servise.working_hours}</Text>
            </div>
            <div className="templates-element">
                <Text className="dark-color" as='h3'>Вид ТО :</Text>
                <Text className="dark-color" as='h2'>{my_servise.type_of_service.name}</Text>
            </div>
            <div className="templates-element">
                <Text className="dark-color" as='h3'>Описание</Text>
                <Text className="dark-color" >{my_servise.type_of_service.specification}</Text>
            </div>
            <div>
                <Button onClick={goBack}>Назад вернуться</Button>
            </div>
            
            <form className='templates-wraper-redact' onSubmit={handleSubmit(onSubmit, errorsSubmit)}>
                {flag&&
                <div>
                    <div className="templates-element">
                        <input {...register(`id`)} type="hidden" value={my_servise.id} />
                        <input {...register(`machine`)} type="hidden" value={my_servise.machine.id} />
                        <Text className="dark-color" as='h3'>дата заказ-наряда</Text>
                        <Input type="date" classText="dark-color" name={'date_service'}>{my_servise.date_order}</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>№ заказ-наряда</Text>
                        <Input type="text" classText="dark-color" name={'order_No'}>{my_servise.order_No}</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Сервисная компания</Text>
                        <FormSelectFromServer  select="user" placeholder={my_servise.service_company.name} path="http://127.0.0.1:8000/users/v1/servicesorgan/" name="service_company">{my_servise.service_company}</FormSelectFromServer>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>наработка, м/час</Text>
                        <Input type="number" classText="dark-color" name={'working_hours'}>{my_servise.working_hours}</Input>
                    </div>
                    <div className="templates-element">
                    <Text className="dark-color" as='h3'>Вид ТО :</Text>
                    <FormSelectFromServer  select="user" placeholder={my_servise.type_of_service.name} path="http://127.0.0.1:8000/api/service/v1/typeofservice/" name="type_of_service">{my_servise.type_of_service}</FormSelectFromServer>
                    </div>  
                </div> 

                }
                <div>
                <Button className="red" onClick={() => {setFlag(res=>!res)}}>{!flag?"Редактировать": "Отправить"}</Button>
                </div>
            </form>
        </div>


 

    )
}