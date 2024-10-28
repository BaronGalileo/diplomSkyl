import { RedactTextDate } from '../../ElementForRedaction/RedactTextDate';
import { RedactSelect } from '../../ElementForRedaction/RedactSelect';
import { FormChoiceMachine } from '../../FormComponents/FormChoiceMachine/FormChoiceMachine';
import { FormChoiceServiceOrg } from '../../FormComponents/FormChoiceServiceOrg/FormChoiceServiceOrg';
import { SelectFailureNode } from '../../FormComponents/FormComponentSelect/SelectFailure_node';
import { SelectRecoveryMethod } from '../../FormComponents/FormComponentSelect/SelectRecoveryMethod';
import { Input } from '../../Input/Input'
import { RedactID } from '../../ElementForRedaction/RedactID';



export const ColomnsReclamaRedact = [

    {
        Header: 'машина',
        accessor: 'id',
        sticky: 'left',
        Cell: ({value}) => { return (<RedactID name="id" value={value}/>)}
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company',
        // sticky: 'left',
        // Cell: () => { return (<FormChoiceServiceOrg/>)}
    },
    {
        Header: 'дата отказа',
        accessor: 'date_of_failure',
        Cell: ({value}) => { return (<RedactTextDate  type="date" field_name={"date_of_failure"} value={value}></RedactTextDate>)}
    },
    {
        Header: 'наработка, м/час',
        accessor: 'working_hours',
        Cell: ({value}) => { return (<RedactTextDate type="text" field_name={"working_hours"} value={value}></RedactTextDate>)}
    },
    {
        Header: 'узел отказа',
        accessor: 'failure_node',
        Cell: ({value}) => { return (<RedactSelect type="FailureNode" message="обязательно заполнить" value={value} field_name="failure_node"/>)}
    },
    {
        Header: 'описание отказа',
        accessor: 'description_of_failure',
        Cell: ({value}) => { return (<RedactTextDate type="text" field_name={"description_of_failure"} value={value}></RedactTextDate>)}
    },
    {
        Header: 'способ восстановления',
        accessor: 'recovery_method',
        Cell: ({value}) => { return (<RedactSelect type='RecoveryMethod' message="обязательно заполнить" value={value} field_name="recovery_method"/>)}
    },
    {
        Header: 'используемые запасные части',
        accessor: 'spare_parts',
        Cell: ({value}) => { return (<RedactTextDate type="text" field_name={"spare_parts"} value={value}></RedactTextDate>)}
    },
    {
        Header: 'дата восстановления',
        accessor: 'date_of_restoration',
        Cell: ({value}) => { return (<RedactTextDate  type="date" field_name={"date_of_restoration"} value={value}></RedactTextDate>)}
    },
    {
        Header: 'время простоя техники',
        accessor: 'downtime',
        Cell: ({value}) => { return (<RedactTextDate  type="number" field_name={"downtime"} value={value}></RedactTextDate>)}
    },
]