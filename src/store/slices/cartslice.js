//createslice
//initialize initial state
//slice -> name , initial state, actions


import {createSlice} from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addToCart(state, action){

            state.push(action.payload)
        }
    }
})

//Access addToCart 
export const {addToCart} = cartSlice.actions;

export default createSlice.reducers