import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { productDelete } from "../../../store/productSlice.js";
import EditProduct from "../EditProduct.jsx";
import {
  Delete,
  ImageContainer,
  ProductActions,
  ProductView,
} from "../StyledAdmin.js";

const ProductsList = () => {
  const { items, error } = useSelector((state) => state.product);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(productDelete(id));
        if (error === "error") {
          Swal.fire("There was a problem", "", "error");
        } else {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };

  const rows =
    items &&
    items.map((item, index) => {
      return {
        id: item?._id,
        imageUrl: item.image?.secure_url,
        pName: item?.name,
        pDesc: item?.desc,
        price: item?.price?.toLocaleString(),
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "imageUrl",
      headerName: "Image",
      width: 80,
      renderCell: (params) => {
        return (
          <ImageContainer>
            <img src={params.row.imageUrl} alt={params.row.pName} />
          </ImageContainer>
        );
      },
    },
    { field: "pName", headerName: "Name", width: 200 },
    { field: "pDesc", headerName: "Description", width: 130 },
    { field: "price", headerName: "Price", width: 80 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 250,
      renderCell: (params) => {
        return (
          <ProductActions>
            <Delete onClick={() => handleDelete(params.row.id)}>Delete</Delete>
            <EditProduct id={params.row.id} />
            <ProductView onClick={() => navigate(`/product/${params.row.id}`)}>
              View
            </ProductView>
          </ProductActions>
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

export default ProductsList;
