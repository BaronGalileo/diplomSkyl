import { RedactSelect } from "../../ElementForRedaction/RedactSelect"
import { RedactTextDate } from "../../ElementForRedaction/RedactTextDate"
import { FormSelectFromServer } from "../../FormComponents/FormComponentSelect/FormSelectFromServer"
import { IDInsible } from "../../FormComponents/IDInsible.jsx/IDInsible"
import { Input } from "../../Input/Input"



export const ColumnsMachinePatch = [
    {
        Header: 'Бренд',
        accessor: 'brand',
        sticky: 'left',
        Cell: ({value}) => { return (<RedactTextDate type="text"  field_name={'brand'} value={value}/>)},
        disableSortBy: true,
    },
    // {   
    //     Header: 'Зав.№ машины',
    //     accessor: 'serial_num',
    //     sticky: 'left',
    //     Cell: () => { return (<Input type="text"  name={'serial_num'}/>)}
    // },
    {
        Header: 'Модель техники',
        accessor: 'car_model',
        Cell: ({value}) => { return (<RedactSelect path_for_serv="http://127.0.0.1:8000/api/v1/carmodel/"
             message="обязательно заполнить" field_name="car_model" value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Модель двигателя',
        accessor: 'engine_model',
        Cell: ({value}) => { return (<RedactSelect path_for_serv="http://127.0.0.1:8000/api/v1/enginemodel/"
             message="обязательно заполнить" field_name="engine_model" value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Зав.№ двигателя',
        accessor: 'engine_num',
        Cell: ({value}) => { return (<RedactTextDate type="text" value={value} field_name={'engine_num'}/>)},
        disableSortBy: true,

    },
    {
        Header: 'Модель трансмиссии',
        accessor: 'transmission_model',
        Cell: ({value}) => { return (<RedactSelect path_for_serv="http://127.0.0.1:8000/api/v1/transmissionmodel/"
             message="обязательно заполнить" field_name="transmission_model" value={value} />)},
        disableSortBy: true,
    },
    {
        Header: 'Зав.№ трансмиссии',
        accessor: 'transmission_num',
        Cell: ({value}) => { return (<RedactTextDate type="text" value={value}  field_name={'transmission_num'}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Модель ведущего моста',
        accessor: 'driving_axle_model',
        Cell: ({value}) => { return (<RedactSelect path_for_serv="http://127.0.0.1:8000/api/v1/drivingaxlemodel/" 
            message="обязательно заполнить" field_name="driving_axle_model" value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Зав.№ ведущего моста',
        accessor: 'driving_axle_num',
        Cell: ({value}) => { return (<RedactTextDate type="text"  field_name={'driving_axle_num'} value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Модель управляемого моста',
        accessor: 'model_of_a_controlled_bridge',
        Cell: ({value}) => { return (<RedactSelect path_for_serv="http://127.0.0.1:8000/api/v1/modelofacontrolledbridge/"
             message="обязательно заполнить" field_name="model_of_a_controlled_bridge" value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Зав.№ управляемого моста',
        accessor: 'num_of_a_controlled_bridge',
        Cell: ({value}) => { return (<RedactTextDate type="text"  field_name={'num_of_a_controlled_bridge'} value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Договор поставки №, дата',
        accessor: 'contractNo',
        Cell: ({value}) => { return (<RedactTextDate type="text"  field_name={'contractNo'} value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Договор поставки №, дата',
        accessor: 'date_from_the_factory',
        Cell: ({value}) => { return (<RedactTextDate type="date"  field_name={'date_from_the_factory'} value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Грузополучатель(конечный потребитель)',
        accessor: 'consignee',
        Cell: ({value}) => { return (<RedactTextDate type="text"  field_name={'consignee'} value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Адрес поставки (эксплуатации)',
        accessor: 'delivery_address',
        Cell: ({value}) => { return (<RedactTextDate type="text"  field_name={'delivery_address'} value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Комплектация (доп. опции)',
        accessor: 'equipment',
        Cell: ({value}) => { return (<RedactTextDate type="text"  field_name={'equipment'} value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Клиент',
        accessor: 'client',
        Cell: ({value}) => { return (<RedactSelect field_user={true} path_for_serv="http://127.0.0.1:8000/users/v1/clients/"  field_name="client" value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Сервисная компания',
        accessor: 'service_company',
        Cell: ({value}) => { return (<RedactSelect field_user={true} path_for_serv="http://127.0.0.1:8000/users/v1/servicesorgan/" field_name="service_company" value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'id',
        accessor: 'id',
        Cell: ({value}) => { return (<IDInsible  type="hidden" name={'id'} value={value}/>)},
        disableSortBy: true,
    },
]