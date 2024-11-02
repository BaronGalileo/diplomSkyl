import React, { useEffect, useMemo } from "react";
import { useTable, useBlockLayout, useSortBy, useFilters, useRowSelect} from 'react-table';
import { useSticky } from 'react-table-sticky'
import { Styles } from "./TableStyles";
import { useDispatch } from "react-redux";
import { setTargetServID, removeTargetServID } from "../../store/servicesSlice";






function StickyTableServes({dataTable, columnsTable, ...resProps}) {

  const columns = useMemo(() => columnsTable, [])
  const data = useMemo(() => dataTable, [])

  const dispatch  = useDispatch()

  const {

    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      stateReducer: (newState, action) => {
        if (action.type === "toggleRowSelected") {
          debugger
          if(!action.value){
            dispatch(removeTargetServID())
          }
          newState.selectedRowIds = {
            [action.id]: action.value
          }
        }
        return newState;
    },
    },
    useFilters,
    useBlockLayout,
    useSticky,
    useSortBy,
    useRowSelect,
  )

  useEffect(() => {
    if(selectedFlatRows[0]?.isSelected){
        dispatch(setTargetServID(selectedFlatRows[0].values.id))
      }
  },[selectedFlatRows])
  
    

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
                    {!column.disableSortBy&&
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : '🔃'}
                  </span>}
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
                  <div {...cell.getCellProps()} className={`td ${row.id}`}>
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>

      </div>
    </Styles>
    )
}
export {StickyTableServes}