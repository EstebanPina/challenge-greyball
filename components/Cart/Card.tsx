import React from "react";
import QuantityHandler from "./QuantityHandler";
import { findProductById } from "@/constants/products";

type ProductProps = {
  Id:number;
  ProductName:string;
  Price:number;
  Quantity:number;
};
type Product={
  Id:number,
  ProductName:string,
  Currency:string,
  Price:number,
  Description:string,
  Img:string,
  Rating_Value:number
}

const Card : React.FC<ProductProps> = ({ Id, ProductName, Price, Quantity }) =>  {
  const product=findProductById(Id)
  return (
    <li key={Id} className="flex gap-2 bg-slate-200 rounded-lg my-2">
      <img
        className="w-24 h-24 object-center object-cover flex"
        src={product.Img}
      />
      <div className="flex flex-col">
        <strong>{ProductName}</strong>
        <p>
          {" "}
          <strong>Unit Price: </strong> ${Price.toFixed(2)}
        </p>
        <p>
          {" "}
          <strong>Quantity: </strong> {Quantity}
        </p>
        <div>Total: ${(Quantity * Price).toFixed(2)}</div>
        <QuantityHandler
          Id={Id}
          ProductName={ProductName}
          Price={Price}
          Quantity={Quantity}
        />
      </div>
    </li>
  );
};

export default Card;
