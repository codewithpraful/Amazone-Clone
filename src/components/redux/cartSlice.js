
import {createSlice} from "@reduxjs/toolkit";
export const cartSlice = createSlice({
name: "cart",
initialState:{
    cart:[],
},
reducers:{
    addtoCart:(state,action)=>{

        const itemPresent = state.cart.find((item) => item.id === action.payload.id); 
        if(itemPresent){
         
            itemPresent.quantity++;
        }else{
            state.cart.push({...action.payload,quantity:1});
        }
    },
    removeCart:(state,action)=>{
      const removeItem = state.cart.filter((item)=>item.id !== action.payload.id);
        state.cart = removeItem;
    },
incrementQuantity:(state,action)=>{
const itemPresent = state.cart.find((item) => item.id === action.payload.id)
itemPresent.quantity++; 

},
decrementQuantity:(state,action)=>{
const itemPresent = state.cart.find((item) => item.id === action.payload.id)
if(itemPresent.quantity ===1){
     const removeCart = state.cart.filter((item) => item.id !== action.payload.id)
     state.cart = removeCart;
}else{
    itemPresent.quantity--;
}

},

cleanCart:(state)=>{
    state.cart = [];
},
}

})



export const {addtoCart, removeCart,incrementQuantity,decrementQuantity,cleanCart}= cartSlice.actions;
export default cartSlice.reducer;









