import { FormSelectFromServer } from '../../FormComponents/FormComponentSelect/FormSelectFromServer';
import { Input } from '../../Input/Input'
import { SelectForReclama } from '../../ReclamationTable/SelectForReclama';



export const ColomnsReclamationPOST = [

    {
        Header: 'машина',
        accessor: 'machine',
        sticky: 'left',
        Cell: () => { return (<SelectForReclama name="machine" machine path="http://127.0.0.1:8000/api/v1/machine/"/>)},
        disableSortBy: true,
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company',
        // sticky: 'left',
        Cell: () => { return (<SelectForReclama name="service_company" path="http://127.0.0.1:8000/users/v1/servicesorgan/"/>)},
        disableSortBy: true,
    },
    {
        Header: 'дата отказа',
        accessor: 'date_of_failure',
        Cell: () => { return (<Input type="date" message="Укажите дату поломки" name={'date_of_failure'}/>)},
        disableSortBy: true,
    },
    {
        Header: 'наработка, м/час',
        accessor: 'working_hours',
        Cell: () => { return (<Input type="number" message="Укажите числом кол-во часов работы" name={'working_hours'}></Input>)},
        disableSortBy: true,
    },
    {
        Header: 'узел отказа',
        accessor: 'failure_node',
        Cell: ({value}) => { return (<FormSelectFromServer select="name" path="http://127.0.0.1:8000/api/service/v1/failurenode/"
             message="обязательно заполнить" name="failure_node">{value}</FormSelectFromServer>)},
        disableSortBy: true,
    },
    {
        Header: 'описание отказа',
        accessor: 'description_of_failure',
        Cell: () => { return (<Input name={'description_of_failure'}></Input>)},
        disableSortBy: true,
    },
    {
        Header: 'способ восстановления',
        accessor: 'recovery_method',
        Cell: ({value}) => { return (<FormSelectFromServer select="name" path="http://127.0.0.1:8000/api/service/v1/recoverymethod/"
             message="Выберете метод" name="recovery_method">{value}</FormSelectFromServer>)},
        disableSortBy: true,
    },
    {
        Header: 'используемые запасные части',
        accessor: 'spare_parts',
        Cell: () => { return (<Input name={'spare_parts'}></Input>)},
        disableSortBy: true,
    },
    {
        Header: 'дата восстановления',
        accessor: 'date_of_restoration',
        Cell: () => { return (<Input type="date" name={'date_of_restoration'}></Input>)},
        disableSortBy: true,
    },
]