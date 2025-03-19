export const getAllProduct = async ()=>{
    const cartoons = await fetch("https://nextjs-homework005.vercel.app/api/cartoon");
    const dataJson = await cartoons.json();
    return dataJson;
}
export const getAllBooks = async ()=>{
    const books = await fetch('https://nextjs-homework005.vercel.app/api/book');
    const jsonData = await books.json();
    return jsonData;
}

export const getAllBookCategorys = async ()=>{
    const res = await fetch ("https://nextjs-homework005.vercel.app/api/book_category");
    const booksCategory = await res.json();
    return booksCategory.payload
}

export const getAllCartoons = async ()=>{
    const res = await fetch("https://nextjs-homework005.vercel.app/api/cartoon_genre");
    const cartoons = await res.json();
    return cartoons.payload;
}