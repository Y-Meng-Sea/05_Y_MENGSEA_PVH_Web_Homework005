import React from "react";
const layout = ({ children }) => {
     return (
          <div className="bg-whiteSmokeCustom">
               <div className="relative px-10 py-12 mx-auto bg-whiteSmokeCustom h-[100%]">
                    <div className="flex gap-5 items-center">
                         <a href="/Home" className="flex gap-2 font-medium text-lg items-center hover:text-deep-teal">
                              <svg
                                   width="24"
                                   height="24"
                                   viewBox="0 0 24 24"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                   <path
                                        d="M17.79 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.78V10.37C1.25 9.00997 2.09 7.29997 3.17 6.45997L8.56 2.25997C10.18 0.999974 12.77 0.939974 14.45 2.11997L20.63 6.44997C21.82 7.27997 22.75 9.05997 22.75 10.51V17.79C22.75 20.52 20.53 22.75 17.79 22.75ZM9.48 3.43997L4.09 7.63997C3.38 8.19997 2.75 9.46997 2.75 10.37V17.78C2.75 19.69 4.3 21.25 6.21 21.25H17.79C19.7 21.25 21.25 19.7 21.25 17.79V10.51C21.25 9.54997 20.56 8.21997 19.77 7.67997L13.59 3.34997C12.45 2.54997 10.57 2.58997 9.48 3.43997Z"
                                        fill="#0B3954"
                                   />
                                   <path
                                        d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
                                        fill="#0B3954"
                                   />
                              </svg>

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
                              <svg
                                   width="24"
                                   height="24"
                                   viewBox="0 0 24 24"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                   <path
                                        d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42"
                                        stroke="#0B3954"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                   />
                                   <path
                                        d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z"
                                        stroke="#0B3954"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                   />
                                   <path
                                        d="M8 7H16"
                                        stroke="#0B3954"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                   />
                                   <path
                                        d="M8 10.5H13"
                                        stroke="#0B3954"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                   />
                              </svg>

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
                              <svg
                                   width="24"
                                   height="24"
                                   viewBox="0 0 24 24"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                   <path
                                        d="M22 16.74V4.67001C22 3.47001 21.02 2.58001 19.83 2.68001H19.77C17.67 2.86001 14.48 3.93001 12.7 5.05001L12.53 5.16001C12.24 5.34001 11.76 5.34001 11.47 5.16001L11.22 5.01001C9.44 3.90001 6.26 2.84001 4.16 2.67001C2.97 2.57001 2 3.47001 2 4.66001V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z"
                                        stroke="#C81D25"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                   />
                                   <path
                                        d="M12 5.48999V20.49"
                                        stroke="#C81D25"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                   />
                                   <path
                                        d="M7.75 8.48999H5.5"
                                        stroke="#C81D25"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                   />
                                   <path
                                        d="M8.5 11.49H5.5"
                                        stroke="#C81D25"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                   />
                              </svg>
                              <p className="text-red-crimson capitalize">Tom &amp; Jerry</p>
                         </a>
                    </div>
                    {children}
               </div>
          </div>
     );
};

export default layout;
