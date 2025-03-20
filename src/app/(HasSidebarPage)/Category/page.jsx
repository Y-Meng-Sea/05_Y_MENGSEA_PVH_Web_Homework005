import React from "react";
import { getAllBooks, searchCategory } from "@/service/getProductService";
import CategoryCard from "@/app/components/CategoryCard";

export default async function BookCategoryPage({ searchParams }) {
     const allBooks = await getAllBooks();
     const categoryName = (await searchParams?.CategoryName) || "All";
     const searchName = (await searchParams?.search) || "";
     let books =
          categoryName === "All" ? allBooks : allBooks.filter((book) => book.book_cate_id === Number(categoryName));

     if (searchName.trim() !== "") {
          books = await searchCategory(searchName);
     }
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
