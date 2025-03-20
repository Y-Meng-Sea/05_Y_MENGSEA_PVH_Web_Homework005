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
     const req = await fetch("https://nextjs-homework005.vercel.app/api/cartoon_genre");

     const cartoons = await req.json();
     return cartoons.payload;
};

export const searchCategory = async (search) => {
     const req = await fetch(`https://nextjs-homework005.vercel.app/api/book?search=${search}`);
     const res = await req.json();
     return res.payload;
};

export const searchCartoon = async (search) => {
     const req = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon?search=${search}`);
     const res = await req.json();
     return res.payload;
};

export const getCartoonById = async (id) => {
     const req = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon/${id}`);
     const res = await req.json();
     return res.payload;
};

export const getCategoryById = async (id) => {
     const req = await fetch(`https://nextjs-homework005.vercel.app/api/book/${id}`);
     const res = await req.json();
     return res.payload;
};
