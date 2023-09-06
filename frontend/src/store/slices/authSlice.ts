import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getStore, RootState } from "../store";
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

  const addWithDelay = createAsyncThunk("addWithDelay", ()=>{
    // get result from server (delay 10 secs)
    return getStore().state.authReducer.count+1
  })


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
    extraReducers:(builder)=>{
        builder.addCase()
    }
})

export default authSlice.reducer
export const {add, remove} = authSlice.actions
export const authSelector = (state:RootState)=>state.authReducer