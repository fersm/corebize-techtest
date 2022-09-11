import {Product, Products} from '../../models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const ProductsEmptyState: Products = {
    products: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: ProductsEmptyState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        createProduct: (state, action) => action.payload,
        modifiyProduct: (state, action) => ({ ...state, ...action.payload}),
        deleteProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => action.payload !== product.productId);
        }
    }
})

export const { addProduct, modifiyProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;