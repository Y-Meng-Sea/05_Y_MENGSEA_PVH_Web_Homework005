import React from "react";

async function CartoonCard({ data }) {
     return (
          <div key={data.id} className="bg-white rounded-3xl overflow-hidden w-64">
               <div className="relative">
                    <div className="aspect-w-4 aspect-h-4 bg-gray-500 rounded-3xl">
                         <div className="w-full h-full flex items-center justify-center shadow-lg rounded-3xl">
                              <img
                                   alt={data.ct_title}
                                   src={data.image}
                                   className="w-full h-full object-cover rounded-3xl"
                              />
                         </div>
                    </div>
               </div>

               <div className="p-3">
                    <h3 className="font-medium text-md">{data.ct_title}</h3>
                    <div className="flex items-center mt-1 text-xs text-gray-500">
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1 text-blueCustom"
                              viewBox="0 0 20 20"
                              fill="currentColor">
                              <path
                                   fillRule="evenodd"
                                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                   clipRule="evenodd"
                              />
                         </svg>
                         <span className="text-blueCustom">{data.view_count} times</span>
                         <span className="mx-2 text-blueCustom">|</span>
                         <span className="text-blueCustom">{data.published_year}</span>
                    </div>
               </div>
          </div>
     );
}

export default CartoonCard;
