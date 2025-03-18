"use client"
import {Button} from "@heroui/react";
import { useParams, usePathname } from 'next/navigation'
import React from 'react'
const Filter = () => {
    const pathName = usePathname();
    let handlePathName;
    if(pathName == "/Home"){
        handlePathName = "Homepage"
    }else if (pathName == "/Category"){
        handlePathName = "All Books"
    }else if (pathName == "/OldSchool"){
        handlePathName = "Old School Cartoon";
    }
  return (
    <div className='sticky top-0 z-10 bg-white pt-5'>  
        <div className='w-full flex justify-between '>
            <Button className="text-blueCustom px-5 py-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-xl mb-2">
            {handlePathName}
            </Button>
            <form className="">
                <select className="bg-gray-200 text-gray-400 text-sm rounded-lg  block w-full p-2.5 outline-none selection:text-blueCustom">
                    <option defaultValue='choose a country'>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </form>
        </div>
         <hr className='w-full border-blueCustom ' />
    </div>
    
  )
}

export default Filter
