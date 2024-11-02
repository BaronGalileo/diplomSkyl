import React, { useState } from "react";
import { Text } from "../../components/Text/Text";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './styles.css'
import { Img } from "../../components/Img/Img";
import { Button } from "../../components/Button/Button";
import { useFormContext } from "react-hook-form";
import { FormSelectFromServer } from "../../components/FormComponents/FormComponentSelect/FormSelectFromServer";
import { Input } from "../../components/Input/Input";
import axios from "axios";


export const MachinePage = () => {

    const { id } = useParams()


    const {
        handleSubmit,
        register,
    
      } = useFormContext()


    const isAuth = useSelector(state => state.auth)

    const manager = Boolean(isAuth.user_role !== 'client' && isAuth.user_role !== 'serviseorg')

    const my_machine = useSelector(state => state.machines.ids.ids[id])

    const navigate = useNavigate();

    const goBack = () => navigate(-1)

    const[flag, setFlag] = useState(false)

    const onSubmit = (data) => {
        const path_machine = `http://127.0.0.1:8000/api/v1/machine/${data.id}/`
        if(data.service_company === ''){
            delete data["service_company"]
        }
        if(data.brand === ""){
            delete data["brand"]
        }
        axios.patch(path_machine, data, isAuth.confermAut)
        .then(res=>{
            console.log("Data", res.data)
            alert("Редакция успешна!")
            setFlag(res=>!res)
        })
        .catch(err=> {
            alert(err.request?.responseText)
            console.log("err", err)
        })

    }

    if(!isAuth.isAuth) return <Navigate to="/"/>

    if(!my_machine) return <></>


    return(
        
        
            <div>
            <div className="templates-wraper">
                <div className="templates-element">
                    <Text className="dark-color" as='h1'>Бренд : {my_machine.brand}</Text>
                    <Text className="dark-color" as='h1'>Серийный номер : {my_machine.serial_num}</Text>
                </div>
                <div className="templates-element">
                    <Img className='logo-header' src="../images/logo-machine.png"/>
                    <Text className="dark-color" as='h2'>Модель: {my_machine.car_model.name}</Text>
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
            </div>
            <div className="templates-wraper">
            <div>
                <Button onClick={goBack}>Назад вернуться</Button>
            </div>
        </div>
        {manager&&
            <form className='templates-wraper-redact' onSubmit={handleSubmit(onSubmit)}>
               {flag&& <div>
                    <div className="templates-element">
                        <input {...register(`id`)} type="hidden" value={my_machine.id} />
                        <Input placeholder={my_machine.brand} name="brand">{my_machine.brand}</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" ></Text>
                        <Input placeholder={my_machine.engine_num} name="engine_num">{my_machine.engine_num}</Input>
                    </div> 
                    <div className="templates-element">
                        <Text className="dark-color" >Сервисная компания</Text>
                        <FormSelectFromServer placeholder={my_machine.service_company.name} user={true} path="http://127.0.0.1:8000/users/v1/servicesorgan/" name="service_company" value={my_machine.service_company.name}/>
                    </div>
                </div> }
                <div>
                {flag&&<Button className="red">Отправить</Button>}
                </div>
            </form>}
           
            {manager&&<Button className="red" onClick={() => {setFlag(res=>!res)}}>{flag?"Назад": "Редактировать"}</Button>}
        
        </div>
    )
}