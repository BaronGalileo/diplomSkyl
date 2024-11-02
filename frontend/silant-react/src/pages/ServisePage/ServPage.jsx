import React, { useEffect, useState } from "react";
import { Text } from "../../components/Text/Text";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Img } from "../../components/Img/Img";
import { Button } from "../../components/Button/Button";
import { useFormContext } from "react-hook-form";
import { RedactTextDate } from "../../components/ElementForRedaction/RedactTextDate";
import { RedactSelect } from "../../components/ElementForRedaction/RedactSelect";


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
                        <RedactTextDate  type="date" field_name={"date_service"} value={my_servise.date_order}></RedactTextDate>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>№ заказ-наряда</Text>
                        <RedactTextDate field_name="order_No" value={my_servise.order_No}/>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Сервисная компания</Text>
                        <RedactSelect field_user={true} path_for_serv="http://127.0.0.1:8000/users/v1/servicesorgan/" field_name="service_company" value={my_servise.service_company}/>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>наработка, м/час</Text>
                        <RedactTextDate field_name="working_hours" value={my_servise.working_hours}/>
                    </div>
                    <div className="templates-element">
                    <Text className="dark-color" as='h3'>Вид ТО :</Text>
                    <RedactSelect path_for_serv="http://127.0.0.1:8000/api/service/v1/typeofservice/"
             message="обязательно заполнить" field_name="type_of_service" value={my_servise.type_of_service}/>
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