import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart, getTotals } from "../store/cartSlice.js";
import { Checkout } from "./Styles/StyledCheckout.js";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch]);

  return (
    <Checkout>
      <h2>Checkout Successful</h2>
      <p>Your order might take some time to process.</p>
      <p>Check your order status at your profile after about 5 mins.</p>
      <p>
        Incase of any inqueries contant the support at
        <strong> support@sneakers-mafia.com</strong>
      </p>
    </Checkout>
  );
};

export default CheckoutSuccess;
