import React, { useMemo } from "react";
import { useTable, useBlockLayout, useSortBy, useFilters } from 'react-table';
import { useSticky } from 'react-table-sticky'
import { Styles } from "./TableStyles";





function StickyTableFilters({dataTable, columnsTable, ...resProps}) {

  const columns = useMemo(() => columnsTable, [])
  const data = useMemo(() => dataTable, [])

  const {

    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useBlockLayout,
    useSticky,
    useSortBy,
    )

    const firstPageRows = rows.slice(0, 20)


    return(
    <Styles>
      <div {...getTableProps()} className="table sticky" style={{ width: 800, height: "auto" }}>
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps(column.getSortByToggleProps())} className="th">
                  {column.render('Header')}
                  {column.Filter&&
                    <div>{column.canFilter ? column.render('Filter') : null}</div>} 
                    <span>
                    {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        {/* <div className="footer">
          {footerGroups.map((footerGroup) => (
            <div {...footerGroup.getHeaderGroupProps()} className="tr">
              {footerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="td">
                  {column.render('Footer')}
                </div>
              ))}
            </div>
          ))}
        </div> */}
      </div>
    </Styles>
    )
}
export {StickyTableFilters}