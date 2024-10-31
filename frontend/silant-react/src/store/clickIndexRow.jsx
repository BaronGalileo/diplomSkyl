import {createSlice} from "@reduxjs/toolkit";

const initialState = {}


const clickIndexRow = createSlice({
    name: 'clickIndex',
    initialState,
    reducers: {
        setClick(state, action) {
            return state = action.payload
        },
        removeClick(state) {
            return state = null;
        }
    },

});

export const {setClick, removeClick} = clickIndexRow.actions;

export default clickIndexRow.reducer;

