import { Button } from "../../Button/Button"
import { FindTempateElement } from "../../FindTemplateElement/FindTemplateElement"
import { FindTempateServisOrg } from "../../FindTemplateElement/FindTemplateServisOrg"
import { FindTempateReclama } from "../../FindTemplateElement/FindTemplateReclama"
import { Text } from "../../Text/Text"
import { CheckBoxTable } from "../CheckBoxTable"
import { FilterComponySelect } from "../FiltersSelect/FilterComponySelect"
import { FilterNodeSelect } from "../FiltersSelect/FilterNodeSelect"
import { FilterRecoveryMetod } from "../FiltersSelect/FilterRecoveryMetod"

export const ColomnsReclamation = [
    {   
        width:'50',    
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
        Cell: ({value, row}) => { return (<FindTempateReclama data_row={row} path='reclamation/'>{value}</FindTempateReclama>)},
    },
    {
        Header: 'наработка, м/час',
        accessor: 'working_hours',
        disableSortBy: true,
        Cell: ({value, row}) => { return (<FindTempateReclama data_row={row} path='reclamation/'>{value}</FindTempateReclama>)},
    },
    {
        Header: 'узел отказа',
        accessor: 'failure_node.name',
        disableSortBy: true,
        Filter: FilterNodeSelect,
        Cell: ({value, row}) => { return (<FindTempateElement name_fild="failure_node" role="reclama" data_row={row} path='failurenode/'>{value}</FindTempateElement>)},
    },
    {
        Header: 'описание отказа',
        accessor: 'description_of_failure',
        Cell: ({value, row}) => { return (<FindTempateReclama data_row={row} path='reclamation/'>{value}</FindTempateReclama>)},
        disableSortBy: true,

    },
    {
        Header: 'способ восстановления',
        accessor: 'recovery_method.name',
        disableSortBy: true,
        Filter: FilterRecoveryMetod,
        Cell: ({value, row}) => { return (<FindTempateElement name_fild="recovery_method" role="reclama" data_row={row} path='recoverymethod/'>{value}</FindTempateElement>)},
    },
    {
        Header: 'используемые запасные части',
        accessor: 'spare_parts',
        disableSortBy: true,
        Cell: ({value, row}) => { return (<FindTempateReclama data_row={row} path='reclamation/'>{value}</FindTempateReclama>)},
    },
    {
        Header: 'дата восстановления',
        accessor: 'date_of_restoration',
        disableSortBy: true,
        Cell: ({value, row}) => { return (<FindTempateReclama data_row={row} path='reclamation/'>{value}</FindTempateReclama>)},
    },
    {
        Header: 'время простоя техники(дни)',
        accessor: 'downtime',
        disableSortBy: true,
        Cell: ({value, row}) => { return (<FindTempateReclama data_row={row} path='reclamation/'>{value}</FindTempateReclama>)},
    },
]