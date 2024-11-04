import React, { useEffect, useState } from "react";
import { Text } from "../../components/Text/Text";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Img } from "../../components/Img/Img";
import { Button } from "../../components/Button/Button";
import { useFormContext } from "react-hook-form";
import { FormSelectFromServer } from "../../components/FormComponents/FormComponentSelect/FormSelectFromServer";
import { Input } from "../../components/Input/Input";
import { isValid_data_patch } from "../../helpers/isValidData";
import axios from "axios";
import { setReloadData } from "../../store/reloadData";


export const ServPage = () => {

    const { id } = useParams()


    const {
        handleSubmit,
        register,
        formState: {isValid},
        reset,   
      } = useFormContext()

    
    const dispatch  = useDispatch()

    const[create, setCreate] = useState(false)


    const isAuth = useSelector(state => state.auth)

    const machine_obj = useSelector(state => state.machines.ids)

    const manager = Boolean(isAuth.user_role !== 'client' || isAuth.user_role !== 'serviseorg')

    const my_servise = useSelector(state => state.services.ids[id])

    const timeNew = new Date().toISOString("YYYY-MM-DD")

    const navigate = useNavigate();

    const goBack = () => navigate(-1)

    const[flag, setFlag] = useState(false)

    const path_service = "http://127.0.0.1:8000/api/service/v1/service/"

    useEffect(() => {

    }, [flag])

    const onSubmit = (data) => {
        const dataIsValid = isValid_data_patch(data)
        if(Object.keys(dataIsValid).length ===1){
            return alert("Вы ничего не редактировали")
        }
        const date_TO = dataIsValid.date_service
        const date_TO_old = my_servise.date_service
        const date_Order = dataIsValid.date_order 
        const date_Order_old = my_servise.date_order

        if(date_Order){
            if(date_Order>date_TO||date_TO_old){
                reset()
                return alert("Дата заказ-наряда не может быть позже проведения ТО")
            }
        }
        else if(date_TO) {
            if(date_TO<date_Order||date_Order_old ){
                reset()
                return alert("Дата проведения ТО  не может быть раньше заказ-наряда")
            }
        }
        else {
            const path_patch = path_service + data.id +"/"
            axios.patch(path_patch, dataIsValid, isAuth.confermAut)
            .then(res => {
                alert("Редакция на ТО успешна принята")
                dispatch(setReloadData(true))
                reset()
                goBack()
            })
            .catch(err => {
                alert(err.request?.responseText)
                if(err.request.status >= 500) {
                    alert("Извените, проблема с сервером, попробуйте отправить позже!");
                    reset()
                }
            })
        }
        reset()


    }

    const onSubmitPost = (data) => {
        const dataIsValid = isValid_data_patch(data)
        const servOrgID = machine_obj.ids[data.machine]?.service_company.user
        dataIsValid['service_company'] = servOrgID
        if(dataIsValid.date_service&&timeNew>dataIsValid.date_service){
                alert("Невозможно вернуться в прошлое. Поменяйте, пожалуйста, дату проведения ТО")
    
        }
        else if(dataIsValid.date_order&&timeNew>dataIsValid.date_order){
                alert("Невозможно вернуться в прошлое. Поменяйте, пожалуйста, дату заказ-наряда")
        }
        else{
            axios.post(path_service, dataIsValid, isAuth.confermAut)
            .then(res => {
                dispatch(setReloadData(true))
                reset()
                alert("Заяка на ТО успешна принята")
                goBack()
            })
            .catch(err => {
                if(err.request.status >= 500) {
                    alert("Извените, проблема с сервером, попробуйте отправить позже!");
                    reset()
                }
            })
        }
    }

    if(!isAuth.isAuth) return <Navigate to="/"/>

    if(!my_servise) return <></>


    return(
        
        <div className="templates-wraper">
            {!create&&
            <div>
                <div className="templates-element">
                <div className="templates-element">
                    <Text className="dark-color" as='h1'>Техническое обслуживание</Text>
                </div>
                </div>

                <div className="templates-element">
                <Text className="dark-color" as='h2'>TO от : {my_servise.date_service}</Text>
                <Text className="dark-color" as='h2'>Серийный номер : {my_servise.machine.serial_num}</Text>
                <Button href={`http://127.0.0.1:8000/api/v1/machine/${my_servise.machine.id}`} >Подробнее машине</Button>
                </div>
                <div className="templates-element">
                <Img className='logo-header' src="../images/logo-machine.png"/>
                <Text className="dark-color" as='h2'>Модель: {my_servise.machine.car_model.name}</Text>
                <Button href={`http://localhost:3000/carmodel/${my_servise.machine.car_model.id}`} >Подробнее о модели</Button>
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
            </div>}         
            {!create&&
            <form className='templates-wraper-redact' onSubmit={handleSubmit(onSubmit)}>
                {flag&&
                <div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h1'>Техническое обслуживание</Text>
                        <Text className="dark-color" as='h2'>Серийный номер : {my_servise.machine.serial_num}</Text>
                    </div>
                    <div className="templates-element">
                        <input {...register(`id`)} type="hidden" value={my_servise.id} />
                        <Text className="dark-color" as='h3'>дата заказ-наряда</Text>
                        <Input type="date" classText="dark-color" name={'date_order'}>{my_servise.date_order}</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>№ заказ-наряда</Text>
                        <Input type="text" classText="dark-color" name={'order_No'}>{my_servise.order_No}</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Дата проведения ТО</Text>
                        <Input type="date" classText="dark-color" name={'date_service'}>{my_servise.date_service}</Input>
                    </div>
                    {manager&&
                        <div className="templates-element">
                            <Text className="dark-color" as='h3'>Сервисная компания</Text>
                            <FormSelectFromServer  select="user" placeholder={my_servise.service_company.name} path="http://127.0.0.1:8000/users/v1/servicesorgan/" name="service_company">{my_servise.service_company}</FormSelectFromServer>
                        </div>}
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>наработка, м/час</Text>
                        <Input type="number" classText="dark-color" name={'working_hours'}>{my_servise.working_hours}</Input>
                    </div>
                    <div className="templates-element">
                    <Text className="dark-color" as='h3'>Вид ТО :</Text>
                    <FormSelectFromServer  select="name" placeholder={my_servise.type_of_service.name} path="http://127.0.0.1:8000/api/service/v1/typeofservice/" name="type_of_service">{my_servise.type_of_service}</FormSelectFromServer>
                    </div>
                    <div>
                    <Button className="red" >Отправить</Button>
                    </div>  
                </div> 
                }
            </form>}
            {!flag&&
            <form className='templates-wraper-redact' onSubmit={handleSubmit(onSubmitPost)}>
                {create&&
                <div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h1'>Техническое обслуживание</Text>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>дата проведения ТО</Text>
                        <Input type="date" classText="dark-color" name={'date_service'}>Укажите дату проведения ТО</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>дата заказ-наряда</Text>
                        <Input type="date" classText="dark-color" name={'date_order'}>Укажите дату заказа-наряда</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>№ заказ-наряда</Text>
                        <Input type="text" classText="dark-color" name={'order_No'}>Укажите № заказ-наряда</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Машина</Text>
                        <FormSelectFromServer message="обязательно выбрать машину" select="machine" placeholder="Выберете машину для ТО" path="http://127.0.0.1:8000/api/v1/machine/" name="machine"></FormSelectFromServer>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>наработка, м/час</Text>
                        <Input type="number" message="обязательно указать число" classText="dark-color" name={'working_hours'}>Укажите наработка, м/час</Input>
                    </div>
                    <div className="templates-element">
                    <Text className="dark-color" as='h3'>Вид ТО :</Text>
                    <FormSelectFromServer  select="name" message="обязательно выберете ТО"  placeholder="Выберете вид ТО" path="http://127.0.0.1:8000/api/service/v1/typeofservice/" name="type_of_service"></FormSelectFromServer>
                    </div>
                    <div>
                    <Button className="red" >Отправить</Button>
                    </div>  
                </div> 
                }
            </form>}
            {!create&&
            <div>
                <Button className={!flag ? "red" : ''} onClick={() => {setFlag(res=>!res)}}>{!flag?"Редактировать": "Назад"}</Button>
            </div>}
            {!flag&&
            <div>
                <Button className={!create ? "red" : ''} onClick={() => {setCreate(res=>!res)}}>{!create?"Создать": "Назад"}</Button>
            </div>}
            <div>
                    <Button onClick={goBack}>Назад вернуться</Button>
            </div>
        </div>


 

    )
}