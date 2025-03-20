import React from "react";
import { Button } from "@heroui/react";

const CategoryCard = async ({ data }) => {
     return (
          <div className="w-2/5 bg-blueSlateCustom relative grid grid-cols-2 items-center justify-between p-6 rounded-3xl mt-20">
               <div>
                    <img
                         src={data.image}
                         alt={data.book_title}
                         width="130px"
                         className="rounded-2xl absolute -top-[30%] h-[90%] object-cover object-center left-6"
                    />
                    <Button className="absolute bottom-[10%] bg-red-600 uppercase text-[10px]" radius="md">
                         read full article
                    </Button>
               </div>
               <div>
                    <h1 className="text-xl line-clamp-1">{data.book_title}</h1>
                    <p className="text-gray-400 line-clamp-4">{data.description}</p>
               </div>
          </div>
     );
};

export default CategoryCard;
