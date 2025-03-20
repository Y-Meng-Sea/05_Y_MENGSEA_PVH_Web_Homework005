import React from "react";
import Image from "next/image";
import img from "@/assets/images/study.jpg";
import { getCategoryById } from "@/service/getProductService.js";

const page = async ({ searchParams }) => {
     const categoryId = (await searchParams?.id) || "";
     const getCategory = await getCategoryById(Number(categoryId));
     return (
          <div className="bg-white mt-32 max-h-full p-20 pb-14 rounded-[50px]">
               <div className="flex justify-end relative">
                    <img
                         alt="cover"
                         width={300}
                         height={350}
                         className="rounded-3xl drop-shadow-xl absolute -top-52"
                         src={getCategory.image}
                    />
               </div>
               <div className="space-y-5 mt-48">
                    <div className="space-y-3">
                         <h2 className="text-2xl font-medium">{getCategory.book_title}</h2>
                         <h3 className="text-xl">
                              by
                              <span className="text-deep-teal font-medium capitalize">{getCategory.book_author}</span>
                         </h3>
                    </div>
                    <p className="text-justify">{getCategory.description}</p>
               </div>
          </div>
     );
};

export default page;
