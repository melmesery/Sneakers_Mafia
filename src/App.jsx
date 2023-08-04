import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "./App.css";
import CreateProduct from "./components/Admin/CreateProduct.jsx";
import Dashboard from "./components/Admin/Dashboard.jsx";
import ProductsList from "./components/Admin/List/ProductsList.jsx";
import Orders from "./components/Admin/Orders.jsx";
import Products from "./components/Admin/Products.jsx";
import Summary from "./components/Admin/Summary.jsx";
import Users from "./components/Admin/Users.jsx";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register.jsx";
import Order from "./components/Details/Order.jsx";
import Product from "./components/Details/Product.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Cart from "./pages/Cart.jsx";
import CheckEmail from "./pages/CheckEmail.jsx";
import CheckoutSuccess from "./pages/CheckoutSuccess.jsx";
import EmailConfirmation from "./pages/EmailConfirmation.jsx";
import Men from "./pages/Men.jsx";
import NotFound from "./pages/NotFound.jsx";
import Profile from "./pages/Profile.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Women from "./pages/Women.jsx";
import { logoutUser } from "./store/authSlice.js";
import { useGetAllProductsQuery } from "./store/productsApi.js";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { data } = useGetAllProductsQuery();
  const { _id, token, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const products = [];
  const maleProducts = [];
  const femaleProducts = [];
  data?.products?.map((product) => {
    if (product.gender === "male" || product.gender === "female") {
      products.push(product);
    }
    if (product.gender === "male") {
      maleProducts.push(product);
    } else if (product.gender === "female") {
      femaleProducts.push(product);
    }
  });

  useEffect(() => {
    if (token) {
      const { exp } = jwtDecode(token);
      if (Date.now() > exp * 1000) {
        dispatch(logoutUser(null));
        Swal.fire({
          title: "Session has expired!",
          showCancelButton: true,
          confirmButtonText: "Login",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/login";
          }
        });
      } else {
        return;
      }
    }
  }, [token]);

  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/men" element={<Men products={maleProducts} />} />
        <Route path="/women" element={<Women products={femaleProducts} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route
          path={`/checkout-success/${_id}`}
          element={<CheckoutSuccess />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/user/:id" element={<Profile />} />
        {role === "Admin" || "Super Admin" ? (
          <Route path="/admin" element={<Dashboard />}>
            <Route path="products" element={<Products />}>
              <Route index element={<ProductsList />} />
              <Route path="create-product" element={<CreateProduct />} />
            </Route>
            <Route path="summary" element={<Summary />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
          </Route>
        ) : null}
        <Route path={`/check-email/${_id}`} element={<CheckEmail />} />
        <Route
          path={`/email-confirmation/${_id}`}
          element={<EmailConfirmation />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
