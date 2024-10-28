export const sorted_id = (obj) => {
    const id_data = {}
    for( const[key, value] of Object.entries(obj)) {
        id_data[value.id] = value
    }

    return id_data
}