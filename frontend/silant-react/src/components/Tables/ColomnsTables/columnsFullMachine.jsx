import { Checkbox } from "../../CheckBox/Checkbox"


export const columnsFullMachine = [
    {   
        Header: 'Зав.№ машины',
        accessor: 'serial_num',
        sticky: 'left',
        Cell: ({value}) => { return (<Checkbox message="Выберите хотя бы одну машину" name={value}>{value}</Checkbox>)}
    },
    {
        Header: 'Бренд',
        accessor: 'brand',
        sticky: 'left',
        Cell: ({value}) => { return (<a href={value}>{value}</a>)}
    },
    {
        Header: 'Модель техники',
        accessor: 'car_model.name',
    },
    {
        Header: 'Модель двигателя',
        accessor: 'engine_model.name'
    },
    {
        Header: 'Зав.№ двигателя',
        accessor: 'engine_num'
    },
    {
        Header: 'Модель трансмиссии',
        accessor: 'transmission_model.name'
    },
    {
        Header: 'Зав.№ трансмиссии',
        accessor: 'transmission_num'
    },
    {
        Header: 'Модель ведущего моста',
        accessor: 'driving_axle_model.name'
    },
    {
        Header: 'Зав.№ ведущего моста',
        accessor: 'driving_axle_num'
    },
    {
        Header: 'Модель управляемого моста',
        accessor: 'model_of_a_controlled_bridge.name'
    },
    {
        Header: 'Зав.№ управляемого моста',
        accessor: 'num_of_a_controlled_bridge'
    },
    {
        Header: 'Договор поставки №, дата',
        accessor: 'contractNo'
    },
    {
        Header: 'Договор поставки №, дата',
        accessor: 'date_from_the_factory'
    },
    {
        Header: 'Грузополучатель(конечный потребитель)',
        accessor: 'consignee'
    },
    {
        Header: 'Адрес поставки (эксплуатации)',
        accessor: 'delivery_address'
    },
    {
        Header: 'Комплектация (доп. опции)',
        accessor: 'equipment'
    },
    {
        Header: 'Клиент',
        accessor: 'client.name'
    },
    {
        Header: 'Сервисная компания',
        accessor: 'service_company.name'
    },
]