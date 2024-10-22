import {createSlice} from "@reduxjs/toolkit";

const initialState = []


const machinesSlice = createSlice({
    name: 'machines',
    initialState,
    reducers: {

        setMachines : (state, action) => {

            return state = action.payload.machines_data;

        },removeMachines(state) {
            
            return state = [];
        },
    }
});

export const {setMachines, removeMachines} = machinesSlice.actions;

export default machinesSlice.reducer;