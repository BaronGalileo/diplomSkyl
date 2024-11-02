import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button } from "../../Button/Button";


export const FilterComponySelect = ({ column }) => {

    const { filterValue, setFilter} = column

    const[flag, setFlag] = useState(false)

    const isAuth = useSelector(state => state.auth)

    const[options, setOptions] = useState(null)

    const path = "http://127.0.0.1:8000/users/v1/servicesorgan/"

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
                            return(<option key={index.user} value={index.value}>{index.name}</option>)
                        })}
                    </select>
                </label>
                }
            </form>
        </span>
    )
}