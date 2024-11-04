import { MachineFromTable } from "../../FindMachine/MachineFromTable"
import { FindTempateElement } from "../../FindTemplateElement/FindTemplateElement"
import { Text } from "../../Text/Text"
import { CheckBoxTable } from "../CheckBoxTable"
import { FilterComponySelect } from "../FiltersSelect/FilterComponySelect"
import { FilterNumber } from "../FiltersSelect/FilterNumber"
import { FilterTOSelect } from "../FiltersSelect/FilterTOSelect"

export const ColomnsService = [
    {   
        width:'70',
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
        Header: 'Зав.№ машины',
        accessor: 'machine.serial_num',
        disableSortBy: true,
        Filter: FilterNumber,
        Cell: ({value, row}) => { return (<FindTempateElement role="servis" name_fild="machine" data_row={row} path='machine/'>{value}</FindTempateElement>)},
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company.name',
        disableSortBy: true,
        Filter: FilterComponySelect,
        Cell: ({value, row}) => { return (<FindTempateElement user role="servis" name_fild="service_company" data_row={row} path='servicesorgan/'>{value}</FindTempateElement>)},
    },
    {
        Header: 'дата проведения ТО',
        accessor: 'date_service',
        Cell: ({value, row }) => {return(<MachineFromTable path_ser="servises/" data_row={row} field_value={value}/>)},
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
        Cell: ({value, row }) => {return(<MachineFromTable path_ser="servises/" data_row={row} field_value={value}/>)},
    },
    {
        Header: '№ заказ-наряда',
        accessor: 'order_No',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable path_ser="servises/" data_row={row} field_value={value}/>)},
    },
    {
        Header: 'дата заказ-наряда',
        accessor: 'date_order',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable path_ser="servises/" data_row={row} field_value={value}/>)},
    },
]