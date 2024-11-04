import { RedactElementNoyTouch } from '../../ElementForRedaction/RedactElementNoyTouch';
import { RedactID } from '../../ElementForRedaction/RedactID';
import { FormSelectFromServer } from '../../FormComponents/FormComponentSelect/FormSelectFromServer';
import { Input } from '../../Input/Input';



export const ColomnsReclamaRedact = [

    {   width:'70',
        Header: 'машина',
        accessor: 'id',
        sticky: 'left',
        Cell: ({value}) => { return (<RedactID name="id" value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company',
        Cell: ({value}) => {return(<RedactElementNoyTouch  value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'дата отказа',
        accessor: 'date_of_failure',
        Cell: ({value}) => { return (<Input type="date" classText="dark-color" name={'date_of_failure'}>{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: 'наработка, м/час',
        accessor: 'working_hours',
        Cell: ({value}) => { return (<Input type="number" classText="dark-color" valueAsNumber name={'working_hours'}>{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: 'узел отказа',
        accessor: 'failure_node',
        Cell: ({value}) => { return (<FormSelectFromServer  select="name" placeholder={value.name} path="http://127.0.0.1:8000/api/service/v1/failurenode/" name="failure_node">{value.name}</FormSelectFromServer>)},
        disableSortBy: true,
    },
    {
        Header: 'описание отказа',
        accessor: 'description_of_failure',
        Cell: ({value}) => { return (<Input classText="dark-color" name={'description_of_failure'}>{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: 'способ восстановления',
        accessor: 'recovery_method',
        Cell: ({value}) => { return (<FormSelectFromServer select="name" placeholder={value.name} path="http://127.0.0.1:8000/api/service/v1/recoverymethod/" name="recovery_method">{value.name}</FormSelectFromServer>)},
        disableSortBy: true,
    },
    {
        Header: 'используемые запасные части',
        accessor: 'spare_parts',
        Cell: ({value}) => { return (<Input classText="dark-color" name={'spare_parts'}>{value}</Input>)},
        disableSortBy: true,
    },
    {
        Header: 'дата восстановления',
        accessor: 'date_of_restoration',
        Cell: ({value}) => { return (<Input type="date" classText="dark-color" name={'date_of_restoration'}>{value}</Input>)},
        disableSortBy: true,
    },
]