import { RedactElementNoyTouch } from '../../ElementForRedaction/RedactElementNoyTouch';
import { RedactID } from '../../ElementForRedaction/RedactID';
import { FormSelectFromServer } from '../../FormComponents/FormComponentSelect/FormSelectFromServer';
import { Input } from '../../Input/Input'


export const ColomnsServicePatch = [

    {
        Header: 'Зав.№ машины',
        accessor: 'id',
        sticky: 'left',
        Cell: ({value}) => {return(<RedactID id_data='services' value={value} name={"id"}/>)},
        disableSortBy: true,
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company',
        Cell: ({value}) => {return(<RedactElementNoyTouch  value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'дата проведения ТО',
        accessor: 'date_service',
        Cell: ({value}) => { return (<Input type="date" classText="dark-color" name={'date_service'}>{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: 'Вид ТО',
        accessor: 'type_of_service',
        Cell: ({value}) => { return (<FormSelectFromServer select="name" placeholder={value} path="http://127.0.0.1:8000/api/service/v1/typeofservice/" name="type_of_service">{value.name}</FormSelectFromServer>)},
        disableSortBy: true,
    },
    {
        Header: 'наработка, м/час',
        accessor: 'working_hours',
        Cell: ({value}) => { return (<Input type="number" classText="dark-color" name={'working_hours'}>{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: '№ заказ-наряда',
        accessor: 'order_No',
        Cell: ({value}) => { return (<Input type="text"  classText="dark-color" name={'order_No'} >{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: 'дата заказ-наряда',
        accessor: 'date_order',
        Cell: ({value}) => { return (<Input type="date" classText="dark-color" name={'date_order'} >{value}</Input>)},
        disableSortBy: true,
    },
]