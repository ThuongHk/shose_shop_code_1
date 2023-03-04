import { configureStore } from "@reduxjs/toolkit";
import productDetailSlice from "./reducer/productDetailSlice";
import productSlice from "./reducer/productSlice";



export const store = configureStore({
    reducer: {
   productSlice,
   productDetailSlice
}
})

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch;