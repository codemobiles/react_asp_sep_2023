import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import stockReducer from "@/store/slices/stockSlice";
import shopReducer from "@/store/slices/shopSlice";
import authReducer from "@/store/slices/authSlice";

let store: any = undefined;

export function getStore() {
  if (!store) {
    store = configureStore({
      reducer: {
        stockReducer,
        shopReducer,
        authReducer,
      },
      devTools: import.meta.env.VITE_IS_PRODUCTION === "0", // show redux log in dev mode
    });
  }
  return store;
}

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
