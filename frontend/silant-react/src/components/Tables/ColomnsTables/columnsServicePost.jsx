import { FormChoiceMachine } from '../../FormComponents/FormChoiceMachine/FormChoiceMachine';
import { FormChoiceServiceOrg } from '../../FormComponents/FormChoiceServiceOrg/FormChoiceServiceOrg';
import { FormSelectFromServer } from '../../FormComponents/FormComponentSelect/FormSelectFromServer';
import { Input } from '../../Input/Input'

export const ColomnsServicePost = [
    {
        Header: 'Зав.№ машины',
        accessor: 'machine',
        sticky: 'left',
        Cell: () => {return(<FormChoiceMachine/>)},
        disableSortBy: true,
    },
    // {
    //     Header: 'сервисная компания',
    //     accessor: 'service_company',
    //     Cell: () => {return(<FormChoiceServiceOrg/>)},
    //     disableSortBy: true,
    // },
    {
        Header: 'дата проведения ТО',
        accessor: 'date_service',
        Cell: () => { return (<Input type="date"  name={'date_service'}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Вид ТО',
        accessor: 'type_of_service',
        Cell: ({value}) => { return (<FormSelectFromServer select="name" path="http://127.0.0.1:8000/api/service/v1/typeofservice/" message="обязательно заполнить" name="type_of_service">{value}</FormSelectFromServer>)},
        disableSortBy: true,
    },
    {
        Header: 'наработка, м/час',
        accessor: 'working_hours',
        Cell: () => { return (<Input type="number" message="Укажите числом кол-во часов работы" name={'working_hours'}></Input>)},
        disableSortBy: true,
    },
    {
        Header: '№ заказ-наряда',
        accessor: 'order_No',
        Cell: () => { return (<Input type="text"  name={'order_No'}></Input>)},
        disableSortBy: true,
    },
    {
        Header: 'дата заказ-наряда',
        accessor: 'date_order',
        Cell: () => { return (<Input type="date"  name={'date_order'}></Input>)},
        disableSortBy: true,
    },

]