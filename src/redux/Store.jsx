import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./Slices/cartSlice";
import cartSlice from "./Slices/cartSlice";
import wishlistReducer from "./Slices/wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistReducer,
  },
});

export default store