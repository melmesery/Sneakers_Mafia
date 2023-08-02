import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { usersBlock, usersFetch } from "../../../store/userSlice.js";
import {
  Actions,
  Admin,
  Block,
  Blocking,
  Cancel,
  Customer,
} from "../StyledAdmin.js";

const UsersList = () => {
  const { list, status } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleBlock = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(usersBlock(id));
        if (status === "rejected") {
          Swal.fire("There was a problem", "", "error");
        } else {
          Swal.fire("Done!", "User status updated.", "success");
        }
      }
    });
  };

  useEffect(() => {
    dispatch(usersFetch());
  }, []);

  const rows =
    list &&
    list.map((user) => {
      return {
        id: user?._id,
        name: user?.userName,
        email: user?.email,
        role: user?.role,
        isBlocked: user?.isBlocked,
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "role",
      headerName: "Role",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            {params.role === "Admin" || "Super Admin" ? (
              <Admin>Admin</Admin>
            ) : (
              <Customer>Customer</Customer>
            )}
          </div>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 210,
      renderCell: (params) => {
        return (
          <Actions>
            {params.row.isBlocked === true ? (
              <Blocking>
                <Block>Account Blocked</Block>
                <Cancel onClick={() => handleBlock(params.row.id)}>
                  Cancel
                </Cancel>
              </Blocking>
            ) : (
              <Block onClick={() => handleBlock(params.row.id)}>Block</Block>
            )}
          </Actions>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
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

export default UsersList;
