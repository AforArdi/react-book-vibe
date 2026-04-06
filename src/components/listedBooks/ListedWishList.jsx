import { useContext } from "react";
import { BookContext } from "../../contexts/BookProvider";
import BookCard from "../ui/BookCard";

const ListedWishList = () => {
    const {wishList} = useContext(BookContext);
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                wishList.map(book=> <BookCard
                key={book.bookId}
                book={book}
                ></BookCard>)
            }
        </div>
     );
}
 
export default ListedWishList;