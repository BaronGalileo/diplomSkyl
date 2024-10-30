import { RedactID } from '../../ElementForRedaction/RedactID';
import { RedactSelect } from '../../ElementForRedaction/RedactSelect';
import { RedactTextDate } from '../../ElementForRedaction/RedactTextDate';
import { Input } from '../../Input/Input'


export const ColomnsServicePatch = [

    {
        Header: 'Машина',
        accessor: 'id',
        sticky: 'left',
        Cell: ({value}) => {return(<RedactID id_data='services' value={value} name={"id"}/>)}
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company',
        sticky: 'left',
    },
    {
        Header: 'дата проведения ТО',
        accessor: 'date_service',
        Cell: ({value}) => { return (<RedactTextDate  type="date" field_name={"date_service"} value={value}></RedactTextDate>)}
    },
    {
        Header: 'Вид ТО',
        accessor: 'type_of_service',
        Cell: ({value}) => { return (<RedactSelect path_for_serv="http://127.0.0.1:8000/api/service/v1/typeofservice/" message="обязательно заполнить" field_name="type_of_service" value={value}/>)}
    },
    {
        Header: 'наработка, м/час',
        accessor: 'working_hours',
        Cell: ({value}) => { return (<RedactTextDate type="number"  field_name={'working_hours'} value={value}/>)}
    },
    {
        Header: '№ заказ-наряда',
        accessor: 'order_No',
        Cell: ({value}) => { return (<RedactTextDate type="text"  field_name={'order_No'} value={value}/>)}
    },
    {
        Header: 'дата заказ-наряда',
        accessor: 'date_order',
        Cell: ({value}) => { return (<RedactTextDate type="date"  field_name={'date_order'} value={value}/>)}
    },
]