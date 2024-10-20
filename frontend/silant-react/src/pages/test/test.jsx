import React from "react"
import { TestTablesElement } from "../../components/test/Test";
import { mashine_dict } from "../../helpers/Dictionary";
import { useSelector } from "react-redux";


function Test() {

    const targetMachine = useSelector(state => state.machine)

    return(
        <div>
           <h1>Test. Test</h1>
           <div className="resultFind-wrapper">

                    <div className="tables_row">
                    <TestTablesElement   show   key_of_dictionary={mashine_dict}  dictionary={targetMachine}  classNameText="italic-bold"/>
                    <TestTablesElement  classNameFrame="one" key_of_dictionary={mashine_dict}  dictionary={targetMachine}  classNameText="italic-bold"/>

                    </div>                 

                                       

            </div>
         
        </div>
    )
}

export {Test}