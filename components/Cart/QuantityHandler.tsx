"use client";
import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateCartItem,
} from "@/redux/cart/cartActions"; // Asegúrate de que la ruta sea correcta
import { CartItem } from "@/redux/cart/cartTypes";
import { FaTrash } from "react-icons/fa";
interface ProductProps {
  Id: number;
  ProductName: string;
  Price: number;
  Quantity: number;
}
const QuantityHandler: React.FC<ProductProps> = ({
  Id,
  ProductName,
  Price,
  Quantity,
}) => {
  const dispatch = useDispatch<any>();
  const handleAddToCart = () => {
    const item: CartItem = {
      Id,
      ProductName,
      Price,
      Quantity: 1, // Asume que se agrega una unidad inicialmente
    };
    dispatch(addToCart(item));
  };
  const handleRemoveToCart = () => {
    const itemId: number = Id;
    dispatch(removeFromCart(itemId));
  };
  const handleReduceCart = () => {
    const itemId: number = Id;
    const itemQuantity: number = Quantity - 1;
    console.log(itemQuantity);
    if (itemQuantity === 0) {
      handleRemoveToCart();
    } else {
      dispatch(updateCartItem(itemId, itemQuantity));
    }
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={handleReduceCart}
        className="bg-red-500 rounded-md w-8 h-8 text-white font-semibold"
      >
        -
      </button>
      <p className="flex justify-center items-center">{Quantity}</p>
      <button
        onClick={handleAddToCart}
        className="bg-emerald-500 rounded-md w-8 h-8 text-white font-semibold"
      >
        +
      </button>
      <button
        onClick={handleRemoveToCart}
        className="bg-slate-500  flex justify-center items-center rounded-md w-8 h-8 text-white font-semibold"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default QuantityHandler;
