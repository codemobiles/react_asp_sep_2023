import { Product } from "@/types/product.type";
import { TransactionResponse } from "@/types/transaction.type";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ShopState {
  transactionAllResult: TransactionResponse[];
  mOrderLines: Product[];
  mTotalPrice: number;
  mTaxAmt: number;
  mIsPaymentMade: boolean;
  mGiven: number;
}

const initialState: ShopState = {
  transactionAllResult: [],
  mOrderLines: [],
  mTotalPrice: 0,
  mTaxAmt: 0,
  mIsPaymentMade: false,
  mGiven: 0,
};

const shopSlice = createSlice({
  name: "shopSlice",
  initialState,
  reducers: {
    addOrder: () => {},
    removeOrder: () => {},
    togglePayment: () => {},
  },
});

export default shopSlice.reducer;
export const { addOrder, removeOrder, togglePayment } = shopSlice.actions;
export const shopSelector = (state: RootState) => state.shopReducer;
