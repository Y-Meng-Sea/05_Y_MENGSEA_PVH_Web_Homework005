"use client"
import {Button} from "@heroui/react";
import {getAllBookCategorys,getAllCartoons} from "@/service/getProductService"
import { usePathname } from 'next/navigation'
import React from 'react'
const Filter = async() => {
    const pathName = usePathname();
    let handlePathName;
    if(pathName == "/Home"){
        handlePathName = "Homepage"
    }else if (pathName == "/Category"){
        handlePathName = "All Books"
    }else if (pathName == "/OldSchool"){
        handlePathName = "Old School Cartoon";
    }

    const bookCategory = await getAllBookCategorys();
    const cartoons = await getAllCartoons();
  return (
    <div className='sticky top-0 z-10 bg-white pt-5'>  
        <div className={`w-full flex ${pathName == "/Home" ? "justify-end" : "justify-between" }`}>
            {(pathName !== "/Home")&& <Button className="text-blueCustom px-5 py-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-xl mb-2">
            {handlePathName}
            </Button>}
            {pathName=="/Category" && 
            <form className="">
                <select className="bg-gray-200 text-gray-400 text-sm rounded-lg  block w-full p-2.5 outline-none selection:text-blueCustom">
                    <option defaultValue='choose a country'>Select Category</option>
                    {bookCategory.map((category)=>{
                        return <option key={category.id} value={category.book_cate_name}>{category.book_cate_name}</option>
                    })}
                </select>
            </form>}
            
            {pathName == "/OldSchool" && 
            <form className="">
                <select className="bg-gray-200 text-gray-400 text-sm rounded-lg  block w-full p-2.5 outline-none selection:text-blueCustom">
                    <option defaultValue='choose a country'>Select Category</option>
                    {cartoons.map((cartoon)=>{
                        return  <option key={cartoon.id} value={cartoon.cartoon_genre}>{cartoon.cartoon_genre}</option>
                    })}
                </select>
            </form>}
        </div>
         <hr className='w-full border-blueCustom ' />
    </div>
    
  )
}

export default Filter
