import { Checkbox } from "../../CheckBox/Checkbox"
import { ColumnFilter } from "../ColumnsFilter"


export const columnsFullMachine = [
    {   
        Header: 'Зав.№ машины',
        accessor: 'serial_num',
        sticky: 'left',
        Cell: ({value}) => { return (<Checkbox type="checkbox"  
            className="serian-num" message="Выберите одну машину" 
            id={value} name={"target_serial_num."+value}>{value}</Checkbox>)},
    },
    {
        Header: 'Бренд',
        accessor: 'brand',
        sticky: 'left',
        Filter: ColumnFilter
    },
    {
        Header: 'Модель техники',
        accessor: 'car_model.name',
        Filter: ColumnFilter
    },
    {
        Header: 'Модель двигателя',
        accessor: 'engine_model.name',
        Filter: ColumnFilter
    },
    {
        Header: 'Зав.№ двигателя',
        accessor: 'engine_num',
        // Filter: ColumnFilter
    },
    {
        Header: 'Модель трансмиссии',
        accessor: 'transmission_model.name',
        Filter: ColumnFilter
    },
    {
        Header: 'Зав.№ трансмиссии',
        accessor: 'transmission_num',
        // Filter: ColumnFilter
    },
    {
        Header: 'Модель ведущего моста',
        accessor: 'driving_axle_model.name',
        Filter: ColumnFilter
    },
    {
        Header: 'Зав.№ ведущего моста',
        accessor: 'driving_axle_num',
        // Filter: ColumnFilter
    },
    {
        Header: 'Модель управляемого моста',
        accessor: 'model_of_a_controlled_bridge.name',
        Filter: ColumnFilter
    },
    {
        Header: 'Зав.№ управляемого моста',
        accessor: 'num_of_a_controlled_bridge',
        // Filter: ColumnFilter
    },
    {
        Header: 'Договор поставки №, дата',
        accessor: 'contractNo',
        // Filter: ColumnFilter
    },
    {
        Header: 'Договор поставки №, дата',
        accessor: 'date_from_the_factory',
        // Filter: ColumnFilter
    },
    {
        Header: 'Грузополучатель(конечный потребитель)',
        accessor: 'consignee',
        // Filter: ColumnFilter
    },
    {
        Header: 'Адрес поставки (эксплуатации)',
        accessor: 'delivery_address',
        // Filter: ColumnFilter
    },
    {
        Header: 'Комплектация (доп. опции)',
        accessor: 'equipment',
        // Filter: ColumnFilter
    },
    {
        Header: 'Клиент',
        accessor: 'client.name',
        // Filter: ColumnFilter
    },
    {
        Header: 'Сервисная компания',
        accessor: 'service_company.name',
        // Filter: ColumnFilter
    },
]

