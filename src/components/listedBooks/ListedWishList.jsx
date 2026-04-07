import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../contexts/BookProvider";
import BookCard from "../ui/BookCard";
import { FaBookmark } from "react-icons/fa";

const ListedWishList = ({sortingType}) => {
    const {wishList} = useContext(BookContext);

    const [sortedWishList, setSortedWishList] = useState(wishList);
    useEffect(()=>{
        if(sortingType){
            if(sortingType === 'pages'){
                const sortedData = [...wishList].sort((a, b)=> a.totalPages - b.totalPages);
                setSortedWishList(sortedData);
            } else if (sortingType === 'rating'){
                const sortedData = [...wishList].sort((a, b)=> a.rating - b.rating);
                setSortedWishList(sortedData);
            } else if(sortingType === 'year'){
                const sortedData = [...wishList].sort((a, b)=> a.yearOfPublishing - b.yearOfPublishing);
                setSortedWishList(sortedData);
            }
        }
    }, [sortingType, wishList])

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
                sortedWishList.map(book=> <BookCard
                key={book.bookId}
                book={book}
                ></BookCard>)
            }
        </div>
     );
}
 
export default ListedWishList;