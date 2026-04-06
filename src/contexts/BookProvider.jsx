import { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        const isExist = readBooks.find(book => book.bookId === currentBook.bookId);

        if (isExist) {
            alert('Book Already in Read');
        } else {
            setReadBooks(prevBook => ([
                ...prevBook,
                currentBook
            ]))
            alert(`${currentBook.bookName} Added to Read`)
        }
    }
    const handleWishList = (currentBook) => {
        const isExist = wishList.find(book => book.bookId === currentBook.bookId);
        const isInReadList = readBooks.find(book => book.bookId === currentBook.bookId);

        if(isInReadList){
            alert(`${currentBook.bookName} Already in Read List`);
            return;
        }

        if (isExist) {
            alert('Book Already in Wishlist');
        } else {
            setWishList(prevBook => ([
                ...prevBook,
                currentBook
            ]))
            alert(`${currentBook.bookName} Added to Wishlist`);
        }
    }

    const data = {
        readBooks,
        setReadBooks,
        handleMarkAsRead,
        handleWishList,
        wishList, 
        setWishList
    }

    return (
        <BookContext.Provider value={data}>{children}</BookContext.Provider>
    );
}

export default BookProvider;