export const ColomnsReclamation = [
    {
        Header: 'машина',
        accessor: 'machine.brand',
        sticky: 'left'
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company.name',
        sticky: 'left'
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