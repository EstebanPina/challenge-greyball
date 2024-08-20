"use client";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducers";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.Quantity,
    0
  );
  return (
    <div className="flex w-32">
      <Link
        href={"/cart"}
        className="flex justify-center items-center text-4xl"
      >
        <FaShoppingCart />
        <div className="flex relative bg-red-500 rounded-full w-4 h-4 justify-center text-white text-xs -top-2 -left-2">
          {totalQuantity}
        </div>
      </Link>
    </div>
  );
};

export default Cart;
