import { FormChoiceReclamation } from "../../FormComponents/FormChoiceReclamation/FormChoiceReclamation"

export const ColomnsReclamation = [
    {
        Header: 'Марка машины',
        accessor: 'id',
        sticky: 'left',
        Cell: ({value}) => {return(<FormChoiceReclamation value={value} name="id"></FormChoiceReclamation>)}
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company.name',
    },
    {
        Header: 'дата отказа',
        accessor: 'date_of_failure',
    },
    {
        Header: 'наработка, м/час',
        accessor: 'working_hours'
    },
    {
        Header: 'узел отказа',
        accessor: 'failure_node.name'
    },
    {
        Header: 'описание отказа',
        accessor: 'description_of_failure',

    },
    {
        Header: 'способ восстановления',
        accessor: 'recovery_method.name'
    },
    {
        Header: 'используемые запасные части',
        accessor: 'spare_parts'
    },
    {
        Header: 'дата восстановления',
        accessor: 'date_of_restoration'
    },
    {
        Header: 'время простоя техники(дни)',
        accessor: 'downtime'
    },
]