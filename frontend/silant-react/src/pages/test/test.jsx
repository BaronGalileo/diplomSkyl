import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Button } from "../../components/Button/Button";
import { Text } from "../../components/Text/Text";
import axios from "axios";
import { LayoutTable } from "../../components/Tables/LayoutTable";
import { columnsFullMachine } from "../../components/Tables/ColomnsTables/columnsFullMachine";


function Test() {

    const [data, setData] = useState(null);

    const isAuth = useSelector(state => state.auth)

    useEffect(() => {

    }, [data])

    const targetMachine = useSelector(state => state.machine)


    const path = "http://127.0.0.1:8000/api/v1/machine/"

    function show() {
        axios.get(path, isAuth.confermAut)
        .then(res => {
            setData(res.data)
        })
    }

    return(
        <div className="wrapper_test">
            <div className="test-elem"><Text as="h1">Тестовая страница</Text></div> 
            <div className="test-elem">
                {data && 
                <LayoutTable dataTable={data} columnsTable={columnsFullMachine}></LayoutTable>}
            </div>
            <div className="test-elem"><h1>Test. Test</h1></div>
            <div className="test-elem"><Button onClick={show}>Отправить</Button></div>
            <div className="test-elem"></div>          
           <div className="resultFind-wrapper">

                    {/* <div className="tables_row">
                    <TestTablesElement   show   key_of_dictionary={mashine_dict}  dictionary={targetMachine}  classNameText="italic-bold"/>
                    <TestTablesElement  classNameFrame="one" key_of_dictionary={mashine_dict}  dictionary={targetMachine}  classNameText="italic-bold"/>

                    </div>                  */}

                                       

            </div>
         
        </div>
    )
}

export {Test}