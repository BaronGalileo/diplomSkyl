import { RedactionText } from "../../ElementForRedaction/RedactionText"
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
        disableSortBy: true,
        Cell: ({value}) => { return (<Input classText="dark-color" type="text"  name={'brand'}>{value}</Input>)},
    },
    {
        Header: 'Модель техники',
        accessor: 'car_model',
        Cell: ({value}) => { return (<FormSelectFromServer path="http://127.0.0.1:8000/api/v1/carmodel/"
             message="обязательно заполнить" name="car_model" value={value.name}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Модель двигателя',
        accessor: 'engine_model',
        Cell: ({value}) => { return (<FormSelectFromServer path="http://127.0.0.1:8000/api/v1/enginemodel/"
             message="обязательно заполнить" name="engine_model" value={value.name}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Зав.№ двигателя',
        accessor: 'engine_num',
        Cell: ({value}) => { return (<Input type="text" classText="dark-color"  name={'engine_num'}>{value}</Input>)},
        disableSortBy: true,

    },
    {
        Header: 'Модель трансмиссии',
        accessor: 'transmission_model',
        Cell: ({value}) => { return (<FormSelectFromServer path="http://127.0.0.1:8000/api/v1/transmissionmodel/"
             message="обязательно заполнить" name="transmission_model" value={value.name} />)},
        disableSortBy: true,
    },
    {
        Header: 'Зав.№ трансмиссии',
        accessor: 'transmission_num',
        Cell: ({value}) => { return (<Input type="text" classText="dark-color"  name={'transmission_num'}>{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: 'Модель ведущего моста',
        accessor: 'driving_axle_model',
        Cell: ({value}) => { return (<FormSelectFromServer path="http://127.0.0.1:8000/api/v1/drivingaxlemodel/" 
            message="обязательно заполнить" name="driving_axle_model" value={value.name}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Зав.№ ведущего моста',
        accessor: 'driving_axle_num',
        Cell: ({value}) => { return (<Input type="text" classText="dark-color" name={'driving_axle_num'}>{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: 'Модель управляемого моста',
        accessor: 'model_of_a_controlled_bridge',
        Cell: ({value}) => { return (<FormSelectFromServer placeholder={value.name} path="http://127.0.0.1:8000/api/v1/modelofacontrolledbridge/"
             message="обязательно заполнить" name="model_of_a_controlled_bridge" value={value.name}/>)},
        disableSortBy: true,
    },
    {
        Header: 'Зав.№ управляемого моста',
        accessor: 'num_of_a_controlled_bridge',
        Cell: ({value}) => { return (<Input type="text" classText="dark-color" name={'num_of_a_controlled_bridge'}>{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: 'Договор поставки №, дата',
        accessor: 'contractNo',
        Cell: ({value}) => { return (<Input type="text" classText="dark-color" name={'contractNo'}>{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: 'Договор поставки №, дата',
        accessor: 'date_from_the_factory',
        Cell: ({value}) => { return (<Input type="date" classText="dark-color" name={'date_from_the_factory'}>{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: 'Грузополучатель(конечный потребитель)',
        accessor: 'consignee',
        Cell: ({value}) => { return (<Input type="text" classText="dark-color" name={'consignee'}>{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: 'Адрес поставки (эксплуатации)',
        accessor: 'delivery_address',
        Cell: ({value}) => { return (<Input type="text" classText="dark-color" name={'delivery_address'}>{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: 'Комплектация (доп. опции)',
        accessor: 'equipment',
        Cell: ({value}) => { return (<Input type="text"  name={'equipment'}>{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: 'Клиент',
        accessor: 'client',
        Cell: ({value}) => { return (<FormSelectFromServer user={true} placeholder={value.name} path="http://127.0.0.1:8000/users/v1/clients/" name="client.name" value={value.name}/>)},
    },
    {
        Header: 'Сервисная компания',
        accessor: 'service_company',
        Cell: ({value}) => { return (<FormSelectFromServer user={true} placeholder={value.name} path="http://127.0.0.1:8000/users/v1/servicesorgan/" name="service_company" value={value.name}/>)},
        disableSortBy: true,
    },
    {
        Header: 'id',
        accessor: 'id',
        Cell: ({value}) => { return (<IDInsible  type="hidden" name={'id'} value={value}/>)},
        disableSortBy: true,
    },
]