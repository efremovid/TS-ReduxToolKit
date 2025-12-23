import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { productsReducer } from "./products/products-slice";


export const store = configureStore({
  reducer: {
    products: productsReducer,

  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
