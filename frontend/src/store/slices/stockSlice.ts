import { Product } from "@/types/product.type";
import { httpClient } from "@/utils/HttpClient";
import { server } from "@/utils/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface StockState {
    stockAllResult: Product[];
    stockOneResult: Product | null;
  }
  
  const initialState: StockState = {
    stockAllResult: [],
    stockOneResult: null,
  };

export const getProducts = createAsyncThunk("stock/getProducts", async ()=>{
    const result = await httpClient.get<Product[]>(server.PRODUCT_URL)
    return result.data
}) 
  
const stockSlice = createSlice({
    name:"stockSlice",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getProducts.fulfilled, (state, action)=>{
            state.stockAllResult = action.payload
        })
    }
})

export default stockSlice.reducer
