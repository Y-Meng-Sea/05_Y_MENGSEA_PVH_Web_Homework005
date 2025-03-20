"use server";
import React from "react";
import { getAllProduct, searchCartoon } from "@/service/getProductService.js";
import CartoonCard from "@/app/components/CartoonCard";

export default async function page({ searchParams }) {
     const allCartoons = await getAllProduct();
     const cartoonName = (await searchParams?.CartoonName) || "All";
     const searchName = (await searchParams?.search) || "";
     let cartoons =
          cartoonName === "All"
               ? allCartoons
               : allCartoons.filter((cartoon) => cartoon.ct_genre_id === Number(cartoonName));
     if (searchName.trim() !== "") {
          cartoons = await searchCartoon(searchName);
     }
     return (
          <div className="m-5 grid grid-cols-3 gap-4">
               {cartoons.map((cartoon) => (
                    <CartoonCard key={cartoon.id} data={cartoon} />
               ))}
          </div>
     );
}
