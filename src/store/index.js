import { configureStore } from "@reduxjs/toolkit";
import authSlice, { loadUser } from "./authSlice.js";
import cartSlice, { getTotals } from "./cartSlice.js";
import orderSlice, { ordersFetch } from "./orderSlice.js";
import productSlice, { productsFetch } from "./productSlice.js";
import { productsApi } from "./productsApi.js";
import userSlice, { usersFetch } from "./userSlice.js";
import wishlistSlice from "./wishlistSlice.js";

const store = configureStore({
  reducer: {
    product: productSlice,
    order: orderSlice,
    auth: authSlice,
    cart: cartSlice,
    user: userSlice,
    wishlist: wishlistSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

store.dispatch(productsFetch());
store.dispatch(usersFetch());
store.dispatch(ordersFetch());
store.dispatch(getTotals());
store.dispatch(loadUser(null));

export default store;
