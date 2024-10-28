import { addValue } from "./addValue"

export const sortedDataBySerialNum = (obj) => {
    if(!obj[Symbol.iterator]){
        return null
    }
    const dataRES = {}
    obj.map(val => {
        if(val?.machine?.serial_num){
            return(addValue(dataRES, val.machine.serial_num, val))
        }
        else if(val?.serial_num) {
            return(addValue(dataRES, val.serial_num, val))
        }
        else return null
    })
    return dataRES
}