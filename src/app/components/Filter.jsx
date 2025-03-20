"use client";
import { Button } from "@heroui/react";
import { getAllBookCategorys, getAllCartoons } from "@/service/getProductService";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Filter = () => {
     const pathName = usePathname();
     const router = useRouter();

     let handlePathName;
     const [bookCategory, setBookCategory] = useState([]);
     const [cartoons, setCartoons] = useState([]);
     const fetchBook = async () => {
          try {
               const fetchCategories = await getAllBookCategorys();
               const fetchCartoon = await getAllCartoons();
               setBookCategory(fetchCategories);
               setCartoons(fetchCartoon);
          } catch (error) {}
     };
     useEffect(() => {
          fetchBook();
     }, []);

     if (pathName == "/Home") {
          handlePathName = "Homepage";
     } else if (pathName == "/Category") {
          handlePathName = "All Books";
     } else if (pathName == "/OldSchool") {
          handlePathName = "Old School Cartoon";
     }

     return (
          <div className="sticky top-0 z-10 bg-white pt-5">
               <div className={`w-full flex ${pathName == "/Home" ? "justify-start" : "justify-between"}`}>
                    <Button className="text-blueCustom px-5 py-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-xl mb-2">
                         {handlePathName}
                    </Button>
                    {pathName == "/Category" && (
                         <form className="">
                              <select
                                   onChange={(e) => {
                                        if (e.target.value !== "All") {
                                             console.log(e.target.value);
                                             router.push(`/Category?CategoryName=${e.target.value}`);
                                        } else {
                                             console.log(e.target.value);
                                             router.push("/Category");
                                        }
                                   }}
                                   className="bg-gray-200 text-gray-400 text-sm rounded-lg  block w-full p-2.5 outline-none selection:text-blueCustom">
                                   <option value="All">Select Category</option>
                                   {bookCategory?.map((category) => {
                                        return (
                                             <option key={category.id} value={category.id}>
                                                  {category.book_cate_name}
                                             </option>
                                        );
                                   })}
                              </select>
                         </form>
                    )}

                    {pathName == "/OldSchool" && (
                         <form className="">
                              <select
                                   onChange={(e) => {
                                        if (e.target.value !== "All") {
                                             console.log(e.target.value);
                                             router.push(`/OldSchool?CartoonName=${e.target.value}`);
                                        } else {
                                             console.log(e.target.value);
                                             router.push("/OldSchool");
                                        }
                                   }}
                                   className="bg-gray-200 text-gray-400 text-sm rounded-lg  block w-full p-2.5 outline-none selection:text-blueCustom">
                                   <option value="All">Select Category</option>
                                   {cartoons.map((cartoon) => {
                                        return (
                                             <option key={cartoon.id} value={cartoon.id}>
                                                  {cartoon.cartoon_genre}
                                             </option>
                                        );
                                   })}
                              </select>
                         </form>
                    )}
               </div>
               <hr className="w-full border-blueCustom " />
          </div>
     );
};

export default Filter;
