import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import { authSelector } from "@/store/slices/authSlice";
import { getProducts, stockSelector } from "@/store/slices/stockSlice";

const columns: GridColDef[] = [
  { field: "id", headerName: "Id", width: 70 },
  { field: "name", headerName: "Name", width: 330 },
  { field: "price", headerName: "Price", width: 130 },
  { field: "stock", headerName: "Stock", width: 130 },
];

const rows = [
  { id: 1, name: "Product1", price: 10, stock: 345 },
  { id: 2, name: "Product2", price: 20, stock: 235 },
  { id: 3, name: "Product3", price: 30, stock: 135 },
];

export default function StockPage() {
  const dispatch = useAppDispatch();
  const stockReducer = useSelector(stockSelector);

  React.useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
