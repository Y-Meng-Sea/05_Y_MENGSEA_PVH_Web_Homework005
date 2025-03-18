import React from "react";
import image from "@/assets/images/study.jpg";
import Image from "next/image";
import { Button } from "@heroui/react";
const page = async () => {
    const data = await fetch('https://nextjs-homework005.vercel.app/api/book');
    const jsonData = await data.json();
    console.log(jsonData.payload)
     return (
          <div className="p-5">
               <div className="flex justify-evenly flex-wrap">
                    {jsonData.payload.map((data)=>{
                      return(
                        <div key={data.id} className="w-2/5 bg-blueSlateCustom relative grid grid-cols-2 items-center justify-between p-6 rounded-3xl mt-20">
                              <div>
                                   <img
                                        src={data.image}
                                        alt=""
                                        width='130px'
                                        className="rounded-2xl absolute -top-[30%] h-[90%] object-cover object-center left-6"
                                   />
                                   <Button className="absolute bottom-[10%] bg-red-600 uppercase text-[10px]" radius="md">
                                        read full article
                                   </Button>
                              </div>
                              <div >
                                   <h1 className="text-xl line-clamp-1">{data.book_title}</h1>
                                   <p className="text-gray-400 line-clamp-4">
                                        {data.description}
                                   </p>
                              </div>
                      </div>
                      );
                    })}
               </div>
          </div>
     );
};

export default page;
