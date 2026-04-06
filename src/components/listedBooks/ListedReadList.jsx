import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../contexts/BookProvider";
import BookCard from "../ui/BookCard";
import { FaBookmark } from "react-icons/fa";

const ListedReadList = ({sortingType}) => {
    const {readBooks} = useContext(BookContext);
    const [sortedReadList, setSortedReadList] = useState(readBooks);

    useEffect(()=>{
        if(sortingType){
            if(sortingType === 'pages'){
                const sortedData = [...readBooks].sort((a, b)=> a.totalPages - b.totalPages);
                setSortedReadList(sortedData);
            } else if (sortingType === 'rating'){
                const sortedData = [...readBooks].sort((a, b)=> a.rating - b.rating);
                setSortedReadList(sortedData);
            } else if(sortingType === 'year'){
                const sortedData = [...readBooks].sort((a, b)=> a.yearOfPublishing - b.yearOfPublishing);
                setSortedReadList(sortedData);
            }
        }
    }, [sortingType, readBooks])

    if(readBooks.length === 0){
        return (
            <div className="h-[50vh] flex flex-col items-center justify-center bg-gray-100 rounded-lg">
                <FaBookmark size={40}></FaBookmark>
                <h2 className="font-bold text-3xl">No Books in Read List</h2>
            </div>
        )
    }

    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                sortedReadList.map(book=> <BookCard
                key={book.bookId}
                book={book}
                ></BookCard>)
            }
        </div>
     );
}
 
export default ListedReadList;