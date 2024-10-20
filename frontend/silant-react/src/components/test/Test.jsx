import React from "react";
import { Text } from "../Text/Text";
import classNames from 'classnames';
import "./styles.css"

function TestTablesElement({dictionary = {},show=false, key_of_dictionary=false, classNameText = "", classNameFrame = "", clearFrame, clearTxt,  ...restProps}) {

    const classes = classNames(
        !clearFrame? 'item' : null,
        classNameFrame,
    )

    const classesText = classNames(
        !clearTxt? 'dark-color' : null,
        classNameText,
    )

    

    return(
        <div  {...restProps}>
            {Object.entries(dictionary).map((key, index, arr) => {
                console.log("key", key)
                console.log("index", index)
                console.log("arr", arr)
                // if(show) {
                    return(
                        <div className="container">
                            <div className={classes} key={key}>
                                <Text className={classesText}>{key_of_dictionary[key[0]]}</Text>
                            </div>
                            <div className="item" key={index}>
                                <Text className={classesText}>{key[1]}.</Text>
                            </div>
                        </div>                      


                    )
                // }
 
                // if(key_of_dictionary && show){
                //     return(
                //         <div className="tablesMachine-element" key={key}>
                //             <Text className={classesText}>{key_of_dictionary[key[0]]}</Text>
                //         </div>
                //     )
                // }
                // else if(!key_of_dictionary && key[1]){ 
                //     return(
                //     <div className="tablesMachine-element name" key={key}>
                //         <Text className={classesText}>{key[1]}</Text>
                //     </div>
                // )}
            })}
        </div>
    )
    
}
export {TestTablesElement}