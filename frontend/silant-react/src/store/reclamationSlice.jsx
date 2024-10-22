import {createSlice} from "@reduxjs/toolkit";

const initialState = []


const reclamationSlice = createSlice({
    name: 'reclamation',
    initialState,
    reducers: {

        setReclamation : (state, action) => {
            return state = action.payload.reclamation_data;
        },removeReclamation(state) {
            
            return state = [];
        },
    }
});

export const {setReclamation, removeReclamation} = reclamationSlice.actions;

export default reclamationSlice.reducer;