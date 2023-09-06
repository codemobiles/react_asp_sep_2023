import { Product } from "@/types/product.type";
import { createSlice } from "@reduxjs/toolkit";

export interface StockState {
    stockAllResult: Product[];
    stockOneResult: Product | null;
  }
  
  const initialState: StockState = {
    stockAllResult: [],
    stockOneResult: null,
  };
  
const stockSlice = createSlice({
    name:"stockSlice",
    initialState,
    reducers:{}
})

export default stockSlice.reducer
