export const select_data = (obj) => {
    const data_select =[]
    obj.map(val => {
        const key_value = {value: val.id, text: val.name}
        return data_select.push(key_value)
    })
    return data_select
}