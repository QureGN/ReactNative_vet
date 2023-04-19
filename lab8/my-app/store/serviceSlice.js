import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    services: [],
    service: {},
    cart: [],
    booking:[],
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setServices: (state, { payload }) => {
            console.log('setServices');
            state.services = payload;
        },
        setService: (state, { payload }) => {
            console.log('setService');
            state.service = payload;
        },
        resetService: (state) => {
            console.log('resetService');
            state.service = {};
        },
        setCart:(state, { payload }) =>{
            console.log('setCart');
            state.cart.push(payload);
        },
        setServices1: (state, { payload }) => {
            console.log('setServices1');
            state.booking = payload;
        },
        resetCart: (state, { payload }) => {
            console.log('resetCart');
            state.cart = [];
        },
    },
});

export const serviceReducer = serviceSlice.reducer;

export const { setService, resetService, setServices, setCart, setServices1, resetCart } = serviceSlice.actions;