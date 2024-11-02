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


export const TemplateElement = ({path}) => {

    const {
        handleSubmit,
        register,
        formState: {isValid},
        reset,
    
      } = useFormContext()

    const navigate = useNavigate();

    const goBack = () => navigate(-1)

    const isAuth = useSelector(state => state.auth)

    const manager = Boolean(isAuth.user_role !== 'client' || isAuth.user_role !== 'serviseorg')

    const[flag, setFlag] = useState(false)

    const[obj, setObj] = useState(null)

    const { id } = useParams()

    const dict_path = {
        carmodel:{"path": `http://127.0.0.1:8000/api/v1/carmodel/${id}/`, "src":'../images/logo-machine.png', 'title': "Модель техники"},
        enginemodel: {"path":`http://127.0.0.1:8000/api/v1/enginemodel/${id}/`, "src":'../images/engine.png', 'title': "Модель двигателя"},
        transmissionmodel: {"path":`http://127.0.0.1:8000/api/v1/transmissionmodel/${id}/`, "src":'../images/transmish.png', 'title': "Модель трансмиссии"},
        drivingaxlemodel: {"path":`http://127.0.0.1:8000/api/v1/drivingaxlemodel/${id}/`, "src":'../images/most-drive.png', 'title': "Модель ведущего моста"},
        modelofacontrolledbridge: {"path":`http://127.0.0.1:8000/api/v1/modelofacontrolledbridge/${id}/`, "src":'../images/control-drive.png', 'title': "Модель управляемого моста"},
        typeofservice: {"path": `http://127.0.0.1:8000/api/service/v1/typeofservice/${id}/`, "src":'../images/type-TO', 'title': "Вид ТО"},
        failurenode: {"path":`http://127.0.0.1:8000/api/service/v1/failurenode/${id}/`, "src":'../images/node-crash.png', 'title': "Узел отказа"},
        recoverymethod: {"path":`http://127.0.0.1:8000/api/service/v1/recoverymethod/${id}/`, "src":'../images/recover-metod.png', 'title': "Способ восстановления"},
        servicesorgan: {"path":`http://127.0.0.1:8000/users/v1/servicesorgan/${id}/`, "src":'../images/12.png', 'title': "Сервисная компания"},
        client: {"path":`http://127.0.0.1:8000/users/v1/clients/${id}/`, "src":'../images/client.png', 'title': "Клиент"},
    }

    const targetPage = dict_path[path]


    useEffect(() => {
        axios.get(targetPage.path, isAuth.confermAut).then(res=> {
            setObj(res.data)
        }).catch(err=> {
            console.log("ERR", err)
        })
    }, [])

    const onSubmit = (data) => {
        if(data.name || data.specification){
            axios.patch(targetPage.path, data, isAuth.confermAut)
        .then(res=> {
            console.log("submit", data)
            alert("Редактирование прошло успешно!")
        })
        .catch(err=> {
            alert(err.request.responseText)
        })

        }
    }

    const  errorsSubmit = (data) => {
        console.log("ERRORsubmit", data)
    }

    if(!isAuth.isAuth) return <Navigate to="/"/>



    if(!obj){
        return(<></>)
    }

    return(
        <div className="templates-wraper">
            {!flag&&
            <div>
                <div className="templates-element">
                <Text className="dark-color" as='h1'>{targetPage.title}</Text>
                </div>
                <div className="templates-element">
                    {targetPage.src&&
                    <Img className='logo-header' src={targetPage.src}/>}
                    <Text className="dark-color" as='h2'>{obj?.name}</Text>
                </div>
                <div className="templates-element">
                    <Text className="dark-color">{obj?.specification}</Text>
                </div>
            </div>}
            {manager&&
            <form className='templates-wraper-redact' onSubmit={handleSubmit(onSubmit, errorsSubmit)}>
                {flag&&
                <div>
                    <div className="templates-element">
                        <input {...register(`id`)} type="hidden" value={id} />
                        <RedactTextDate field_name="name" value={obj?.name}/>
                    </div>
                    <div className="templates-element">
                        <RedactTextDate field_name="specification" value={obj?.specification}/>
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