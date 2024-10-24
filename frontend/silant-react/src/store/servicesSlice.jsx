import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    sorted_data: {},
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

        setServices(state, action){
            state.sorted_data = action.payload.services_data;
            state.expire = Date.now() + CACHE.test
        },
        removeServices(state) {
            return state = {
                sorted_data: {},
                expire: null,
            };
        },
    }
});

export const {setServices, removeServices} = servicesSlice.actions;

export default servicesSlice.reducer;