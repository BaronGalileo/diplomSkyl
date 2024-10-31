import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: null,
    brand: null,
    serial_num:  null,
    car_model: null,
    engine_model:  null,
    engine_num: null,
    transmission_model:  null,
    transmission_num: null,
    driving_axle_model:  null,
    driving_axle_num:  null,
    model_of_a_controlled_bridge: null,
    num_of_a_controlled_bridge: null,
    contractNo: null,
    date_from_the_factory: null,
    consignee: null,
    delivery_address: null,
    equipment: null,
    client: null,
    service_company: null,
}


const one_machineSlice = createSlice({
    name: 'one_machine',
    initialState,
    reducers: {

        setOne_machine(state, action) {
            state.id = action.payload.id
            state.brand = action.payload.brand;
            state.serial_num = action.payload.serial_num;
            state.car_model = action.payload.car_model;
            state.engine_model = action.payload.engine_model;
            state.engine_num = action.payload.engine_num;
            state.transmission_model = action.payload.transmission_model;
            state.transmission_num = action.payload.transmission_num;
            state.driving_axle_model = action.payload.driving_axle_model;
            state.driving_axle_num = action.payload.driving_axle_num;
            state.model_of_a_controlled_bridge = action.payload.model_of_a_controlled_bridge;
            state.num_of_a_controlled_bridge = action.payload.num_of_a_controlled_bridge;
            state.contractNo = action.payload.contractNo;
            state.date_from_the_factory = action.payload.date_from_the_factory;
            state.consignee = action.payload.consignee;
            state.delivery_address = action.payload.delivery_address;
            state.equipment = action.payload.equipment;
            state.client = action.payload.client;
            state.service_company = action.payload.service_company;

            
        },
        removeOne_machine(state) {
            state.brand = null;
            state.serial_num = null;
            state.car_model = null;
            state.engine_model = null;
            state.engine_num = null;
            state.transmission_model = null;
            state.transmission_num = null;
            state.driving_axle_model = null;
            state.driving_axle_num = null;
            state.model_of_a_controlled_bridge = null;
            state.num_of_a_controlled_bridge = null;
            state.contractNo = null;
            state.date_from_the_factory = null;
            state.consignee = null;
            state.delivery_address = null;
            state.equipment = null;
            state.client = null;
            state.service_company = null;

        },
    }
});

export const {setOne_machine, removeOne_machine} = one_machineSlice.actions;

export default one_machineSlice.reducer;