import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    machines_data: {},
    sorted_serian_num: {},
}


const machinesSlice = createSlice({
    name: 'machines',
    initialState,
    reducers: {

        setMachines : (state, action) => {
            state.machines_data = action.payload.machines_data;
            state.sorted_serian_num = action.payload.sorted_serian_num;
        },
        removeMachines(state) {      
            return state = {};
        },
    }
});

export const {setMachines, removeMachines} = machinesSlice.actions;

export default machinesSlice.reducer;