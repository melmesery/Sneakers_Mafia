import axios from "axios";
import React, { Fragment } from "react";
import { URL } from "../API.js";
import { useSelector } from "react-redux";

const PayButton = ({ cartItems }) => {
  const { _id } = useSelector((state) => state.auth);

  const handleCheckout = () => {
    axios
      .post(`${URL}/order/create-checkout-session`, {
        cartItems,
        userId: _id,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((error) => {
        return error;
      });
  };
  return (
    <Fragment>
      <button onClick={() => handleCheckout()}>Check Out</button>
    </Fragment>
  );
};

export default PayButton;
