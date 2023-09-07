import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import { authSelector } from "@/store/slices/authSlice";
import { getProducts, stockSelector } from "@/store/slices/stockSlice";
import { Typography } from "@mui/material";
import { NumericFormat } from "react-number-format";

const columns: GridColDef[] = [
  { field: "productId", headerName: "Id", width: 70 },
  {
    field: "image",
    headerName: "Image",
    width: 170,
    renderCell({ value }) {
      return (
        <img
          alt=""
          src={"https://localhost:8081/images/" + value}
          className="w-[70px] h-[70px] rounded-[5%]"
        />
      );
    },
  },
  { field: "name", headerName: "Name", width: 430 },
  { field: "price", headerName: "Price", width: 130 },
  {
    field: "stock",
    headerName: "Stock",
    width: 130,
    renderCell: ({ value }: GridRenderCellParams) => (
      <Typography variant="body1">
        <NumericFormat
          value={value}
          displayType={"text"}
          thousandSeparator={true}
          decimalScale={0}
          fixedDecimalScale={true}
        />
      </Typography>
    ),
  },
  { field: "created", headerName: "Created", width: 230 },
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
        getRowId={(item) => item.productId}
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
