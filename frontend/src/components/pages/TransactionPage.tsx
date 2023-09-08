import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import { getTransactions, shopSelector } from "@/store/slices/shopSlice";

const columns: GridColDef[] = [
  { field: "transactionId", headerName: "ID", width: 70 },
  { field: "timestamp", headerName: "Time", width: 130 },
  { field: "total", headerName: "Total", width: 130 },
];

export default function TransactionPage() {
  const dispatch = useAppDispatch();
  const shopReducer = useSelector(shopSelector);

  React.useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(item) => item.transactionId}
        rows={shopReducer.transactionAllResult}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
