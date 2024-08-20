'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/rootReducers'; // Asegúrate de que la ruta es correcta
import { CartItem } from '@/redux/cart/cartTypes'; // Asegúrate de que la ruta es correcta
import { findProductById } from "@/constants/products";
import Card from '@/components/Cart/Card';


const ShoppingCart: React.FC = () => {
  // Usa useSelector para obtener el estado del carrito
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item: CartItem) => (
            <Card Id={item.Id} ProductName={item.ProductName} Price={item.Price} Quantity={item.Quantity} />
          ))}
        </ul>
      )}
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;
