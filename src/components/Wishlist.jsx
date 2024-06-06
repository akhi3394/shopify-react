// src/components/Wishlist.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/Slices/wishlistSlice";
import { add } from "../redux/Slices/cartSlice";
import { useSnackbar } from "notistack";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleRemoveFromWishlist = (itemId) => {
    dispatch(removeFromWishlist(itemId));
    enqueueSnackbar(`Item removed from your wishlist!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  const handleAddToCart = (item) => {
    dispatch(add(item));
    enqueueSnackbar(`Item added to your cart successfully`, {
      variant: "success",
      autoHideDuration: 3000,
    });
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-5">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-xl p-4 flex flex-col justify-between"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-contain mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
