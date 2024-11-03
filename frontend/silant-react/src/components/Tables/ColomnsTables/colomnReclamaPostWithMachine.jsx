import { FormChoiceMachine } from '../../FormComponents/FormChoiceMachine/FormChoiceMachine';
import { FormChoiceServiceOrg } from '../../FormComponents/FormChoiceServiceOrg/FormChoiceServiceOrg';
import { FormSelectFromServer } from '../../FormComponents/FormComponentSelect/FormSelectFromServer';
import { Input } from '../../Input/Input'



export const ColomnsReclamationPOSTWithMachine = [

    {
        Header: 'Серийный номер',
        accessor: 'machine',
        sticky: 'left',
        Cell: () => { return (<FormChoiceMachine/>)},
        disableSortBy: true,
    },
    {
        Header: 'Сервисная компания',
        accessor: 'service_company',
        // sticky: 'left',
        Cell: () => { return (<FormChoiceServiceOrg/>)},
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
             message="обязательно заполнить"  name="failure_node">{value}</FormSelectFromServer>)},
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
        Cell: ({value}) => { return (<FormSelectFromServer  select="name" path="http://127.0.0.1:8000/api/service/v1/recoverymethod/"
             message="Выберете метод"  name="recovery_method">{value}</FormSelectFromServer>)},
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