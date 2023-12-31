import { Product } from "@/types/product.type";
import { httpClient } from "@/utils/HttpClient";
import { server } from "@/utils/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface StockState {
  stockAllResult: Product[];
  stockOneResult: Product | null;
}

const initialState: StockState = {
  stockAllResult: [],
  stockOneResult: null,
};

export const deleteProduct = createAsyncThunk(
  "stock/deleteProduct",
  async (id: string) => {
    await httpClient.delete(`${server.PRODUCT_URL}/${id}`);
  }
);

export const getProducts = createAsyncThunk(
  "stock/getProducts",
  async (keyword: string) => {
    // const result = await httpClient.get<Product[]>(server.PRODUCT_URL);
    // return result.data;

    if (keyword) {
      const result = await httpClient.get<Product[]>(
        `${server.PRODUCT_URL}/search/name?keyword=${keyword}`
      );
      return result.data;
    } else {
      const result = await httpClient.get<Product[]>(server.PRODUCT_URL);
      return result.data;
    }
  }
);

// Add
export const addProduct = createAsyncThunk(
  "stock/add",
  async (formData: FormData) => {
    await httpClient.post(server.PRODUCT_URL, formData);
  }
);

// Query by Id
export const getProductById = createAsyncThunk(
  "stock/getById",
  async (id: string): Promise<Product> => {
    const result = await await httpClient.get(`${server.PRODUCT_URL}/${id}`);
    return result.data;
  }
);

// Edit
export const editProduct = createAsyncThunk(
  "stock/edit",
  async (formData: any) => {
    await httpClient.put(server.PRODUCT_URL, formData);
  }
);

const stockSlice = createSlice({
  name: "stockSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.stockAllResult = action.payload;
    });

    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.stockOneResult = action.payload;
    });
  },
});

export default stockSlice.reducer;
export const stockSelector = (state: RootState) => state.stockReducer;
