import { Button } from "../../Button/Button"
import { FormChoiceReclamation } from "../../FormComponents/FormChoiceReclamation/FormChoiceReclamation"
import { ColumnFilter } from "../ColumnsFilter"

export const ColomnsReclamation = [
    {     
        Header: 'Марка машины',
        accessor: 'id',
        sticky: 'left',
        Cell: ({value}) => {return(<FormChoiceReclamation value={value} name="id"></FormChoiceReclamation>)},
        disableSortBy: true,
        Filter: ColumnFilter,
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company.name',
        disableSortBy: true,
        Filter: ColumnFilter,
    },
    {
        Header: 'дата отказа',
        accessor: 'date_of_failure',
    },
    {
        Header: 'наработка, м/час',
        accessor: 'working_hours',
        disableSortBy: true,
    },
    {
        Header: 'узел отказа',
        accessor: 'failure_node',
        disableSortBy: true,
        Filter: ColumnFilter,
        Cell: ({value}) => { return (<Button href={`http://localhost:3000/failurenode/${value.id}`}>{value.name}</Button>)}
    },
    {
        Header: 'описание отказа',
        accessor: 'description_of_failure',
        disableSortBy: true,

    },
    {
        Header: 'способ восстановления',
        accessor: 'recovery_method',
        disableSortBy: true,
        Filter: ColumnFilter,
        Cell: ({value}) => { return (<Button href={`http://localhost:3000/recoverymethod/${value.id}`}>{value.name}</Button>)}
    },
    {
        Header: 'используемые запасные части',
        accessor: 'spare_parts',
        disableSortBy: true,
    },
    {
        Header: 'дата восстановления',
        accessor: 'date_of_restoration',
        disableSortBy: true,
    },
    {
        Header: 'время простоя техники(дни)',
        accessor: 'downtime',
        disableSortBy: true,
    },
]