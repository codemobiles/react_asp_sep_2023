import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


interface InitialStateProp {
    count:number
}

const initialState:InitialStateProp = {count:10}

const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{},

})

export default authSlice.reducer