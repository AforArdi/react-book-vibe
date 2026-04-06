import { useContext } from "react";
import { BookContext } from "../../contexts/BookProvider";
import BookCard from "../ui/BookCard";
import { FaBookmark } from "react-icons/fa";

const ListedWishList = () => {
    const {wishList} = useContext(BookContext);

    if(wishList.length === 0){
        return (
            <div className="h-[50vh] flex flex-col items-center justify-center bg-gray-100 rounded-lg">
                <FaBookmark size={40}></FaBookmark>
                <h2 className="font-bold text-3xl">No Books in Wish List</h2>
            </div>
        )
    }

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