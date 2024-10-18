import React from "react";
import { Text } from "../Text/Text";
import classNames from 'classnames';
import "./styles.css"

function TablesElement({dictionary = {}, key_of_dictionary=false, classNameText = "", classNameFrame = "", clearFrame, clearTxt,  ...restProps}) {

    const classes = classNames(
        !clearFrame? 'frame-tables' : null,
        classNameFrame,
    )

    const classesText = classNames(
        !clearTxt? 'dark-color' : null,
        classNameText,
    )

    return(
        <div className={classes} {...restProps}>
            {Object.entries(dictionary).map(key => {
                if(key_of_dictionary && key[1]){
                    return(
                        <div className="tablesMachine-element" key={key}>
                            <Text className={classesText}>{key_of_dictionary[key[0]]}</Text>
                        </div>
                    )
                }
                else if(!key_of_dictionary && key[1]){ 
                    return(
                    <div className="tablesMachine-element name" key={key}>
                        <Text className={classesText}>{key[1]}</Text>
                    </div>
                )}
            })}
        </div>
    )
    
}
export {TablesElement}