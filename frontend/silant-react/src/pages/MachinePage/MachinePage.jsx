import React, { useState } from "react";
import { Text } from "../../components/Text/Text";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './styles.css'
import { Img } from "../../components/Img/Img";
import { Button } from "../../components/Button/Button";
import { useFormContext } from "react-hook-form";
import { FormSelectFromServer } from "../../components/FormComponents/FormComponentSelect/FormSelectFromServer";
import { Input } from "../../components/Input/Input";
import axios from "axios";
import { isValid_data_patch } from "../../helpers/isValidData";
import { setReloadData } from "../../store/reloadData";


export const MachinePage = () => {

    const { id } = useParams()


    const {
        handleSubmit,
        formState: {isValid},
        register,
        reset
    
      } = useFormContext()


    const isAuth = useSelector(state => state.auth)

    const dispatch  = useDispatch()

    const path_for_server = "http://127.0.0.1:8000/api/v1/machine/"

    const manager = Boolean(isAuth.user_role !== 'client' && isAuth.user_role !== 'serviseorg')

    const my_machine = useSelector(state => state.machines.ids.ids[id])

    const navigate = useNavigate();

    const goBack = () => navigate(-1)

    const[flag, setFlag] = useState(false)

    const[create, setCreate] = useState(false)


    const onSubmit = (data) => {
        const path_machine = `${path_for_server}${data.id}/`
        const dataIsValid = isValid_data_patch(data)
        if(Object.keys(dataIsValid).length ===1){
            return alert("Вы ничего не редактировали")
        }
        else{
            axios.patch(path_machine, dataIsValid, isAuth.confermAut)
            .then(res => {
                alert("Редакция прошла успешно!")
                setFlag(res=> !res)
                dispatch(setReloadData(true))
                reset()
            })
            .catch(err => {
                alert(err.request?.responseText)
            })
            reset()

            }
    }

    const onSubmitPost =(data) => {
        axios.post(path_for_server, data, isAuth.confermAut)
            .then(res => {
                alert(`Все получилось! 
                    Машина с серийным номером ${data.serial_num}
                    поступила в базу данных`)
                setFlag(res=> !res)
                dispatch(setReloadData(true))
                reset()
                goBack()
            })
            .catch(err => {
                alert(err.request?.responseText)
            })
    }

    if(!isAuth.isAuth) return <Navigate to="/"/>

    if(!my_machine) return <></>


    return(
        
        
            <div>

            {!create&&
            <div className="templates-wraper">
                <div className="templates-element">
                    <Text className="dark-color" as='h1'>Бренд : {my_machine.brand}</Text>
                    <Text className="dark-color" as='h1'>Серийный номер : {my_machine.serial_num}</Text>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/logo-machine.png"/>
                    <Text className="dark-color" as='h2'>Модель: {my_machine.car_model.name}</Text>
                    <Button href={`http://localhost:3000/carmodel/${my_machine.car_model.id}`} >Подробнее о модели</Button>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Описание модели</Text>
                        <Text className="dark-color">{my_machine.car_model.specification}</Text>
                    </div>
                    <div>
                        {flag&&<Button href={`http://localhost:3000/carmodel/${my_machine.car_model.id}`} className="red">Редактировать модель</Button>}
                    </div>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/client.png"/>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Хозяин техники :</Text>
                        <Text className="dark-color" as='h3'>{my_machine.client.name}</Text>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Грузополучатель</Text>
                        <Text className="dark-color" as='h3'>{my_machine.consignee}</Text>
                    </div>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/date_of-factore.png"/>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Дата отгрузки с завода</Text>
                        <Text className="dark-color" as='h3'>{my_machine.date_from_the_factory}</Text>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Контракт №</Text>
                        <Text className="dark-color" as='h3'>{my_machine.contractNo}</Text>
                    </div>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/adres.png"/>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Адрес поставки (эксплуатации)</Text>
                        <Text className="dark-color" as='h3'>{my_machine.delivery_address}</Text>
                    </div>
                    <Img className='logo-header' src="../images/servis.png"/>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Сервисная компания</Text>
                        <Text className="dark-color" as='h3'>{my_machine.service_company.name}</Text>
                    </div>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/most-drive.png"/>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Модель ведущего моста</Text>
                        <Text className="dark-color" as='h3'>{my_machine.driving_axle_model.name}</Text>
                        <Button href={`http://localhost:3000/drivingaxlemodel/${my_machine.driving_axle_model.id}`} >Подробнее о модели</Button>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Зав.№ ведущего моста</Text>
                        <Text className="dark-color" >{my_machine.driving_axle_num}</Text>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Описание модели</Text>
                        <Text className="dark-color" >{my_machine.driving_axle_model.specification}</Text>
                    </div>
                    <div>
                        {flag&&<Button href={`http://localhost:3000/drivingaxlemodel/${my_machine.driving_axle_model.id}`} className="red">Редактировать модель</Button>}
                    </div>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/engine.png"/>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Модель двигателя</Text>
                        <Text className="dark-color" as='h3'>{my_machine.engine_model.name}</Text>
                        <Button href={`http://localhost:3000/enginemodel/${my_machine.engine_model.id}`} >Подробнее о модели</Button>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Зав.№ двигателя</Text>
                        <Text className="dark-color" >{my_machine.engine_num}</Text>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Описание модели</Text>
                        <Text className="dark-color" >{my_machine.engine_model.specification}</Text>
                    </div>
                    <div>
                        {flag&&<Button href={`http://localhost:3000/enginemodel/${my_machine.engine_model.id}`} className="red">Редактировать модель</Button>}
                    </div>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/control-drive.png"/>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Модель управляемого моста</Text>
                        <Text className="dark-color" as='h3'>{my_machine.model_of_a_controlled_bridge.name}</Text>
                        <Button href={`http://localhost:3000/modelofacontrolledbridge/${my_machine.model_of_a_controlled_bridge.id}`} >Подробнее о модели</Button>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Зав.№ управляемого моста</Text>
                        <Text className="dark-color" >{my_machine.num_of_a_controlled_bridge}</Text>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Описание модели</Text>
                        <Text className="dark-color" >{my_machine.model_of_a_controlled_bridge.specification}</Text>
                    </div>
                    <div>
                        {flag&&<Button href={`http://localhost:3000/modelofacontrolledbridge/${my_machine.model_of_a_controlled_bridge.id}`} className="red">Редактировать модель</Button>}
                    </div>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/transmish.png"/>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Модель трансмиссии</Text>
                        <Text className="dark-color" as='h3'>{my_machine.transmission_model.name}</Text>
                        <Button href={`http://localhost:3000/transmissionmodel/${my_machine.transmission_model.id}`} >Подробнее о модели</Button>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Зав.№ трансмиссии</Text>
                        <Text className="dark-color" >{my_machine.transmission_num                        }</Text>
                    </div>
                    <div className="templates-wraper">
                        <Text className="dark-color" as='h3'>Описание модели</Text>
                        <Text className="dark-color" >{my_machine.transmission_model.specification}</Text>
                    </div>
                    <div>
                        {flag&&<Button href={`http://localhost:3000/transmissionmodel/${my_machine.transmission_model.id}`} className="red">Редактировать модель</Button>}
                    </div>
                </div>
            </div>}
            <div className="templates-wraper">
            </div>
        {manager&&
            <form className='templates-wraper-redact' onSubmit={handleSubmit(onSubmit)}>
            {flag&&
            <div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Модель двигателя</Text>
                    <FormSelectFromServer  select="name" placeholder={my_machine.engine_model.name} path="http://127.0.0.1:8000/api/v1/enginemodel/" name="engine_model">{my_machine.engine_model}</FormSelectFromServer>
                </div>
                <div className="templates-element">
                    <input {...register(`id`)} type="hidden" value={my_machine.id} />
                    <Text className="dark-color" as='h3'>Зав.№ двигателя</Text>
                    <Input type="text" classText="dark-color" name={'engine_num'}>{my_machine.engine_num}</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Модель техники</Text>
                    <FormSelectFromServer  select="name" placeholder={my_machine.car_model.name} path="http://127.0.0.1:8000/api/v1/carmodel/" name="car_model">{my_machine.car_model}</FormSelectFromServer>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Сервисная компания</Text>
                    <FormSelectFromServer  select="user" placeholder={my_machine.service_company.name} path="http://127.0.0.1:8000/users/v1/servicesorgan/" name="service_company">{my_machine.service_company}</FormSelectFromServer>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Модель трансмиссии</Text>
                    <FormSelectFromServer  select="name" placeholder={my_machine.transmission_model.name} path="http://127.0.0.1:8000/users/v1/servicesorgan/" name="transmission_model">{my_machine.transmission_model}</FormSelectFromServer>
                </div>

                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Зав.№ трансмиссии</Text>
                    <Input type="text" classText="dark-color" name={'transmission_num'}>{my_machine.transmission_num}</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Модель ведущего моста</Text>
                    <FormSelectFromServer  select="name" placeholder={my_machine.driving_axle_model.name} path="http://127.0.0.1:8000/api/v1/drivingaxlemodel/" name="driving_axle_model">{my_machine.driving_axle_model}</FormSelectFromServer>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Зав.№ ведущего моста</Text>
                    <Input type="text" classText="dark-color" name={'driving_axle_num'}>{my_machine.driving_axle_num}</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Модель управляемого моста</Text>
                    <FormSelectFromServer  select="name" placeholder={my_machine.model_of_a_controlled_bridge.name} path="http://127.0.0.1:8000/api/v1/modelofacontrolledbridge/" name="model_of_a_controlled_bridge">{my_machine.model_of_a_controlled_bridge}</FormSelectFromServer>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Зав.№ управляемого моста</Text>
                    <Input type="text" classText="dark-color" name={'num_of_a_controlled_bridge'}>{my_machine.num_of_a_controlled_bridge}</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Договор поставки №, дата</Text>
                    <Input  classText="dark-color" name={'contractNo'}>{my_machine.contractNo}</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Дата отгрузки с завода</Text>
                    <Input type="date" classText="dark-color" name={'date_from_the_factory'}>{my_machine.date_from_the_factory}</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Грузополучатель(конечный потребитель)</Text>
                    <Input type="text" classText="dark-color" name={'consignee'}>{my_machine.consignee}</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Адрес поставки (эксплуатации)</Text>
                    <Input type="text" classText="dark-color" name={'delivery_address'}>{my_machine.delivery_address}</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Комплектация (доп. опции)</Text>
                    <Input type="text" classText="dark-color" name={'equipment'}>{my_machine.equipment}</Input>
                </div>
                <div>
                    <Button className="red"  >Отправить</Button>
                </div>
            </div>

            }
            </form>}
            {manager&&
            <form className='templates-wraper-redact' onSubmit={handleSubmit(onSubmitPost)}>
            {create&&
            <div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Серийный номер</Text>
                    <Input type="text" message="обязательно заполнить" classText="dark-color" name={'serial_num'}>Укажите серийный номер(должен быть уникальным)</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Модель техники</Text>
                    <FormSelectFromServer message="обязательно заполнить" select="name" placeholder={"Выберете модель техники"} path="http://127.0.0.1:8000/api/v1/carmodel/" name="car_model"></FormSelectFromServer>
                </div>

                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Бренд</Text>
                    <Input type="text" message="обязательно заполнить" classText="dark-color" name={'brand'}>Укажите бренд</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Модель двигателя</Text>
                    <FormSelectFromServer message="обязательно заполнить" select="name" placeholder={"Выберете модель двигателя"} path="http://127.0.0.1:8000/api/v1/enginemodel/" name="engine_model"></FormSelectFromServer>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Зав.№ двигателя</Text>
                    <Input message="обязательно заполнить" classText="dark-color" name={'engine_num'}>Укажите № двигателя</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Сервисная компания</Text>
                    <FormSelectFromServer message="обязательно заполнить" select="user" placeholder="Выберете сервисную компанию" path="http://127.0.0.1:8000/users/v1/servicesorgan/" name="service_company"></FormSelectFromServer>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Модель трансмиссии</Text>
                    <FormSelectFromServer message="обязательно заполнить" select="name" placeholder="Выберете модель трансмиссии" path="http://127.0.0.1:8000/api/v1/transmissionmodel/" name="transmission_model"></FormSelectFromServer>
                </div>

                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Зав.№ трансмиссии</Text>
                    <Input type="text" message="обязательно заполнить" classText="dark-color" name={'transmission_num'}>Укажите Зав.№ трансмиссии</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Модель ведущего моста</Text>
                    <FormSelectFromServer message="обязательно заполнить" select="name" placeholder="Выберите модель ведущего моста" path="http://127.0.0.1:8000/api/v1/drivingaxlemodel/" name="driving_axle_model"></FormSelectFromServer>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Зав.№ ведущего моста</Text>
                    <Input type="text" message="обязательно заполнить" classText="dark-color" name={'driving_axle_num'}>Укажите модель ведущего моста</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Модель управляемого моста</Text>
                    <FormSelectFromServer message="обязательно заполнить" select="name" placeholder="Выберите модель управляемого моста" path="http://127.0.0.1:8000/api/v1/modelofacontrolledbridge/" name="model_of_a_controlled_bridge"></FormSelectFromServer>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Зав.№ управляемого моста</Text>
                    <Input type="text" message="обязательно заполнить" classText="dark-color" name={'num_of_a_controlled_bridge'}>Укажите модель управляемого моста</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Договор поставки №, дата</Text>
                    <Input message="обязательно заполнить" classText="dark-color" name={'contractNo'}>Укажите договор поставки №, дата</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Дата отгрузки с завода</Text>
                    <Input type="date" message="обязательно заполнить" classText="dark-color" name={'date_from_the_factory'}>Укажите дату отгрузки с завода</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Грузополучатель(конечный потребитель)</Text>
                    <Input type="text" message="обязательно заполнить" classText="dark-color" name={'consignee'}>Укажите грузополучателя (конечный потребитель)</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Адрес поставки (эксплуатации)</Text>
                    <Input type="text" message="обязательно заполнить" classText="dark-color" name={'delivery_address'}>Укажите адрес поставки (эксплуатации)</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Комплектация (доп. опции)</Text>
                    <Input type="text" classText="dark-color" name={'equipment'}> Если есть, то укажите  доп комплектацию</Input>
                </div>
                <div className="templates-element">
                    <Text className="dark-color" as='h3'>Выберите клиента</Text>
                    <FormSelectFromServer select="user" placeholder="Укажите клиента" path="http://127.0.0.1:8000/users/v1/clients/" message="обязательно заполнить" name="client"/>
                </div>
                <div>
                    <Button className="red" disabled={!isValid}>Отправить</Button>
                </div>
            </div>

            }
            </form>}
           
            {manager&&!create&&<Button className={!flag? "red" : ''} onClick={() => {setFlag(res=>!res)}}>{flag?"Назад": "Редактировать"}</Button>}
            {manager&&!flag&&<Button className={!create ? "red" : ''} onClick={() => {setCreate(res=>!res)}}>{create?"Назад": "Создать"}</Button>}
            <div>
                <Button onClick={goBack}>Назад вернуться</Button>
            </div>
        
        </div>
    )
}