import React from "react";
import { Text } from "../Text/Text";
import './styles.css'
import { useSelector } from "react-redux";
import { TablesElement } from "../TablesElement/TablesElement";
import { mashine_dict } from "../../helpers/Dictionary";


function ResultFind() {

    const targetMachine = useSelector(state => state.one_machine)

    const frame_dict = {
        name_colons: "Техническая характеристика",
        inform: "Информация",
    }

    if(targetMachine.serial_num) {
        return(
            <div className="resultFind-wrapper">
                <Text className="left" as="h3">Результат поиска:</Text>
                <Text as="h3">Информация о комплектации и технических характеристиках Вашей техники</Text>
                    <div className="tablesMachine-wrapper">
                    <TablesElement  classNameText="bold" dictionary={frame_dict}/>
                    <div className="tables_row">
                        <TablesElement key_of_dictionary={mashine_dict}  dictionary={targetMachine} classNameFrame="column" classNameText="bold"/>
                        <TablesElement   dictionary={targetMachine} classNameFrame="column"classNameText="italic"/>
                    </div>                 

                                       
                </div>
            </div>
        )
    }

}
export {ResultFind}