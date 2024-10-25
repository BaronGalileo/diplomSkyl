import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    machines_data: {},
    sorted_serian_num: {},
    machine_obj: {},
}


const machinesSlice = createSlice({
    name: 'machines',
    initialState,
    reducers: {
        setMachine_obj(state,action){

            state.machine_obj = action.payload.machine_obj;
        },
        setSorted_serian_num(state,action){

            state.sorted_serian_num = action.payload.sorted_serian_num;
        },
        setMachines : (state, action) => {

            state.machines_data = action.payload.machines_data;
        },
        removeMachines(state) {     

            state.machines_data = {};
            state.sorted_serian_num = {};
            state.machine_obj = {}; 
        },
    }
});

export const {setMachines, setMachine_obj, setSorted_serian_num, removeMachines} = machinesSlice.actions;

export default machinesSlice.reducer;