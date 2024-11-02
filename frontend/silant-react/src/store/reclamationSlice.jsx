import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: null,
    ids: {},
    sorted_data: {},
    reclamaID: null,
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

        setReclamaID(state, action){
            state.reclamaID = action.payload;
        },

        setReclamaData(state, action){
            state.data = action.payload;
        },

        setReclamation_id(state, action){
            state.ids = action.payload.ids;
        },
        setReclamation(state, action){
            state.sorted_data = action.payload.reclamation_data;
            state.expire = Date.now() + CACHE.hour
        },
        removeReclamaID(state) {

            state.reclamaID = null
        
        },

        removeReclamation(state) {
            
            return state = {
                ids: {},
                sorted_data: {},
                expire: null,
            };
        },
    }
});

export const {setReclamaData, setReclamation, setReclamation_id,removeReclamaID,setReclamaID, removeReclamation} = reclamationSlice.actions;

export default reclamationSlice.reducer;