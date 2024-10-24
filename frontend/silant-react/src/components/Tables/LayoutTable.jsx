import React, { useMemo } from "react";
import { useTable } from 'react-table';
import './styles.css'

function LayoutTable({dataTable, columnsTable, ...resProps}) {




    const columns = useMemo(() => columnsTable, [])
    const data = useMemo(() => dataTable, [])


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow

    } = useTable({
        columns,
        data
    })


    return(
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr { ...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => 
                            (
                            <th {...column.getHeaderProps()}>{ column.render('Header')}</th>
                            ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                            {
                                row.cells.map(cell => {
                                    return(
                                        <td {...cell.getCellProps}>{cell.render('Cell')}</td>
                                    )
                                })
                            }
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export {LayoutTable}