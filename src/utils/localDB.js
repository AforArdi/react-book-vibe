// localStorage getting and adding function for read list
const getAllReadListfromLocalDB = () => {
    const allReadList = localStorage.getItem('readBooks');

    if(allReadList) return JSON.parse(allReadList);
    return [];
}
const addReadListLocalDB=(currentBook)=>{
    const allBooks = getAllReadListfromLocalDB();
    const isExist = allBooks.find(book=> book.bookId === currentBook.bookId);

    if(!isExist){
        allBooks.push(currentBook);
        localStorage.setItem('readBooks' , JSON.stringify(allBooks));
    }
}


// localStorage getting and adding function for wish list
const getAllWishListfromLocalDB = () => {
    const allReadList = localStorage.getItem('wishList');

    if(allReadList) return JSON.parse(allReadList);
    return [];
}
const addWishListLocalDB=(currentBook)=>{
    const allBooks = getAllWishListfromLocalDB();
    const isExist = allBooks.find(book=> book.bookId === currentBook.bookId);

    if(!isExist){
        allBooks.push(currentBook);
        localStorage.setItem('wishList' , JSON.stringify(allBooks));
    }
}


export {getAllReadListfromLocalDB, addReadListLocalDB,
    getAllWishListfromLocalDB, addWishListLocalDB
};