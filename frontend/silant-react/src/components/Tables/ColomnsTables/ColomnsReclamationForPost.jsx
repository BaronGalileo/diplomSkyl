import { RedactTextDate } from '../../ElementForRedaction/RedactTextDate';
import { FormChoiceMachine } from '../../FormComponents/FormChoiceMachine/FormChoiceMachine';
import { FormChoiceServiceOrg } from '../../FormComponents/FormChoiceServiceOrg/FormChoiceServiceOrg';
import { FormSelectFromServer } from '../../FormComponents/FormComponentSelect/FormSelectFromServer';
import { Input } from '../../Input/Input'



export const ColomnsReclamationPOST = [

    {
        Header: 'машина',
        accessor: 'machine',
        sticky: 'left',
        Cell: () => { return (<FormChoiceMachine/>)}
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company',
        // sticky: 'left',
        Cell: () => { return (<FormChoiceServiceOrg/>)}
    },
    {
        Header: 'дата отказа',
        accessor: 'date_of_failure',
        Cell: () => { return (<Input type="date" message="Укажите дату поломки" name={'date_of_failure'}/>)}
    },
    {
        Header: 'наработка, м/час',
        accessor: 'working_hours',
        Cell: () => { return (<Input type="number" message="Укажите числом кол-во часов работы" name={'working_hours'}></Input>)}
    },
    {
        Header: 'узел отказа',
        accessor: 'failure_node',
        Cell: ({value}) => { return (<FormSelectFromServer path="http://127.0.0.1:8000/api/service/v1/failurenode/" message="обязательно заполнить" name="failure_node">{value}</FormSelectFromServer>)}
    },
    {
        Header: 'описание отказа',
        accessor: 'description_of_failure',
        Cell: () => { return (<Input name={'description_of_failure'}></Input>)}
    },
    {
        Header: 'способ восстановления',
        accessor: 'recovery_method',
        Cell: ({value}) => { return (<FormSelectFromServer path="http://127.0.0.1:8000/api/service/v1/recoverymethod/" message="Выберете метод" name="recovery_method">{value}</FormSelectFromServer>)}
    },
    {
        Header: 'используемые запасные части',
        accessor: 'spare_parts',
        Cell: () => { return (<Input name={'spare_parts'}></Input>)}
    },
    {
        Header: 'дата восстановления',
        accessor: 'date_of_restoration',
        Cell: () => { return (<Input type="date" name={'date_of_restoration'}></Input>)}
    },
]