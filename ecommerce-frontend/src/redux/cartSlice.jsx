import {createSlice} from "@reduxjs/toolkit";

const toNumber = (val) => {
    const n = parseFloat(String(val).replace(/[^0-9.]/g, ""));
    return isNaN(n) ? 0 : n;
};

const initialState = {
    products: [],
    totalQty: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action){
            const newItem = action.payload;
            const price = toNumber(newItem.price);
            const itemIndex = state.products.findIndex(item => item.id === newItem.id);

            if(itemIndex >= 0) {
                state.products[itemIndex].qty += 1;
                state.products[itemIndex].totalPrice += price;
            } else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: price,
                    qty: 1,
                    totalPrice: price,
                    image: newItem.image,
                });
            }

            state.totalPrice += price;
            state.totalQty++;
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const findItem = state.products.find(item => item.id === id);
            if(findItem) {
                state.totalPrice -= findItem.totalPrice;
                state.totalQty -= findItem.qty;
                state.products = state.products.filter(item => item.id !== id);
            }
        },
        increaseQty(state, action) {
            const id = action.payload;
            const findItem = state.products.find(item => item.id === id);
            if (findItem) {
                findItem.qty += 1;
                findItem.totalPrice += findItem.price;
                state.totalPrice += findItem.price;
                state.totalQty += 1;
            }
        },
        decreaseQty(state, action) {
            const id = action.payload;
            const findItem = state.products.find(item => item.id === id);
            if (findItem && findItem.qty > 1) {
                findItem.qty -= 1;
                findItem.totalPrice -= findItem.price;
                state.totalPrice -= findItem.price;
                state.totalQty -= 1;
            }
        }
    },
})

export const {addToCart, removeFromCart, increaseQty, decreaseQty} = cartSlice.actions;
export default cartSlice.reducer;