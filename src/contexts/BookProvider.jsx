import { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [readBooks, setReadBooks] = useState([]);

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

    const data = {
        readBooks,
        setReadBooks,
        handleMarkAsRead
    }

    return (
        <BookContext.Provider value={data}>{children}</BookContext.Provider>
    );
}

export default BookProvider;