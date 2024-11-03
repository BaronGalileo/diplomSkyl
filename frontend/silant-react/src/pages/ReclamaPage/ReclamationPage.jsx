import React, { useEffect, useState } from "react";
import { Text } from "../../components/Text/Text";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Img } from "../../components/Img/Img";
import { Button } from "../../components/Button/Button";
import { useFormContext } from "react-hook-form";
import { FormSelectFromServer } from "../../components/FormComponents/FormComponentSelect/FormSelectFromServer";
import { Input } from "../../components/Input/Input";


export const ReclamationPage = () => {

    const { id } = useParams()


    const {
        handleSubmit,
        register,
        reset,   
      } = useFormContext()


    const isAuth = useSelector(state => state.auth)

    const notClient = Boolean(isAuth.user_role === 'manager' || isAuth.user_role === 'serviseorg')

    const my_reclamation = useSelector(state => state.reclamation.ids[id])

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

    if(!my_reclamation) return <></>


    return(
        
        <div className="templates-wraper">
            <div className="templates-element">
                <div className="templates-element">
                    <Text className="dark-color" as='h1'>Рекламация</Text>
                </div>
            </div>

            <div className="templates-element">
                <Text className="dark-color" as='h2'>дата отказа : {my_reclamation.date_of_failure}</Text>
                <Text className="dark-color" as='h2'>Серийный номер : {my_reclamation.machine.serial_num}</Text>
                <Button href={`http://localhost:3000/machine/${my_reclamation.machine.id}`}>Посмотеть подробнее</Button>
            </div>
            <div className="templates-element">
                <Img className='logo-header' src="../images/logo-machine.png"/>
                <Text className="dark-color" as='h2'>Модель: {my_reclamation.machine.car_model.name}</Text>
                <Button href={`http://localhost:3000/carmodel/${my_reclamation.machine.car_model.id}`} >Посмотеть подробнее</Button>
            </div>
            <div className="templates-element">
                <Img className='logo-header' src="../images/2.png"/>
                <Text className="dark-color" as='h3'>наработка, м/час</Text>
                <Text className="dark-color" as='h3'>{my_reclamation.working_hours}</Text>
            </div>
            <div className="templates-element">
                <Img className='logo-header' src="../images/node-crash.png"/>
                <Text className="dark-color" as='h3'>узел отказа</Text>
                <Text className="dark-color" as='h3'>{my_reclamation.failure_node.name}</Text>
            </div>
            <div className="templates-element">
                <Text className="dark-color" as='h3'>Описание отказа</Text>
                <Text className="dark-color" as='h3'>{my_reclamation.description_of_failure}</Text>
            </div>
            <div className="templates-element">
                <Img className='logo-header' src="../images/servis.png"/>
                <Text className="dark-color" as='h3'>Сервисная компания</Text>
                <Text className="dark-color" as='h3'>{my_reclamation.service_company.name}</Text>
            </div>
            <div className="templates-element">
                <Text className="dark-color" as='h3'>наработка, м/час</Text>
                <Text className="dark-color" as='h3'>{my_reclamation.working_hours}</Text>
            </div>
            <div className="templates-element">
                <Text className="dark-color" as='h3'>дата восстановления</Text>
                <Text className="dark-color" >{my_reclamation.date_of_restoration}</Text>
            </div>
            <div className="templates-element">
                <Text className="dark-color" as='h3'>время простоя техники в днях</Text>
                <Text className="dark-color" as='h2'>{my_reclamation.downtime}</Text>
            </div>
            <div className="templates-element">
                <Text className="dark-color" as='h3'>Используемые запасные части</Text>
                <Text className="dark-color" >{my_reclamation.spare_parts}</Text>
            </div>
            <div>
                <Button onClick={goBack}>Назад вернуться</Button>
            </div>
            
            <form className='templates-wraper-redact' onSubmit={handleSubmit(onSubmit, errorsSubmit)}>
                {flag&&
                <div>
                    <div className="templates-element">
                        <input {...register(`id`)} type="hidden" value={my_reclamation.id} />
                        <input {...register(`machine`)} type="hidden" value={my_reclamation.machine.id} />
                        <Text className="dark-color" as='h3'>дата заказ-наряда</Text>
                        <Input type="date" classText="dark-color" name={'date_service'}>{my_reclamation}</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>№ заказ-наряда</Text>
                        <Input type="text" classText="dark-color" name={'order_No'}>{my_reclamation}</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Сервисная компания</Text>
                        <FormSelectFromServer  select="user" placeholder={my_reclamation.service_company.name} path="http://127.0.0.1:8000/users/v1/servicesorgan/" name="service_company">{my_reclamation.service_company}</FormSelectFromServer>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>наработка, м/час</Text>
                        <Input type="number" classText="dark-color" name={'working_hours'}>{my_reclamation.working_hours}</Input>
                    </div>
                    <div className="templates-element">
                    <Text className="dark-color" as='h3'>Вид ТО :</Text>
                    <FormSelectFromServer  select="user" placeholder={my_reclamation.failure_node.name} path="http://127.0.0.1:8000/api/service/v1/failurenode/" name="failure_node">{my_reclamation.failure_node}</FormSelectFromServer>
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