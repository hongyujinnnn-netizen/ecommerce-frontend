import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    searchItem: "",
    filteredData: [],
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            //assume action.payload is an array of products
            state.products = action.payload;
        },
setSearchItem: (state, action) => {
    state.searchItem = action.payload;
    state.filteredData = state.products.filter(product =>
        product.name.toLowerCase().includes(state.searchItem.toLowerCase())
    );
}
    },
})

export const {setProducts, setSearchItem} = productSlice.actions;
export default productSlice.reducer;