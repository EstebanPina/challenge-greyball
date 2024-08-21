"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart/cartActions"; // Asegúrate de que la ruta sea correcta
import { AddToCartAction, CartItem } from "@/redux/cart/cartTypes";
import Swal from "sweetalert2";
interface ProductProps {
  Id: number;
  ProductName: string;
  Price: number;
}
const Button_Buy: React.FC<ProductProps> = ({ Id, ProductName, Price }) => {
  const dispatch = useDispatch<any>();
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleAddToCart = () => {
    Toast.fire({
      icon: "success",
      title: "Item added successfully",
    });
    const item: CartItem = {
      Id,
      ProductName,
      Price,
      Quantity: 1, // Asume que se agrega una unidad inicialmente
    };
    dispatch(addToCart(item));
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-500 rounded-lg text-white font-semibold"
    >
      Add to Cart
    </button>
  );
};

export default Button_Buy;
