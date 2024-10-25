
export const recursDataWrapper = (obj) => {

    let prevName = ''

    const data_dict = {}

    recursData(obj, '')
  
    function recursData(obj, name_key){

        prevName += {name_key}

        for (const [key, value] of Object.entries(obj)) {
            if(typeof(value) !== "object"){
                data_dict[`${name_key}`+`${key}`] = value
            }
            else {
                name_key = `${key}.`
                const res = recursData(value, name_key)
                prevName -= `${name_key}`
          }
        }
    }
    
    return data_dict
}