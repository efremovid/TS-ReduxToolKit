import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ShortProductLocal } from "../../types";

export const initialState: ShortProductLocal[] = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (_, action: PayloadAction<ShortProductLocal[]>) => {
      return action.payload;
    },
    toggleLike: (state, action: PayloadAction<number>) => {
      return state.map((el) =>
        el.id === action.payload ? { ...el, like: !el.like } : el
      );
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      return state.filter((el) => el.id !== action.payload);
    },
    createProduct: (state, action: PayloadAction<any>) => {
      state.unshift(action.payload);
    },
  },
});

export const { setProducts, toggleLike, removeProduct, createProduct } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
