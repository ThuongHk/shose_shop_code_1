import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore({
    reducer: {
   number: ()=> 5
    }
})

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch;