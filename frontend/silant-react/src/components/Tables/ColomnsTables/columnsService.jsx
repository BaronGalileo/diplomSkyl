import { FindTempateElement } from "../../FindTemplateElement/FindTemplateElement"
import { Text } from "../../Text/Text"
import { CheckBoxTable } from "../CheckBoxTable"
import { FilterComponySelect } from "../FiltersSelect/FilterComponySelect"
import { FilterNumber } from "../FiltersSelect/FilterNumber"
import { FilterTOSelect } from "../FiltersSelect/FilterTOSelect"

export const ColomnsService = [
    {
        Header: 'ID',
        accessor: 'id',
        sticky: 'left',
        Cell: ({value ,row}) => { return (
            <>
            <CheckBoxTable {...row.getToggleRowSelectedProps()} />
            <Text className="dark-color">{value}</Text>
            </>)},
        disableSortBy: true,
    },
    {
        Header: 'Серийный номер машины',
        accessor: 'machine.serial_num',
        sticky: 'left',
        disableSortBy: true,
        Filter: FilterNumber,
        Cell: ({value, row}) => { return (<FindTempateElement role="servis" name_fild="machine" data_row={row} path='machine/'>{value}</FindTempateElement>)},
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company.name',
        // sticky: 'left',
        disableSortBy: true,
        Filter: FilterComponySelect,
        Cell: ({value, row}) => { return (<FindTempateElement user role="servis" name_fild="service_company" data_row={row} path='servicecompany/'>{value}</FindTempateElement>)},
    },
    {
        Header: 'дата проведения ТО',
        accessor: 'date_service',
    },
    {
        Header: 'Вид ТО',
        accessor: 'type_of_service.name',
        disableSortBy: true,
        Filter: FilterTOSelect,
        Cell: ({value, row}) => { return (<FindTempateElement role="servis" name_fild="type_of_service" data_row={row} path='typeofservice/'>{value}</FindTempateElement>)},
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