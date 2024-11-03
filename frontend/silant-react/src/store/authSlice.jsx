import {createSlice} from "@reduxjs/toolkit";
import { removeMachines } from "./machinesSlice";
import { removeReclamation } from "./reclamationSlice";
import { removeServices } from "./servicesSlice";
import { removeTargetmachine } from "./targetmachineSlice";
import { removeOne_machine } from "./oneMachineSlice";

const initialState = {
    name: null,
    username: null,
    auth_token:  null,
    isAuth: false,
    confermAut: null,
    user_role: null,
    expire: null,

}

const CACHE = {
    three_days: 259200000, //3 суток
    test: 10000 // 10сек
}



const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth(state, action) {
            state.name = action.payload.name;
            state.username = action.payload.username;
            state.auth_token = action.payload.auth_token;
            state.isAuth = true;
            state.confermAut = action.payload.confermAut;
            state.user_role = action.payload.user_role
            state.expire = Date.now() + CACHE.three_days
        },
        removeAuth(state) {
            state.name = null;
            state.username = null;
            state.auth_token = null;
            state.isAuth = false;
            state.confermAut = null;
            state.user_role = null;
            state.expire = null;
            removeMachines();
            removeReclamation();
            removeServices();
            removeTargetmachine();
            removeOne_machine();
        }
    },

});

export const {setAuth, removeAuth} = authSlice.actions;

export default authSlice.reducer;

