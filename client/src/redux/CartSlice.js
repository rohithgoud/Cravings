import { createSlice } from '@reduxjs/toolkit'


const initialState = [0];


const CartSlicer = createSlice({
  name: 'Cart',
  initialState,

  reducers:{
    addToCart :(state, action)=>{
        state.push(action.payload);
    },


    removeFromCart :(state, action)=>{
        return state.filter((item)=> item.id !== action.payload);
    },

    clearCart:(state, action)=>{
      
    }
  }
})

export const {addToCart, removeFromCart} = CartSlicer.actions;

export default CartSlicer.reducer;