import React, { useEffect, useMemo } from "react";
import { useTable, useBlockLayout, useRowSelect } from 'react-table';
import { useSticky } from 'react-table-sticky'
import { Styles } from "./TableStyles";
import { Checkbox } from "../CheckBox/Checkbox";




function StickyTable({dataTable, columnsTable, ...resProps}) {


  const columns = useMemo(() => columnsTable, [])
  const data = useMemo(() => dataTable, [])


  const {

    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useBlockLayout,
    useSticky
    )

    const firstPageRows = rows.slice(0, 20)

    return(
    <Styles>
      <div {...getTableProps()} className="table sticky" style={{ width: 900, height: 500 }}>
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render('Header')}
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
export {StickyTable}