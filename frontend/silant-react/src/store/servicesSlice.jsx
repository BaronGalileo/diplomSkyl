import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: null,
    sorted_data: {},
    ids: {},
    targetServID: null,
    expire: null,
}

const CACHE = {
    hour: 3600000, // 1час
    test: 10000 // 10сек
}

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {

        setDataServ(state, action){
            state.data = action.payload;

        },

        setTargetServID(state, action){
            
            state.targetServID = action.payload;

        },

        setServices_ids(state, action){
            state.ids = action.payload.ids;

        },

        setServices(state, action){
            state.sorted_data = action.payload.services_data;
            state.expire = Date.now() + CACHE.test
        },
        removeServices(state) {
            return state = {
                sorted_data: {},
                ids: {},
                expire: null,
            };
        },

        removeTargetServID(state) {

            state.targetServID = null

        }
    }
});

export const {setDataServ, setTargetServID, setServices, setServices_ids, removeTargetServID, removeServices} = servicesSlice.actions;

export default servicesSlice.reducer;