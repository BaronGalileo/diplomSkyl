import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    reload: false
}



const reloadDataSlice = createSlice({
    name: 'reloadData',
    initialState,
    reducers: {

        setReloadData : (state, action) => {

            state.reload = action.payload;

        },removeReloadData(state) {
            
            state.reload = false;
        },
    }
});

export const {setReloadData, removeReloadData} = reloadDataSlice.actions;

export default reloadDataSlice.reducer;