import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    sorted_data: {},
    ids: {},
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
    }
});

export const {setServices, setServices_ids, removeServices} = servicesSlice.actions;

export default servicesSlice.reducer;