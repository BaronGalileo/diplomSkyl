

export    const isValid_data_patch = (data) => {
    const newData = {}
    for (const [key, value] of Object.entries(data)) {
        if(value){
            newData[key] = value
        }
    }
    return newData
}