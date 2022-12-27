import { createSlice } from "@reduxjs/toolkit";
import { ProductDataType } from "../../types";

import { StateType, ActionType } from '../../types/cartTypes'

export const slice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        address: [],
        discount: 0,
        delivery: 0,
    },
    reducers: {
        setProducts: (state: StateType, action: ActionType) => {
            let products = [...state.products];
            let id = action.payload.data.id;

            let index = products.findIndex((item) => item.id == id);
            if (index > -1) {
                products[index].countQt += action.payload.countQt;
            } else {
                products.push({ ...action.payload.data, countQt: action.payload.countQt });
            }

            state.products = products;
        },
        changeProduct: (state: StateType, action) => {
            let products = [...state.products];

            if (products[action.payload.key]) {
                switch (action.payload.type) {
                    case '-':
                        products[action.payload.key].countQt--;

                        if (products[action.payload.key].countQt <= 0) {
                            products = products.filter((item, index) => index != action.payload.key);
                        }
                    break;
                    case '+':
                        products[action.payload.key].countQt++;
                    break;
                }
            }
            state.products = products;
        },
        setAddress: (state, action) => {
            state.address = action.payload;
        },
        setDiscount: (state, action) => {
            state.discount = action.payload;
        },
        setdelivery: (state, action) => {
            state.delivery = action.payload;
        }
    }
});

export const { setProducts, changeProduct, setAddress, setDiscount, setdelivery } = slice.actions;
export default slice.reducer;