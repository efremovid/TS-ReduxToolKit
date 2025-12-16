import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ShortProduct } from "../../types";

export const initialState: ShortProduct[] = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (_, action: PayloadAction<ShortProduct[]>) => {
        return action.payload
    },
    //   getProducts: (state, action: PayloadAction<ShortProduct[]>) => {
    //     state = action.payload
    // },
  },
});

export const { getProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;

// dispatch(getProducts(data));
