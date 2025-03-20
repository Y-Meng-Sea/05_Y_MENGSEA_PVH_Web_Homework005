"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "@/assets/profile.jpg";
import navLinks from "@/data/navLink/navLink.js";
import { settingIcon } from "@/assets/icons/icons.js";
import { usePathname } from "next/navigation";
const Sidebar = () => {
     const pathName = usePathname();
     return (
          <div className="flex flex-col items-center py-5">
               <Image src={profile} alt="profile-image" className="w-[7rem] h-[7rem] rounded-full" />
               <p>Y Meng Sea</p>
               <p className="text-blueCustom">ymengsea@gmail.com</p>
               <nav className="pt-7 w-[80%] mx-auto">
                    <ul className="list-none ">
                         {navLinks.map((link, index) => {
                              return (
                                   <li key={index}>
                                        <Link
                                             href={link.path}
                                             className={`flex items-center gap-3 text-sm text-gray-700 hover:text-gray-950  p-2 transition-all rounded-lg ${
                                                  pathName === link.path
                                                       ? "bg-slate-300 text-gray-900 font-bold"
                                                       : "bg-none hover:bg-slate-200 hover:font-bold"
                                             }`}>
                                             {<Image src={link.icon} alt={link.category} width={17} />} {link.category}
                                        </Link>
                                   </li>
                              );
                         })}
                         <li className="pt-7">
                              <Link href="#" className="flex items-center gap-3 text-sm bg-slate-300 p-2 rounded-lg">
                                   {<Image src={settingIcon} alt="Setting icon" width={17} />} Settings
                              </Link>
                         </li>
                    </ul>
               </nav>
          </div>
     );
};

export default Sidebar;
