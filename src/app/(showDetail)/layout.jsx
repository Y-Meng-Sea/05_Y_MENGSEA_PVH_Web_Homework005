import React from "react";
import { bookIconBlue, homeIconBlue, bookOpen } from "@/assets/icons/icons.js";
import Image from "next/image";
const layout = ({ children }) => {
     return (
          <div className="bg-whiteSmokeCustom">
               <div className="relative px-10 py-12 mx-auto bg-whiteSmokeCustom h-[100%]">
                    <div className="flex gap-5 items-center">
                         <a href="/Home" className="flex gap-2 font-medium text-lg items-center hover:text-deep-teal">
                              <Image src={homeIconBlue} alt="home icon" />
                              <p>Home</p>
                              <svg
                                   width="24"
                                   height="24"
                                   viewBox="0 0 24 24"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                   <path
                                        d="M8.91 20.67C8.72 20.67 8.53 20.6 8.38 20.45C8.09 20.16 8.09 19.68 8.38 19.39L14.9 12.87C15.38 12.39 15.38 11.61 14.9 11.13L8.38 4.61002C8.09 4.32002 8.09 3.84002 8.38 3.55002C8.67 3.26002 9.15 3.26002 9.44 3.55002L15.96 10.07C16.47 10.58 16.76 11.27 16.76 12C16.76 12.73 16.48 13.42 15.96 13.93L9.44 20.45C9.29 20.59 9.1 20.67 8.91 20.67Z"
                                        fill="#0B3954"
                                   />
                              </svg>
                         </a>
                         <a
                              href="/OldSchool"
                              className="flex gap-2 font-medium text-lg items-center hover:text-deep-teal group cursor-pointer">
                              <Image src={bookIconBlue} alt="home icon" />
                              <p className="capitalize">old school cartoons</p>
                              <svg
                                   width="24"
                                   height="24"
                                   viewBox="0 0 24 24"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                   <path
                                        d="M8.91 20.67C8.72 20.67 8.53 20.6 8.38 20.45C8.09 20.16 8.09 19.68 8.38 19.39L14.9 12.87C15.38 12.39 15.38 11.61 14.9 11.13L8.38 4.61002C8.09 4.32002 8.09 3.84002 8.38 3.55002C8.67 3.26002 9.15 3.26002 9.44 3.55002L15.96 10.07C16.47 10.58 16.76 11.27 16.76 12C16.76 12.73 16.48 13.42 15.96 13.93L9.44 20.45C9.29 20.59 9.1 20.67 8.91 20.67Z"
                                        fill="#0B3954"
                                   />
                              </svg>
                         </a>

                         <a className="flex gap-2 font-medium text-lg items-center">
                              <Image src={bookOpen} alt="home icon" />
                              <p className="text-red-crimson capitalize">Tom &amp; Jerry</p>
                         </a>
                    </div>
                    {children}
               </div>
          </div>
     );
};

export default layout;
