import Image from "next/image";
import { Card } from "@/components/product/Card"
import Cart from "@/components/NavBar/Cart";
import { useEffect } from "react";
import { GetServerSideProps } from 'next';
import { product_list } from "@/constants/products";
import Nav from "@/components/NavBar/Nav";
interface Product  {
  Id:number,
  ProductName:string,
  Currency:string,
  Price:number,
  Description:string,
  Img:string,
  Rating_Value:number
}
const test_prop={
  Id:1,
  ProductName:"Doritos Nacho Cheese",
  Currency:'JPY',
  Price:5,
  Description:'Only a doritos bag. What do you expect?',
  Img:'https://i.imgur.com/sBL2P.jpeg',
  Rating:4.7
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Nav/>
      <div className="grid gap-8 m-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {product_list.map((product,idx)=>(<Card key={idx} {...product}/> ))}
      </div>
    </main>
  );
}
