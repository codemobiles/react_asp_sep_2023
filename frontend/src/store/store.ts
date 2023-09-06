import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import authReducer from "@/store/slices/authSlice";

// let store: any = undefined;
let store: EnhancedStore;

export function getStore() {
  if (!store) {
    store = configureStore({
      reducer: {
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
