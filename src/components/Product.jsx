// src/components/Product.jsx
import React from "react";
import { add, remove } from "../redux/Slices/cartSlice";
import { addToWishlist, removeFromWishlist } from "../redux/Slices/wishlistSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

const Product = ({ item }) => {
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleAddToCart = () => {
    dispatch(add(item));
    enqueueSnackbar(`Item added to your cart successfully`, {
      variant: "success",
      autoHideDuration: 3000,
    });
  };

  const handleRemoveFromCart = () => {
    dispatch(remove(item.id));
    enqueueSnackbar(`Item removed from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(item));
    enqueueSnackbar(`Item added to your wishlist successfully`, {
      variant: "success",
      autoHideDuration: 3000,
    });
  };

  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist(item.id));
    enqueueSnackbar(`Item removed from your wishlist!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  const isInCart = cart.some((p) => p.id === item.id);
  const isInWishlist = wishlist.some((p) => p.id === item.id);

  return (
    <div className="group hover:scale-110 transition duration-300 ease-in relative flex flex-col items-center border-2 border-purple-400 gap-3 p-4 h-[350px] mt-10 ml-5 rounded-xl">
      <div className="absolute top-2 right-2">
        {isInWishlist ? (
          <Favorite
            onClick={handleRemoveFromWishlist}
            className="text-red-500 cursor-pointer"
          />
        ) : (
          <FavoriteBorder
            onClick={handleAddToWishlist}
            className="text-gray-500 cursor-pointer hover:text-red-500"
          />
        )}
      </div>
      <div className="h-[180px]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h1 className="truncate w-40 mt-3 text-gray-700 font-semibold text-lg">
          {item.title}
        </h1>
      </div>
      <div className="flex items-center justify-between w-full mt-5">
        {isInCart ? (
          <button
            className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3"
            onClick={handleRemoveFromCart}
          >
            Remove item
          </button>
        ) : (
          <button
            className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        )}
        <p>${item.price}</p>
      </div>
    </div>
  );
};

export default Product;
