import React, { useEffect, useMemo, useState } from "react";
import { useTable, useBlockLayout, useFilters, usePagination} from 'react-table';
import { useSticky } from 'react-table-sticky'
import { Styles } from "./TableStyles";
import { Button } from "../Button/Button";





function StickyTableForPatch({dataTable, columnsTable, ...resProps}) {

  const columns = useMemo(() => columnsTable, [])
  const data = useMemo(() => dataTable, [])

  const {

    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,   
    selectedFlatRows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useBlockLayout,
    usePagination,
    useSticky,
  )


    
  const [screenWidth, setScreenWidth] = useState(1050);

  window.addEventListener('resize', function () {
    if(window.innerWidth>1300){
      setScreenWidth(1050)
    }
    else if(window.innerWidth < 1300 && window.innerWidth> 1000){
      setScreenWidth(window.innerWidth - 100)
    }
    else{
      setScreenWidth(window.innerWidth - 50)
    }
  })
  
    useEffect(() => {
      if(window.innerWidth >1400){
        setScreenWidth(1050)
      }
      else{
        setScreenWidth(window.innerWidth - 50)
      }
  
  
  }, [screenWidth]);


    return(
    <>
    <Styles>
      <div {...getTableProps()} className="table sticky" style={{ width: screenWidth, height: "auto" }}>
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
export {StickyTableForPatch}