import React, { useEffect, useMemo, useState } from "react";
import { useTable, useBlockLayout, useSortBy, useFilters,usePagination, useRowSelect} from 'react-table';
import { useSticky } from 'react-table-sticky'
import { Styles } from "./TableStyles";
import { useDispatch } from "react-redux";
import { removeTargetmachine, setTargetmachine } from "../../store/targetmachineSlice";
import { Button } from "../Button/Button";





function StickyTableFilters({dataTable, columnsTable, ...resProps}) {

  const columns = useMemo(() => columnsTable, [])
  const data = useMemo(() => dataTable, [])

  const dispatch  = useDispatch()

  const {

    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,   
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      stateReducer: (newState, action) => {
        if (action.type === "toggleRowSelected") {
          if(!action.value){
            dispatch(removeTargetmachine())
          }
          newState.selectedRowIds = {
            [action.id]: action.value
          }
        }
        return newState;
    },
    },
    useFilters,
    useSortBy,
    usePagination,
    useBlockLayout,
    useSticky,
    useRowSelect,
  )

  useEffect(() => {
    if(selectedFlatRows[0]?.isSelected){
      dispatch(setTargetmachine(selectedFlatRows[0].values.serial_num))

    } else dispatch(removeTargetmachine())
  },[selectedFlatRows])

const [screenWidth, setScreenWidth] = useState(window.innerWidth - 200);

window.addEventListener('resize', function () {
  if(window.innerWidth<= screenWidth){
    setScreenWidth(window.innerWidth - 200)
  }
  else if(window.innerWidth > 350 + screenWidth){
    setScreenWidth(window.innerWidth - 200)
  }
})

  useEffect(() => {

}, [screenWidth]); 




    return(
      <>

    <Styles>
      <div {...getTableProps()} className="table sticky" style={{ width: screenWidth, height: "auto" }} >
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
          {page.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className='td'>
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>

            );
          })}
        </div>
      </div>
    </Styles>
    <div>
      <Button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<<<'}</Button>
      <Button onClick={() => nextPage()} disabled={!canNextPage}>{'>>>'}</Button>
    </div>
    </>
    )
}
export {StickyTableFilters}