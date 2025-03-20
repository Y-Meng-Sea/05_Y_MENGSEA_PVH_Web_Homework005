// pages/book.js
import React from "react";
import img from "@/assets/images/study.jpg";
import Image from "next/image";
import { viewIcon } from "@/assets/icons/icons.js";
import { getCartoonById } from "@/service/getProductService.js";

async function page({ searchParams }) {
     const cartoonid = (await searchParams?.id) || "";
     const getCartoon = await getCartoonById(Number(cartoonid));
     return (
          <div className="bg-white mt-32 max-h-full p-20 pb-14 rounded-[50px]">
               <div className="flex justify-end relative">
                    <img
                         alt="cover"
                         width={300}
                         height={350}
                         className="rounded-3xl drop-shadow-xl absolute -top-52"
                         src={getCartoon.image}
                    />
               </div>
               <div className="space-y-5 mt-48">
                    <div className="space-y-3">
                         <h2 className="text-2xl font-medium">{getCartoon.ct_title}</h2>
                         <h3 className="text-xl">
                              by
                              <span className="text-deep-teal font-medium capitalize">{getCartoon.ct_creator}</span>
                         </h3>
                         <div className="text-lg text-deep-teal font-medium flex gap-3">
                              <Image src={viewIcon} alt="view icon" />
                              <p>|</p>
                              <p>{getCartoon.published_year.split("-")[0]}</p>
                         </div>
                    </div>
                    <p className="text-justify">{getCartoon.ct_description}</p>
               </div>
          </div>
     );
}

export default page;
