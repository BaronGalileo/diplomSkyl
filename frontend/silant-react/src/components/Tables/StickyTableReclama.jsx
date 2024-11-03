import React, { useEffect, useMemo, useState } from "react";
import { useTable, useBlockLayout, useSortBy, useFilters, usePagination, useRowSelect} from 'react-table';
import { useSticky } from 'react-table-sticky'
import { Styles } from "./TableStyles";
import { useDispatch } from "react-redux";
import { removeReclamaID, setReclamaID } from "../../store/reclamationSlice";
import { Button } from "../Button/Button";






function StickyTableReclama({dataTable, columnsTable, ...resProps}) {

  const columns = useMemo(() => columnsTable, [])
  const data = useMemo(() => dataTable, [])

  const dispatch  = useDispatch()

  const {

    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage, 
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      stateReducer: (newState, action) => {
        if (action.type === "toggleRowSelected") {
          if(!action.value){
            dispatch(removeReclamaID())
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
    usePagination,
    useRowSelect,
  )

  const [screenWidth, setScreenWidth] = useState(window.innerWidth - 200);

  useEffect(() => {
    if(selectedFlatRows[0]?.isSelected){
        dispatch(setReclamaID(selectedFlatRows[0].values.id))
      }
      else dispatch(removeReclamaID())
  },[selectedFlatRows])



  window.addEventListener('resize', function () {
    if(window.window.innerWidth<= screenWidth){
      setScreenWidth(window.window.innerWidth - 200)
    }
    else if(window.window.innerWidth > 350 + screenWidth){
      setScreenWidth(window.window.innerWidth - 200)
    }
  })

  useEffect(() => {


  }, [screenWidth]);
  
    


    return(
      <>
    <Styles>
      <div {...getTableProps()} className="table sticky" style={{ width: screenWidth, height: "auto" }}>
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
    <div>
      <Button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<<<'}</Button>
      <Button onClick={() => nextPage()} disabled={!canNextPage}>{'>>>'}</Button>
    </div>
    </>
    )
}
export {StickyTableReclama}