import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    machines_data: null,
    sorted_serian_num: null,
    machine_obj: null,
    ids: null,
}


const machinesSlice = createSlice({
    name: 'machines',
    initialState,
    reducers: {
        setMachineID(state,action){

            state.ids = action.payload;
        },
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

            state.machines_data = null;
            state.sorted_serian_num = null;
            state.machine_obj = null; 
        },
        removeMachine_obj(state) {    
            state.machine_obj = null; 
        },
    }
});

export const { setMachineID ,setMachines, setMachine_obj, setSorted_serian_num, removeMachines, removeMachine_obj} = machinesSlice.actions;

export default machinesSlice.reducer;