import React, { useState } from "react";
import { Button } from "../Button/Button";

export const ColumnFilter = ({ column }) => {

    const { filterValue, setFilter} = column

    const[flag, setFlag] = useState(false)


    return(
        <span className="filter-span">
            <form>
                <Button className="search-filter" type="reset" onClick={(e) => {setFlag(res=>!res)}}>{!flag?"поиск": "убрать поиск"}</Button>
                {flag&&
                    <input className="filter-input" value={filterValue || ''}
                onChange={(e) => {setFilter(e.target.value)
                }}/>
                }
            </form>
        </span>
    )
}