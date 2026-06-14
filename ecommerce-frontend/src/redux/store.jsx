import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
        auth: authSlice,
    }
})
export default store;
