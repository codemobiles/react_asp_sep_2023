import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LoginResult, RegisterResult } from "@/types/auth-result.type";


export interface AuthState {
    loginResult?: LoginResult;
    registerResult?: RegisterResult;
    isAuthenticating: boolean;
    isAuthented: boolean;
    isError: boolean;
    count: number;
  }
  
  const initialState: AuthState = {
    isAuthenticating: true,
    isAuthented: false,
    isError: false,
    count:0
  };


const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        add:(state)=>{
            state.count++
        },
        remove:(state)=>{
            state.count--
        },
        
    },

})

export default authSlice.reducer
export const {add, remove} = authSlice.actions
export const authSelector = (state:RootState)=>state.authReducer