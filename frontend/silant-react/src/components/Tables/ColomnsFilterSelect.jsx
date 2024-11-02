import React, { useEffect, useState } from "react";
import './styles.css'
import { Button } from "../Button/Button";
import axios from "axios";
import { useSelector } from "react-redux";


export const ColumnFilterSelect = ({ column }) => {

    const { filterValue, setFilter} = column

    const[flag, setFlag] = useState(false)

    const isAuth = useSelector(state => state.auth)

    const[options, setOptions] = useState(null)

    const path = "http://127.0.0.1:8000/api/v1/transmissionmodel/"

    useEffect(() => {
        axios.get(path, isAuth.confermAut).then(res => {
            setOptions(res.data)

        })
    }, [])


    return(
        <span className="filter-span">
            <form>
                <Button className="search-filter" type="reset" onClick={(e) => {setFlag(res=>!res)}}>{!flag?"фильтр": "убрать фильтр"}</Button>
                {flag&&options&&
                <label className="select-wrapper">
                    <select className="select-element" name="input-filter" onChange={(e) => {
                            setFilter(e.target.value)
                            }}>
                        <option value=""></option>
                        {options.map((index) => {
                            return(<option key={index.id} value={index.value}>{index.name}</option>)
                        })}
                    </select>
                </label>
                }
            </form>
        </span>
    )
}