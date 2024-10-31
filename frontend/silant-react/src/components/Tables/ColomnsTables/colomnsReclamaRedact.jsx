import { RedactTextDate } from '../../ElementForRedaction/RedactTextDate';
import { RedactSelect } from '../../ElementForRedaction/RedactSelect';
import { RedactID } from '../../ElementForRedaction/RedactID';



export const ColomnsReclamaRedact = [

    {
        Header: 'машина',
        accessor: 'id',
        sticky: 'left',
        Cell: ({value}) => { return (<RedactID name="id" value={value}/>)},
        disableSortBy: true,
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company',
        disableSortBy: true,
    },
    {
        Header: 'дата отказа',
        accessor: 'date_of_failure',
        Cell: ({value}) => { return (<RedactTextDate  type="date" field_name={"date_of_failure"} value={value}></RedactTextDate>)},
        disableSortBy: true,
    },
    {
        Header: 'наработка, м/час',
        accessor: 'working_hours',
        Cell: ({value}) => { return (<RedactTextDate type="text" field_name={"working_hours"} value={value}></RedactTextDate>)},
        disableSortBy: true,
    },
    {
        Header: 'узел отказа',
        accessor: 'failure_node',
        Cell: ({value}) => { return (<RedactSelect path_for_serv="http://127.0.0.1:8000/api/service/v1/failurenode/"
             message="обязательно заполнить" value={value} field_name="failure_node"/>)},
        disableSortBy: true,
    },
    {
        Header: 'описание отказа',
        accessor: 'description_of_failure',
        Cell: ({value}) => { return (<RedactTextDate type="text" field_name={"description_of_failure"} value={value}></RedactTextDate>)},
        disableSortBy: true,
    },
    {
        Header: 'способ восстановления',
        accessor: 'recovery_method',
        Cell: ({value}) => { return (<RedactSelect path_for_serv="http://127.0.0.1:8000/api/service/v1/recoverymethod/"
            message="обязательно заполнить" value={value} field_name="recovery_method"/>)},
        disableSortBy: true,
    },
    {
        Header: 'используемые запасные части',
        accessor: 'spare_parts',
        Cell: ({value}) => { return (<RedactTextDate type="text" field_name={"spare_parts"} value={value}></RedactTextDate>)},
        disableSortBy: true,
    },
    {
        Header: 'дата восстановления',
        accessor: 'date_of_restoration',
        Cell: ({value}) => { return (<RedactTextDate  type="date" field_name={"date_of_restoration"} value={value}></RedactTextDate>)},
        disableSortBy: true,
    },
]