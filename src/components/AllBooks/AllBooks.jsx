import { use } from "react";
import BookCard from "../ui/BookCard";

const bookPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
    const books = use(bookPromise);
    return ( 
        <div className="container mx-auto">
            <h2 className="font-bold text-4xl text-center mb-5">Books</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    books.map(book => {
                        return <BookCard key={book.bookId} book={book}></BookCard>
                    })
                }
            </div>
        </div>
     );
}
 
export default AllBooks;