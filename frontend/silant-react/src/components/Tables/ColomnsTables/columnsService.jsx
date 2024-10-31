import { FormChoiceService } from "../../FormComponents/FormChoiceService/FormChoiceService"
import { ColumnFilter } from "../ColumnsFilter"

export const ColomnsService = [
    {
        Header: 'Зав.№ машины',
        accessor: 'id',
        sticky: 'left',
        Cell: ({value}) => {return(<FormChoiceService value={value} name="id"></FormChoiceService>)},
        disableSortBy: true,
        Filter: ColumnFilter,
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company.name',
        sticky: 'left',
        disableSortBy: true,
        Filter: ColumnFilter,
    },
    {
        Header: 'дата проведения ТО',
        accessor: 'date_service',
    },
    {
        Header: 'Вид ТО',
        accessor: 'type_of_service.name',
        disableSortBy: true,
        Filter: ColumnFilter,
    },
    {
        Header: 'наработка, м/час',
        accessor: 'working_hours',
        disableSortBy: true,
    },
    {
        Header: '№ заказ-наряда',
        accessor: 'order_No',
        disableSortBy: true,
    },
    {
        Header: 'дата заказ-наряда',
        accessor: 'date_order',
        disableSortBy: true,
    },
]