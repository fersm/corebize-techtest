import {Products} from '../models';

import {configureStore} from '@reduxjs/toolkit';
import { productsSlice } from './states/products.state';


export interface AppStore {
    products: Products;
}

export default configureStore<AppStore>({
    reducer: {
        products: productsSlice.reducer
    }
});