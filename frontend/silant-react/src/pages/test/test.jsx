import React, { useEffect, useState } from "react"
import { TestTablesElement } from "../../components/test/Test";
import { mashine_dict } from "../../helpers/Dictionary";
import { useSelector } from "react-redux";
import { BasicTable } from "../../components/test/BasicTables";
import { Button } from "../../components/Button/Button";
import axios from "axios";
import { COLUMNS } from "../../components/test/columns";


function Test() {

    const [data, setData] = useState(null);

    const isAuth = useSelector(state => state.auth)

    useEffect(() => {

    }, [data])

    const targetMachine = useSelector(state => state.machine)



    const path = "http://127.0.0.1:8000/api/v1/machine/"

    function show() {
        console.log("COLUMNS", COLUMNS)
        axios.get(path, isAuth.confermAut)
        .then(res => {
            setData(res.data)
        })
    }

    return(
        <>
           <h1>Test. Test</h1>
           <Button onClick={show}>Отправить</Button>
           {data && 
           <BasicTable dataFrom={data}></BasicTable>}
           <div className="resultFind-wrapper">

                    {/* <div className="tables_row">
                    <TestTablesElement   show   key_of_dictionary={mashine_dict}  dictionary={targetMachine}  classNameText="italic-bold"/>
                    <TestTablesElement  classNameFrame="one" key_of_dictionary={mashine_dict}  dictionary={targetMachine}  classNameText="italic-bold"/>

                    </div>                  */}

                                       

            </div>
         
        </>
    )
}

export {Test}