import { FormChoiceService } from "../../FormComponents/FormChoiceService/FormChoiceService"
import { FormChoiceServiceOrg } from "../../FormComponents/FormChoiceServiceOrg/FormChoiceServiceOrg"

export const ColomnsService = [
    {
        Header: 'Машина',
        accessor: 'id',
        sticky: 'left',
        Cell: ({value}) => {return(<FormChoiceService value={value} name="id"></FormChoiceService>)}
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company.name',
        sticky: 'left',
    },
    {
        Header: 'дата проведения ТО',
        accessor: 'date_service',
    },
    {
        Header: 'Вид ТО',
        accessor: 'type_of_service.name'
    },
    {
        Header: 'наработка, м/час',
        accessor: 'working_hours'
    },
    {
        Header: '№ заказ-наряда',
        accessor: 'order_No'
    },
    {
        Header: 'дата заказ-наряда',
        accessor: 'date_order'
    },
]