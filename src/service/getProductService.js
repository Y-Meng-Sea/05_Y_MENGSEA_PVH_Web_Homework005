"use server";
export const getAllProduct = async () => {
     const cartoons = await fetch("https://nextjs-homework005.vercel.app/api/cartoon");
     const dataJson = await cartoons.json();
     return dataJson.payload;
};
export const getAllBooks = async () => {
     const books = await fetch("https://nextjs-homework005.vercel.app/api/book");
     const jsonData = await books.json();
     return jsonData.payload;
};

export const getAllBookCategorys = async () => {
     try {
          const res = await fetch("https://nextjs-homework005.vercel.app/api/book_category");
          console.log("bookcat", res);
          const booksCategory = await res.json();
          return booksCategory.payload;
     } catch (error) {
          console.log(error);
     }
};

export const getAllCartoons = async () => {
     const res = await fetch("https://nextjs-homework005.vercel.app/api/cartoon_genre");

     const cartoons = await res.json();
     return cartoons.payload;
};
