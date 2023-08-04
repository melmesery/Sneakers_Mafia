import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { orderEdit, ordersFetch } from "../../../store/orderSlice.js";
import {
  Delivered,
  DeliveryBtn,
  DispatchBtn,
  Dispatched,
  Head,
  OrderActions,
  OrderView,
  Pending,
} from "../StyledAdmin.js";

const OrdersList = () => {
  const { list } = useSelector((state) => state.order);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDispatchBtn = (id) => {
    dispatch(orderEdit({ id, delivery_status: "dispatched" }));
  };

  const handleDeliveredBtn = (id) => {
    dispatch(orderEdit({ id, delivery_status: "delivered" }));
  };

  useEffect(() => {
    dispatch(ordersFetch());
  }, [dispatch]);

  const rows =
    list &&
    list.map((item) => {
      return {
        id: item?._id,
        cName: item?.shipping?.name,
        amount: `$${(item?.total / 100).toLocaleString()}`,
        dStatus: item?.delivery_status,
        date: moment(item?.createdAt).fromNow(),
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "cName", headerName: "Name", width: 140 },
    { field: "amount", headerName: "Amount($)", width: 110 },
    {
      field: "dStatus",
      headerName: "Status",
      width: 110,
      renderCell: (params) => {
        return (
          <div>
            {params.row.dStatus === "pending" ? (
              <Pending>Pending </Pending>
            ) : params.row.dStatus === "dispatched" ? (
              <Dispatched>Dispatched</Dispatched>
            ) : params.row.dStatus === "delivered" ? (
              <Delivered>Delivered</Delivered>
            ) : (
              "Error"
            )}
          </div>
        );
      },
    },
    { field: "date", headerName: "Date", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 210,
      renderCell: (params) => {
        return (
          <OrderActions>
            <DispatchBtn onClick={() => handleDispatchBtn(params.row.id)}>
              Dispatch
            </DispatchBtn>
            <DeliveryBtn onClick={() => handleDeliveredBtn(params.row.id)}>
              Delivered
            </DeliveryBtn>
            <OrderView onClick={() => navigate(`/order/${params.row.id}`)}>
              View
            </OrderView>
          </OrderActions>
        );
      },
    },
  ];

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <Head>Orders</Head>
      <DataGrid
        className="rounded-0"
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default OrdersList;
