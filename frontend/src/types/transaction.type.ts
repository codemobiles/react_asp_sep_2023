export interface TransactionRequest {
  subtotal: number;
  discount: number;
  shippingCost: number;
  taxPercent: number;
  total: number;
  paid: number;
  change: number;
  orderList: string;
  paymentType: string;
  paymentDetail: string;
  employeeId: string;
  sellerId: string;
  buyerId: string;
  comment: string;
}

export interface TransactionResponse {
  transaction_id: string;
  subtotal: number;
  discount: number;
  shipping_cost: number;
  tax_percent: number;
  total: number;
  paid: number;
  change: number;
  order_list: string;
  payment_type: string;
  payment_detail: string;
  staff_id: string;
  seller_id: string;
  buyer_id: string;
  comment: string;
}
