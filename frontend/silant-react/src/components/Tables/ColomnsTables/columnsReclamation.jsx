import { Button } from "../../Button/Button"
import { FindTempateElement } from "../../FindTemplateElement/FindTemplateElement"
import { FindTempateServisOrg } from "../../FindTemplateElement/FindTemplateServisOrg"
import { Text } from "../../Text/Text"
import { CheckBoxTable } from "../CheckBoxTable"
import { ColumnFilter } from "../ColumnsFilter"
import { FilterComponySelect } from "../FiltersSelect/FilterComponySelect"
import { FilterNodeSelect } from "../FiltersSelect/FilterNodeSelect"
import { FilterRecoveryMetod } from "../FiltersSelect/FilterRecoveryMetod"

export const ColomnsReclamation = [
    {     
        Header: 'Id',
        accessor: 'id',
        sticky: 'left',
        Cell: ({value ,row}) => { return (
            <>
            <CheckBoxTable {...row.getToggleRowSelectedProps()} />
            <Text className="dark-color">{value}</Text>
            </>)},
        disableSortBy: true,
    },
    {
        Header: 'сервисная компания',
        accessor: 'service_company.name',
        disableSortBy: true,
        Filter: FilterComponySelect,
        Cell: ({value, row}) => { return (<FindTempateServisOrg data_row={row} path='servicesorgan/'>{value}</FindTempateServisOrg>)},

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
        accessor: 'failure_node.name',
        disableSortBy: true,
        Filter: FilterNodeSelect,
        Cell: ({value, row}) => { return (<FindTempateServisOrg data_row={row} path='failurenode/'>{value}</FindTempateServisOrg>)},
    },
    {
        Header: 'описание отказа',
        accessor: 'description_of_failure',
        disableSortBy: true,

    },
    {
        Header: 'способ восстановления',
        accessor: 'recovery_method.name',
        disableSortBy: true,
        Filter: FilterRecoveryMetod,
        Cell: ({value, row}) => { return (<FindTempateServisOrg data_row={row} path='recoverymethod/'>{value}</FindTempateServisOrg>)},
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