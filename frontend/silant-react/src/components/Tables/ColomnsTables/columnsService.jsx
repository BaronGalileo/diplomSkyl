export const ColomnsService = [
    {
        Header: 'Машина',
        accessor: 'machine.brand',
        sticky: 'left'
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company.name',
        sticky: 'left'
    },
    {
        Header: 'дата проведения ТО',
        accessor: 'date_service',
    },
    {
        Header: 'Вид ТО',
        accessor: 'type_of_service.name'
    },
    {
        Header: 'наработка, м/час',
        accessor: 'working_hours'
    },
    {
        Header: '№ заказ-наряда',
        accessor: 'order_No'
    },
    {
        Header: 'дата заказ-наряда',
        accessor: 'date_order'
    },
]