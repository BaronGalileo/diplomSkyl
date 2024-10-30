import { FormSelectFromServer } from "../../FormComponents/FormComponentSelect/FormSelectFromServer"
import { Input } from "../../Input/Input"



export const ColumnsMachinePost = [
    {
        Header: 'Бренд',
        accessor: 'brand',
        sticky: 'left',
        Cell: () => { return (<Input type="text"  name={'brand'}/>)}
    },
    {   
        Header: 'Зав.№ машины',
        accessor: 'serial_num',
        sticky: 'left',
        Cell: () => { return (<Input type="text"  name={'serial_num'}/>)}
    },
    {
        Header: 'Модель техники',
        accessor: 'car_model',
        Cell: ({value}) => { return (<FormSelectFromServer path="http://127.0.0.1:8000/api/v1/carmodel/" message="обязательно заполнить" name="car_model" value={value}/>)}
    },
    {
        Header: 'Модель двигателя',
        accessor: 'engine_model',
        Cell: ({value}) => { return (<FormSelectFromServer path="http://127.0.0.1:8000/api/v1/enginemodel/" message="обязательно заполнить" name="engine_model" value={value}/>)}
    },
    {
        Header: 'Зав.№ двигателя',
        accessor: 'engine_num',
        Cell: () => { return (<Input type="text"  name={'engine_num'}/>)}

    },
    {
        Header: 'Модель трансмиссии',
        accessor: 'transmission_model',
        Cell: ({value}) => { return (<FormSelectFromServer path="http://127.0.0.1:8000/api/v1/transmissionmodel/" message="обязательно заполнить" name="transmission_model" value={value} />)}
    },
    {
        Header: 'Зав.№ трансмиссии',
        accessor: 'transmission_num',
        Cell: () => { return (<Input type="text"  name={'transmission_num'}/>)}
    },
    {
        Header: 'Модель ведущего моста',
        accessor: 'driving_axle_model',
        Cell: ({value}) => { return (<FormSelectFromServer path="http://127.0.0.1:8000/api/v1/drivingaxlemodel/" message="обязательно заполнить" name="driving_axle_model" value={value}/>)}
    },
    {
        Header: 'Зав.№ ведущего моста',
        accessor: 'driving_axle_num',
        Cell: () => { return (<Input type="text"  name={'driving_axle_num'}/>)}
    },
    {
        Header: 'Модель управляемого моста',
        accessor: 'model_of_a_controlled_bridge',
        Cell: ({value}) => { return (<FormSelectFromServer path="http://127.0.0.1:8000/api/v1/modelofacontrolledbridge/" message="обязательно заполнить" name="model_of_a_controlled_bridge" value={value}/>)}
    },
    {
        Header: 'Зав.№ управляемого моста',
        accessor: 'num_of_a_controlled_bridge',
        Cell: () => { return (<Input type="text"  name={'num_of_a_controlled_bridge'}/>)}
    },
    {
        Header: 'Договор поставки №, дата',
        accessor: 'contractNo',
        Cell: () => { return (<Input type="text"  name={'contractNo'}/>)}
    },
    {
        Header: 'Договор поставки №, дата',
        accessor: 'date_from_the_factory',
        Cell: () => { return (<Input type="date"  name={'date_from_the_factory'}/>)}
    },
    {
        Header: 'Грузополучатель(конечный потребитель)',
        accessor: 'consignee',
        Cell: () => { return (<Input type="text"  name={'consignee'}/>)}
    },
    {
        Header: 'Адрес поставки (эксплуатации)',
        accessor: 'delivery_address',
        Cell: () => { return (<Input type="text"  name={'delivery_address'}/>)}
    },
    {
        Header: 'Комплектация (доп. опции)',
        accessor: 'equipment',
        Cell: () => { return (<Input type="text"  name={'equipment'}/>)}
    },
    {
        Header: 'Клиент',
        accessor: 'client',
        Cell: ({value}) => { return (<FormSelectFromServer user={true} path="http://127.0.0.1:8000/users/v1/clients/" message="обязательно заполнить" name="client" value={value}/>)}
    },
    {
        Header: 'Сервисная компания',
        accessor: 'service_company',
        Cell: ({value}) => { return (<FormSelectFromServer user={true} path="http://127.0.0.1:8000/users/v1/servicesorgan/" message="обязательно заполнить" name="service_company"value={value}/>)}
    },
]