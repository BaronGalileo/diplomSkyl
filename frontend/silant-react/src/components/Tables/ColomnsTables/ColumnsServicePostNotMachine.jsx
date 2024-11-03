import { FormSelectFromServer } from '../../FormComponents/FormComponentSelect/FormSelectFromServer';
import { Input } from '../../Input/Input'

export const ColomnsServicePostNotMachine = [
    {
        Header: 'Машина',
        accessor: 'machine.serial_num',
        sticky: 'left',
        Cell: ({value}) => { return (<FormSelectFromServer select="machine" message="обязательно заполнить" path="http://127.0.0.1:8000/api/v1/machine/" name="machine">{value}</FormSelectFromServer>)},
        // Cell: () => {return(<FindMachines path="http://127.0.0.1:8000/api/v1/machine" name='machine' />)},
        disableSortBy: true,
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company',
        sticky: 'left',
        Cell: ({value}) => {return(<FormSelectFromServer select="user" path="http://127.0.0.1:8000/users/v1/servicesorgan/" name='service_company' >{value}</FormSelectFromServer>)},
        disableSortBy: true,
    },
    {
        Header: 'дата проведения ТО',
        accessor: 'date_service',
        Cell: () => { return (<Input type="date"  name={'date_service'}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Вид ТО',
        accessor: 'type_of_service',
        Cell: ({value}) => { return (<FormSelectFromServer select="name" path="http://127.0.0.1:8000/api/service/v1/typeofservice/" message="обязательно заполнить"  name="type_of_service">{value}</FormSelectFromServer>)},
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