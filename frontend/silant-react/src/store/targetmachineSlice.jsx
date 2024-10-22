import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    target: null
}


const targetmachineSlice = createSlice({
    name: 'targetmachine',
    initialState,
    reducers: {

        setTargetmachine : (state, action) => {

            state.target = action.payload;

        },removeTargetmachine(state) {
            
            state.target = null;
        },
    }
});

export const {setTargetmachine, removeTargetmachine} = targetmachineSlice.actions;

export default targetmachineSlice.reducer;