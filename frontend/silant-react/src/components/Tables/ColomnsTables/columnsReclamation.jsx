import { Checkbox } from "../../CheckBox/Checkbox"
import { FormChoiceReclamation } from "../../FormComponents/FormChoiceReclamation/FormChoiceReclamation"
import { FormTextOrСhange } from '../../FormComponents/FormTextOrСhange/FormTextOrСhange'

export const ColomnsReclamation = [
    {
        Header: 'Марка машины',
        accessor: 'id',
        sticky: 'left',
        Cell: ({value}) => {return(<FormChoiceReclamation value={value} name="id"></FormChoiceReclamation>)}
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
        // Cell: ({value}) => {return(<FormTextOrСhange>{value}</FormTextOrСhange>)}
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
        Header: 'время простоя техники',
        accessor: 'downtime'
    },
]