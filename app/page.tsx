"use client";
import { Card } from "@/components/product/Card";
import { useEffect, useState } from "react";
import { findProductByProductName, product_list } from "@/constants/products";
import Nav from "@/components/NavBar/Nav";

export default function Home() {
  const [search, setSearch] = useState("");
  const [productList, setProductList] = useState(product_list);
  useEffect(() => {
    if (search !== "") {
      setProductList(findProductByProductName(search));
    } else {
      setProductList(product_list);
    }
  }, [search]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Nav />
      <input
        className="flex w-1/2 bg-slate-100 shadow-md text-xl p-2 rounded-full my-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid gap-8 m-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {productList.map((product, idx) => (
          <Card key={idx} {...product} />
        ))}
      </div>
    </main>
  );
}
