"use server";
import React from "react";
import { getAllProduct } from "@/service/getProductService.js";
import CartoonCard from "@/app/components/CartoonCard";
export default async function page({ searchParams }) {
     const allCartoons = await getAllProduct();
     const cartoonName = searchParams?.CartoonName || "All";
     const cartoons =
          cartoonName === "All"
               ? allCartoons
               : allCartoons.filter((cartoon) => cartoon.ct_genre_id === Number(cartoonName));
     return (
          <div className="m-5 grid grid-cols-3 gap-4">
               {cartoons.map((cartoon) => (
                    <CartoonCard key={cartoon.id} data={cartoon} />
               ))}
          </div>
     );
}
