import { Checkbox } from "../../CheckBox/Checkbox"
import { FormChoiceReclamation } from "../../FormComponents/FormChoiceReclamation/FormChoiceReclamation"

export const ColomnsReclamation = [
    {
        Header: 'id',
        accessor: 'id',
        sticky: 'left',
        Cell: ({value}) => {return(<Checkbox value={value} name="id">{machine.brand}</Checkbox>)}
    },
    // {
    //     Header: 'машина',
    //     accessor: 'machine.brand',
    //     sticky: 'left',
    //     Cell: ({value}) => {return(<Checkbox type="checkbox" name={value}>{value}</Checkbox>)}
    // },
    {
        Header: 'сервисная компания',
        accessor: 'service_company.name',
        // sticky: 'left'
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
        accessor: 'description_of_failure'
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
        Header: 'время простоя техники',
        accessor: 'downtime'
    },
]