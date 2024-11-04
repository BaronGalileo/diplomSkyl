import React, { useEffect, useState } from "react";
import { Text } from "../../components/Text/Text";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Img } from "../../components/Img/Img";
import { Button } from "../../components/Button/Button";
import { useFormContext } from "react-hook-form";
import { FormSelectFromServer } from "../../components/FormComponents/FormComponentSelect/FormSelectFromServer";
import { Input } from "../../components/Input/Input";
import { setReloadData } from "../../store/reloadData";
import { isValid_data_patch } from "../../helpers/isValidData";
import axios from "axios";


export const ReclamationPage = () => {

    const { id } = useParams()


    const {
        handleSubmit,
        register,
        reset,
        formState: {isValid},   
      } = useFormContext()


    const isAuth = useSelector(state => state.auth)

    const notClient = Boolean(isAuth.user_role === 'manager' || isAuth.user_role === 'serviseorg')

    const my_reclamation = useSelector(state => state.reclamation.ids[id])

    const[create, setCreate] = useState(false)

    const machine_obj = useSelector(state => state.machines.ids)

    const dispatch  = useDispatch()

    const path_reclamation = "http://127.0.0.1:8000/api/service/v1/reclamation/"

    const navigate = useNavigate();

    const goBack = () => navigate(-1)

    const[flag, setFlag] = useState(false)

    useEffect(() => {

    }, [flag])

    const onSubmit = (data) => {
        const dataIsValid = isValid_data_patch(data)
        if(Object.keys(dataIsValid).length ===1){
            return alert("Вы ничего не редактировали")
        }
        const date_start = dataIsValid.date_of_failure ? dataIsValid.date_of_failure: my_reclamation.date_of_failure
        const date_finish = dataIsValid.date_of_restoration ? dataIsValid.date_of_restoration: my_reclamation.date_of_restoration
        if(date_start >= date_finish){
            alert("дата отказа не может быть раньше, чем дата восстановления")
        }
        else {
            const path_patch = path_reclamation + Number(data.id)+"/"
            axios.patch(path_patch, dataIsValid, isAuth.confermAut)
            .then(res => {
                alert("Рекламация успешно обновлена")
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

        }}

    const onSubmitPost = (data) => {
        const dataIsValid = isValid_data_patch(data)
        const servOrgID = machine_obj.ids[data.machine]?.service_company.user
        dataIsValid['service_company'] = servOrgID
        const date_start = dataIsValid.date_of_failure 
        const date_finish = dataIsValid.date_of_restoration
        if(date_start >= date_finish){
            alert("дата отказа не может быть раньше, чем дата восстановления")
        }
        else{
            axios.post(path_reclamation, dataIsValid, isAuth.confermAut)
            .then(res => {
                alert("Рекламация успешно добавлена")
                dispatch(setReloadData(true))
                reset()
                goBack()
                
                })
            .catch(err => {
                if(err.request.status >= 500) {
                    alert("Извените, проблема с сервером, попробуйте отправить позже!");
            }
            })

        }}


    if(!isAuth.isAuth) return <Navigate to="/"/>

    if(!my_reclamation) return <></>


    return(
        
        <div className="templates-wraper">
            {!create&&
            <div>
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
                <Img className='logo-header' src="../images/date_of-factore.png"/>
                <Text className="dark-color" as='h3'>дата восстановления</Text>
                <Text className="dark-color" >{my_reclamation.date_of_restoration}</Text>
                </div>
                <div className="templates-element">
                <Img className='logo-header' src="../images/э.png"/>
                <Text className="dark-color" as='h3'>время простоя техники в днях</Text>
                <Text className="dark-color" as='h2'>{my_reclamation.downtime}</Text>
                </div>
                <div className="templates-element">
                <Img className='logo-header' src="../images/щ.png"/>
                <Text className="dark-color" as='h3'>Используемые запасные части</Text>
                <Text className="dark-color" >{my_reclamation.spare_parts}</Text>
                </div>
            </div>}
            
            {!create&&
                <form className='templates-wraper-redact' onSubmit={handleSubmit(onSubmit)}>
                {flag&&
                <div>
                    <div className="templates-element">
                        <input {...register(`id`)} type="hidden" value={my_reclamation.id} />
                        <Text className="dark-color" as='h3'>дата отказа</Text>
                        <Input type="date" classText="dark-color" name={'date_of_failure'}>{my_reclamation.date_of_failure}</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>наработка, м/час</Text>
                        <Input type="number" classText="dark-color" name={'working_hours'}>{my_reclamation.working_hours}</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Узел отказа</Text>
                        <FormSelectFromServer  select="name" placeholder={my_reclamation.failure_node.name} path="http://127.0.0.1:8000/api/service/v1/failurenode/" name="failure_node">{my_reclamation.failure_node}</FormSelectFromServer>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Описание отказа</Text>
                        <Input  classText="dark-color" name={'description_of_failure'}>{my_reclamation.description_of_failure}</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Cпособ восстановления</Text>
                        <FormSelectFromServer  select="name" placeholder={my_reclamation.recovery_method.name} path="http://127.0.0.1:8000/api/service/v1/recoverymethod/" name="recovery_method">{my_reclamation.recovery_method}</FormSelectFromServer>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Используемые запасные части</Text>
                        <Input  classText="dark-color" name={'spare_parts'}>{my_reclamation.spare_parts}</Input>
                    </div> 
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Дата восстановления</Text>
                        <Input type="date" classText="dark-color" name={'date_of_restoration'}>{my_reclamation.date_of_restoration}</Input>
                    </div>
                    <div>
                        <Button className="red" >Отправить</Button>
                    </div>
                </div> 

                }
            </form>}
            {!flag&&create&&
                <form className='templates-wraper-redact' onSubmit={handleSubmit(onSubmitPost)}>

                <div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Дата отказа</Text>
                        <Input type="date" message="обязательно укажите" classText="dark-color" name={'date_of_failure'}>Укажите дату отказа</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Наработка, м/час</Text>
                        <Input type="number" message="обязательно укажите" classText="dark-color" name={'working_hours'}>Укажите наработку, м/час</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Узел отказа</Text>
                        <FormSelectFromServer message="выберите узел отказа" select="name" placeholder="Выберите узел отказа" path="http://127.0.0.1:8000/api/service/v1/failurenode/" name="failure_node"></FormSelectFromServer>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Описание отказа</Text>
                        <Input  classText="dark-color" message="опишите что случилось"  name={'description_of_failure'}>Опишите что произошло</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Cпособ восстановления</Text>
                        <FormSelectFromServer message="обязательно выберите способ восстановления" select="name" placeholder="Выберите способ восстановления" path="http://127.0.0.1:8000/api/service/v1/recoverymethod/" name="recovery_method"></FormSelectFromServer>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Используемые запасные части</Text>
                        <Input  classText="dark-color" name={'spare_parts'}>Используемые запасные части</Input>
                    </div> 
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Дата восстановления</Text>
                        <Input type="date" classText="dark-color" name={'date_of_restoration'}>Укажите дату восстановленияб если есть такая</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Mашина</Text>
                        <FormSelectFromServer message="обязательно выберите машину" select="machine" placeholder="Выберите машину" path="http://127.0.0.1:8000/api/v1/machine/" name="machine"></FormSelectFromServer>
                    </div>
                    <div>
                        <Button disabled={!isValid} className="red" >Отправить</Button>
                    </div>
                </div> 
            </form>}
            {!create&&notClient&&
            <div>
                <Button className={!flag ? "red" : ''} onClick={() => {setFlag(res=>!res)}}>{!flag?"Редактировать": "Назад"}</Button>
            </div>}
            {!flag&&notClient&&
            <div>
                <Button className={!create ? "red" : ''} onClick={() => {setCreate(res=>!res)}}>{!create?"Создать": "Назад"}</Button>
            </div>}
            <div>
                    <Button onClick={goBack}>Назад вернуться</Button>
            </div>
        </div>


    )
}