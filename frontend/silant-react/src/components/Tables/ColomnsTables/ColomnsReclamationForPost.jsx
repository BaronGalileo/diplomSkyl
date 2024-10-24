import { FormChoiceMachine } from '../../FormComponents/FormChoiceMachine/FormChoiceMachine';
import { SelectFailureNode } from '../../FormComponents/FormComponentSelect/SelectFailure_node';
import { Input } from '../../Input/Input'



export const ColomnsReclamationPOST = [

    {
        Header: 'машина',
        accessor: 'machine',
        sticky: 'left',
        Cell: ({value}) => { return (<FormChoiceMachine name={"machine"}>{value}</FormChoiceMachine>)}
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company',
        // sticky: 'left',
        Cell: () => { return (<Input message="обязательно заполнить" name={'service_company'}></Input>)}
    },
    {
        Header: 'дата отказа',
        accessor: 'date_of_failure',
        Cell: ({value}) => { return (<Input message="обязательно заполнить" name={'date_of_failure'}></Input>)}
    },
    {
        Header: 'наработка, м/час',
        accessor: 'working_hours',
        Cell: () => { return (<Input message="обязательно заполнить" name={'working_hours'}></Input>)}
    },
    {
        Header: 'узел отказа',
        accessor: 'failure_node',
        Cell: ({value}) => { return (<SelectFailureNode message="обязательно заполнить" name="failure_node">{value}</SelectFailureNode>)}
    },
    {
        Header: 'описание отказа',
        accessor: 'description_of_failure',
        Cell: () => { return (<Input name={'description_of_failure'}></Input>)}
    },
    {
        Header: 'способ восстановления',
        accessor: 'recovery_method',
        Cell: () => { return (<Input name={'recovery_method'}></Input>)}
    },
    {
        Header: 'используемые запасные части',
        accessor: 'spare_parts',
        Cell: () => { return (<Input name={'spare_parts'}></Input>)}
    },
    {
        Header: 'дата восстановления',
        accessor: 'date_of_restoration',
        Cell: () => { return (<Input name={'date_of_restoration'}></Input>)}
    },
    {
        Header: 'время простоя техники',
        accessor: 'downtime',
        Cell: () => { return (<Input name={'downtime'}></Input>)}
    },
]