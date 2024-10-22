import {createSlice} from "@reduxjs/toolkit";

const initialState = []


const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {

        setServices : (state, action) => {
            console.log("servicesReducer", action)
            return state = action.payload.services_data;
        },removeServices(state) {
            
            return state = [];
        },
    }
});

export const {setServices, removeServices} = servicesSlice.actions;

export default servicesSlice.reducer;