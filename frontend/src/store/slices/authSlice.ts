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

  export const addWithDelay = createAsyncThunk("addWithDelay", async ()=>{
    // get result from server (delay 1 secs)
    await new Promise(resolve => setTimeout(resolve, 1000))    
    return getStore().getState().authReducer.count + 1
  })

  export const removeWithDelay = async ()=>{
    // get result from server (delay 1 secs)
    await new Promise(resolve => setTimeout(resolve, 1000))    
    return getStore().getState().authReducer.count - 1
  }


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
        builder.addCase(addWithDelay.fulfilled, (state, action)=>{
            state.count = action.payload
        })
    }
})

export default authSlice.reducer
export const {add, remove} = authSlice.actions
export const authSelector = (state:RootState)=>state.authReducer