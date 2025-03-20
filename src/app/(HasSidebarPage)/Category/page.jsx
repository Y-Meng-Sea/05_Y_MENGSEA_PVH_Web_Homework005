import React from "react";
import { getAllBooks } from "@/service/getProductService";
import CategoryCard from "@/app/components/CategoryCard";
export default async function BookCategoryPage({ searchParams }) {
     const allBooks = await getAllBooks();
     const categoryName = searchParams?.CategoryName || "All";

     const books =
          categoryName === "All" ? allBooks : allBooks.filter((book) => book.book_cate_id === Number(categoryName));

     return (
          <div className="p-5">
               <div className="flex justify-between flex-wrap gap-4 ">
                    {books.map((data) => {
                         return <CategoryCard key={data.id} data={data} />;
                    })}
               </div>
          </div>
     );
}
