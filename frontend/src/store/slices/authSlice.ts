import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface InitialStateProp {
    count:number
}

const initialState:InitialStateProp = {count:0}

const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{},

})

export default authSlice.reducer
export const authSelector = (state:RootState)=>state.authReducer