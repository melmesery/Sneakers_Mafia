import React, { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./StyledAdmin.js";

const Products = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <AdminHeaders>
        <h2>Products</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/products/create-product")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </Fragment>
  );
};

export default Products;
