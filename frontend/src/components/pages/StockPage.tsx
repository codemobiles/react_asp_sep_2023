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

export default function StockPage() {
  const dispatch = useAppDispatch();
  const stockReducer = useSelector(stockSelector);

  React.useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={stockReducer.stockAllResult}
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
