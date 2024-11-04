import React, { useEffect, useState } from "react";
import { Text } from "../../components/Text/Text";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import './styles.css'
import { Img } from "../../components/Img/Img";
import { Button } from "../../components/Button/Button";
import { useFormContext } from "react-hook-form";
import { Input } from "../../components/Input/Input";
import { setReloadData } from "../../store/reloadData";
import { isValid_data_patch } from "../../helpers/isValidData";


export const TemplateElement = ({path}) => {

    const {
        handleSubmit,
        register,
        formState: {isValid},
        reset,
    
      } = useFormContext()

    const navigate = useNavigate();

    const dispatch  = useDispatch()

    const goBack = () => navigate(-1)

    const isAuth = useSelector(state => state.auth)

    const manager = Boolean(isAuth.user_role !== 'client' && isAuth.user_role !== 'serviseorg')

    const[flag, setFlag] = useState(false)

    const not_create = Boolean(path === "client" || path === "servicesorgan")

    const[create, setCreate] = useState(false)

    const[obj, setObj] = useState(null)

    const { id } = useParams()

    const dict_path = {
        carmodel:{"path": `http://127.0.0.1:8000/api/v1/carmodel/`, "src":'../images/logo-machine.png', 'title': "Модель техники"},
        enginemodel: {"path":`http://127.0.0.1:8000/api/v1/enginemodel/`, "src":'../images/engine.png', 'title': "Модель двигателя"},
        transmissionmodel: {"path":`http://127.0.0.1:8000/api/v1/transmissionmodel/`, "src":'../images/transmish.png', 'title': "Модель трансмиссии"},
        drivingaxlemodel: {"path":`http://127.0.0.1:8000/api/v1/drivingaxlemodel/`, "src":'../images/most-drive.png', 'title': "Модель ведущего моста"},
        modelofacontrolledbridge: {"path":`http://127.0.0.1:8000/api/v1/modelofacontrolledbridge/`, "src":'../images/control-drive.png', 'title': "Модель управляемого моста"},
        typeofservice: {"path": `http://127.0.0.1:8000/api/service/v1/typeofservice/`, "src": '../images/type-TO.png', 'title': "Вид ТО"},
        failurenode: {"path":`http://127.0.0.1:8000/api/service/v1/failurenode/`, "src":'../images/node-crash.png', 'title': "Узел отказа"},
        recoverymethod: {"path":`http://127.0.0.1:8000/api/service/v1/recoverymethod/`, "src":'../images/recover-metod.png', 'title': "Способ восстановления"},
        servicesorgan: {"path":`http://127.0.0.1:8000/users/v1/servicesorgan/`, "src":'../images/12.png', 'title': "Сервисная компания"},
        client: {"path":`http://127.0.0.1:8000/users/v1/clients/`, "src":'../images/client.png', 'title': "Клиент"},
    }

    const targetPage = dict_path[path]

    const path_id = dict_path[path].path + id +'/'

    const path_forPost = dict_path[path].path


    useEffect(() => {
        axios.get(path_id, isAuth.confermAut).then(res=> {
            setObj(res.data)
        }).catch(err=> {
            alert(err.request?.responseText)
        })
    }, [])

    const onSubmit = (data) => { 
        const dataIsValid = isValid_data_patch(data)
        if(Object.keys(dataIsValid).length === 1){
            return alert("Вы ничего не редактировали")
        }
        else{
            axios.patch(path_id, dataIsValid, isAuth.confermAut)
            .then(res => {
                alert(`Редакция ${targetPage.title}  - ${dataIsValid.name ? dataIsValid.name: data.name} прошла успешно!`)
                setFlag(res=> !res)
                dispatch(setReloadData(true))
                reset()
                goBack()
            })
            .catch(err => {
                alert(err.request?.responseText)
            })
            reset()

            }
    }

    const onSubmitPost = (data) => {
        axios.post(path_forPost, data, isAuth.confermAut)
            .then(res => {
                alert(`Все получилось! ${targetPage.title} - ${data.name} поступило в базу данных`)
                setFlag(res=> !res)
                dispatch(setReloadData(true))
                reset()
                goBack()
            })
            .catch(err => {
                alert(err.request?.responseText)
            })
            reset()

    }

    if(!isAuth.isAuth) return <Navigate to="/"/>



    if(!obj){
        return(<></>)
    }

    return(
        <div className="templates-wraper">
            {!create&&
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
            {manager&&!not_create&&
            <form className='templates-wraper-redact' onSubmit={handleSubmit(onSubmit)}>
                {flag&&
                <div>
                    <div className="templates-element">
                        <input {...register(`id`)} type="hidden" value={obj.id} />
                        <Text className="dark-color" as='h3'>Наименомание</Text>
                        <Input classText="dark-color" name='name'>{obj?.name}</Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Описание</Text>
                        <Input classText="dark-color" name="specification">{obj?.specification}</Input>
                    </div> 
                </div> 

                }
                {manager&&!not_create&&
                <div>
                    {flag&&!create&&<Button className="red" >Редактировать</Button>}
                </div>}
            </form>}
                <div>
                    {manager&&!flag&&!not_create&&<Button className={!create? "red" : ""} onClick={() => {setCreate(res=>!res)}}>{!create?"Создать": "Назад"}</Button>}
                </div>
            {manager&&!not_create&&
            <form className='templates-wraper-redact' onSubmit={handleSubmit(onSubmitPost)}>
                {create&&
                <div>
                    <div className="templates-element">
                        <Img className='logo-header' src={targetPage.src}/>
                        <Text className="dark-color" as='h1'>{targetPage.title}</Text>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Наименомание</Text>
                        <Input message="Напишите наименование" classText="dark-color" name='name'></Input>
                    </div>
                    <div className="templates-element">
                        <Text className="dark-color" as='h3'>Описание</Text>
                        <Input message="Напишите опимание" name="specification"></Input>
                    </div>
                    <div>
                        <Button className="red" disabled={!isValid}>Создать</Button>
                    </div> 
                </div> 


                }
            </form>}

            <div>
                {manager&&!create&&!not_create&&
                <Button className="red" onClick={() => {
                    reset()
                    setFlag(res=>!res)
            }}>{!flag?"Редактировать": "Назад"}</Button>}
            </div>
            <div>
                <Button onClick={goBack}>Вернуться</Button> 
            </div>
        </div>
    )
}