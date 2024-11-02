import { RedactID } from '../../ElementForRedaction/RedactID';
import { RedactSelect } from '../../ElementForRedaction/RedactSelect';
import { RedactTextDate } from '../../ElementForRedaction/RedactTextDate';
import { FormSelectFromServer } from '../../FormComponents/FormComponentSelect/FormSelectFromServer';
import { Input } from '../../Input/Input'


export const ColomnsServicePatch = [

    {
        Header: 'Машина',
        accessor: 'id',
        sticky: 'left',
        Cell: ({value}) => {return(<RedactID id_data='services' value={value} name={"id"}/>)},
        disableSortBy: true,
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company',
        sticky: 'left',
        disableSortBy: true,
    },
    {
        Header: 'дата проведения ТО',
        accessor: 'date_service',
        Cell: ({value}) => { return (<Input type="date"  name={'date_service'}>{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: 'Вид ТО',
        accessor: 'type_of_service',
        Cell: ({value}) => { return (<FormSelectFromServer path="http://127.0.0.1:8000/api/service/v1/typeofservice/"
            message="обязательно заполнить" name="type_of_service">{value}</FormSelectFromServer>)},
        disableSortBy: true,
    },
    {
        Header: 'наработка, м/час',
        accessor: 'working_hours',
        Cell: ({value}) => { return (<Input type="number"  name={'working_hours'}>{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: '№ заказ-наряда',
        accessor: 'order_No',
        Cell: ({value}) => { return (<Input type="text"  name={'order_No'} >{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: 'дата заказ-наряда',
        accessor: 'date_order',
        Cell: ({value}) => { return (<Input type="date"  name={'date_order'} >{value}</Input>)},
        disableSortBy: true,
    },
]