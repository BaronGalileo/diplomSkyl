import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    sorted_data: {},
    expire: null,
}

const CACHE = {
    hour: 3600000, // 1час
    test: 10000 // 10сек
}


const reclamationSlice = createSlice({
    name: 'reclamation',
    initialState,
    reducers: {

        setReclamation(state, action){
            state.sorted_data = action.payload.reclamation_data;
            state.expire = Date.now() + CACHE.test
        },
        removeReclamation(state) {
            
            return state = {
                sorted_data: {},
                expire: null,
            };
        },
    }
});

export const {setReclamation, removeReclamation} = reclamationSlice.actions;

export default reclamationSlice.reducer;