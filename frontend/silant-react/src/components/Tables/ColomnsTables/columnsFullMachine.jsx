import { Button } from "../../Button/Button"
import { Checkbox } from "../../CheckBox/Checkbox"
import { MachineFromTable } from "../../FindMachine/MachineFromTable"
import { FindTempateElement } from "../../FindTemplateElement/FindTemplateElement"
import { Text } from "../../Text/Text"
import { CheckBoxTable } from "../CheckBoxTable"
import { ColumnFilterSelect } from "../ColomnsFilterSelect"
import { ColumnFilter } from "../ColumnsFilter"
import { FilterModelSelect } from "../FiltersSelect/FilterModelSelect"
import { FilterEngeneSelect } from "../FiltersSelect/FilterEngeneSelect"
import { FilterDriveMost } from "../FiltersSelect/FilterDriveMost"
import { FilterAxeModel } from "../FiltersSelect/FilterAxeModel"



export const columnsFullMachine = [
    {   
        Header: 'Зав.№ машины',
        accessor: 'serial_num',
        sticky: 'left',
        Cell: ({value ,row}) => { return (
        <>
        <CheckBoxTable {...row.getToggleRowSelectedProps()} />
        <Text className="dark-color">{value}</Text>
        </>)},
        disableSortBy: true,
    },
    {
        Header: 'Бренд',
        accessor: 'brand',
        sticky: 'left',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable   path_ser="machine/" data_row={row} field_value={value}/>)}
    },
    {
        Header: 'Модель техники',
        accessor: 'car_model.name',
        Filter: FilterModelSelect,
        disableSortBy: true,
        Cell: ({value, row}) => { return (<FindTempateElement name_fild="car_model" role="machine" data_row={row} path='carmodel/'>{value}</FindTempateElement>)},
    },
    {
        Header: 'Модель двигателя',
        accessor: 'engine_model.name',
        Filter: FilterEngeneSelect,
        disableSortBy: true,
        Cell: ({value, row}) => { return (<FindTempateElement name_fild="engine_model"  role="machine" data_row={row} path='enginemodel/'>{value}</FindTempateElement>)},
    },
    {
        Header: 'Зав.№ двигателя',
        accessor: 'engine_num',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable path_ser="machine/" data_row={row} field_value={value}/>)}

    },
    {
        Header: 'Модель трансмиссии',
        accessor: row => row.transmission_model.name,
        Filter: ColumnFilterSelect,
        disableSortBy: true,
        Cell: ({value, row}) => { return (<FindTempateElement name_fild="transmission_model" role="machine" data_row={row} path='transmissionmodel/'>{value}</FindTempateElement>)},
    },
    {
        Header: 'Зав.№ трансмиссии',
        accessor: 'transmission_num',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable path_ser="machine/" data_row={row} field_value={value}/>)}

    },
    {
        Header: 'Модель ведущего моста',
        accessor: 'driving_axle_model.name',
        Filter: FilterAxeModel,
        disableSortBy: true,
        Cell: ({value, row}) => { return (<FindTempateElement name_fild="driving_axle_model" role="machine" data_row={row} path='drivingaxlemodel/'>{value}</FindTempateElement>)},
    },
    {
        Header: 'Зав.№ ведущего моста',
        accessor: 'driving_axle_num',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable path_ser="machine/" data_row={row} field_value={value}/>)}

    },
    {
        Header: 'Модель управляемого моста',
        accessor: 'model_of_a_controlled_bridge.name',
        Filter: FilterDriveMost,
        disableSortBy: true,
        Cell: ({value, row}) => { return (<FindTempateElement name_fild="model_of_a_controlled_bridge" role="machine" data_row={row} path='modelofacontrolledbridge/'>{value}</FindTempateElement>)},
    },
    {
        Header: 'Зав.№ управляемого моста',
        accessor: 'num_of_a_controlled_bridge',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable path_ser="machine/" data_row={row} field_value={value}/>)}
    },
    {
        Header: 'Договор поставки №, дата',
        accessor: 'contractNo',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable path_ser="machine/" data_row={row} field_value={value}/>)}

    },
    {
        Header: 'Дата отгрузки с завода',
        accessor: 'date_from_the_factory',
        Cell: ({value, row }) => {return(<MachineFromTable path_ser="machine/" data_row={row} field_value={value}/>)}

    },
    {
        Header: 'Грузополучатель(конечный потребитель)',
        accessor: 'consignee',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable path_ser="machine/" data_row={row} field_value={value}/>)}

    },
    {
        Header: 'Адрес поставки (эксплуатации)',
        accessor: 'delivery_address',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable path_ser="machine/" data_row={row} field_value={value}/>)}
    },
    {
        Header: 'Клиент',
        accessor: 'client',
        disableSortBy: true,
        Cell: ({value}) => { return (<Button clean className="btn-table" href={`http://localhost:3000/client/${value.user}`}>{value.name}</Button>)}
    },
    {
        Header: 'Сервисная компания',
        accessor: 'service_company',
        disableSortBy: true,
        Cell: ({value}) => { return (<Button clean className="btn-table" href={`http://localhost:3000/servicesorgan/${value.user}`}>{value.name}</Button>)},
    },
    {
        Header: 'id',
        accessor: 'id',
        disableSortBy: true,
    },
    {
        Header: 'Комплектация (доп. опции)',
        accessor: 'equipment',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable path_ser="machine/" data_row={row} field_value={value}/>)}
    },

]

