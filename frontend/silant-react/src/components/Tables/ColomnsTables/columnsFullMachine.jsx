import { Button } from "../../Button/Button"
import { Checkbox } from "../../CheckBox/Checkbox"
import { MachineFromTable } from "../../FindMachine/MachineFromTable"
import { ColumnFilter } from "../ColumnsFilter"


export const columnsFullMachine = [
    {   
        Header: 'Зав.№ машины',
        accessor: 'serial_num',
        sticky: 'left',
        Cell: ({value}) => { return (<Checkbox type="checkbox"  
            className="serian-num" message="Выберите одну машину" 
            id={value} name={"target_serial_num."+value}>{value}</Checkbox>)},
        disableSortBy: true,
    },
    {
        Header: 'Бренд',
        accessor: 'brand',
        sticky: 'left',
        Filter: ColumnFilter,
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable data_row={row} field_value={value}/>)}
    },
    {
        Header: 'Модель техники',
        accessor: 'car_model',
        Filter: ColumnFilter,
        disableSortBy: true,
        Cell: ({value}) => { return (<Button href={`http://localhost:3000/carmodel/${value.id}`}>{value.name}</Button>)},
        // <a href={`http://localhost:3000/carmodel/${value.id}`}>{value.name}</a>

    },
    {
        Header: 'Модель двигателя',
        accessor: 'engine_model',
        Filter: ColumnFilter,
        disableSortBy: true,
        Cell: ({value}) => { return (<Button href={`http://localhost:3000/enginemodel/${value.id}`}>{value.name}</Button>)},
    },
    {
        Header: 'Зав.№ двигателя',
        accessor: 'engine_num',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable data_row={row} field_value={value}/>)}
        // Filter: ColumnFilter
    },
    {
        Header: 'Модель трансмиссии',
        accessor: 'transmission_model',
        Filter: ColumnFilter,
        disableSortBy: true,
        Cell: ({value}) => { return (<Button href={`http://localhost:3000/transmissionmodel/${value.id}`}>{value.name}</Button>)},
    },
    {
        Header: 'Зав.№ трансмиссии',
        accessor: 'transmission_num',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable data_row={row} field_value={value}/>)}
        // Filter: ColumnFilter
    },
    {
        Header: 'Модель ведущего моста',
        accessor: 'driving_axle_model',
        Filter: ColumnFilter,
        disableSortBy: true,
        Cell: ({value}) => { return (<Button href={`http://localhost:3000/drivingaxlemodel/${value.id}`}>{value.name}</Button>)},
    },
    {
        Header: 'Зав.№ ведущего моста',
        accessor: 'driving_axle_num',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable data_row={row} field_value={value}/>)}
        // Filter: ColumnFilter
    },
    {
        Header: 'Модель управляемого моста',
        accessor: 'model_of_a_controlled_bridge',
        Filter: ColumnFilter,
        disableSortBy: true,
        Cell: ({value}) => { return (<Button href={`http://localhost:3000/modelofacontrolled_bridge/${value.id}`}>{value.name}</Button>)},
    },
    {
        Header: 'Зав.№ управляемого моста',
        accessor: 'num_of_a_controlled_bridge',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable data_row={row} field_value={value}/>)}
        // Filter: ColumnFilter
    },
    {
        Header: 'Договор поставки №, дата',
        accessor: 'contractNo',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable data_row={row} field_value={value}/>)}
        // Filter: ColumnFilter
    },
    {
        Header: 'Дата отгрузки с завода',
        accessor: 'date_from_the_factory',
        Cell: ({value, row }) => {return(<MachineFromTable data_row={row} field_value={value}/>)}
        // Filter: ColumnFilter
    },
    {
        Header: 'Грузополучатель(конечный потребитель)',
        accessor: 'consignee',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable data_row={row} field_value={value}/>)}
        // Filter: ColumnFilter
    },
    {
        Header: 'Адрес поставки (эксплуатации)',
        accessor: 'delivery_address',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable data_row={row} field_value={value}/>)}
        // Filter: ColumnFilter
    },
    {
        Header: 'Комплектация (доп. опции)',
        accessor: 'equipment',
        disableSortBy: true,
        Cell: ({value, row }) => {return(<MachineFromTable data_row={row} field_value={value}/>)}
        // Filter: ColumnFilter
    },
    {
        Header: 'Клиент',
        accessor: 'client',
        disableSortBy: true,
        Cell: ({value}) => { return (<Button href={`http://localhost:3000/modelofacontrolled_bridge/${value.id}`}>{value.name}</Button>)}
        // Filter: ColumnFilter
    },
    {
        Header: 'Сервисная компания',
        accessor: 'service_company',
        disableSortBy: true,
        Cell: ({value}) => { return (<Button href={`http://localhost:3000/modelofacontrolled_bridge/${value.id}`}>{value.name}</Button>)}
        // Filter: ColumnFilter
    },
    {
        Header: 'id',
        accessor: 'id',
        disableSortBy: true,
        Cell: ({value}) => { return (<Button href={`http://localhost:3000/modelofacontrolled_bridge/${value.id}`}>{value.name}</Button>)}
        // Filter: ColumnFilter
    },

]

