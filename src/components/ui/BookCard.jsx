import { FaRegStar } from "react-icons/fa";

const BookCard = ({book}) => {
    return ( 
        <div className="card bg-base-100 shadow-sm">
            <figure className="p-5 bg-[#f3f3f3]">
                <img
                src={book.image}
                alt={book.bookName}
                className="h-62.5"
                />
            </figure>
            <div className="card-body">
                <div className="flex items-center gap-2">
                    {
                        book.tags.map(tag => <div className="badge badge-soft border border-green-500 text-green">{tag}</div>)
                    }
                </div>

                <h2 className="card-title font-bold text-2xl">{book.bookName}</h2>
                <p className="font-medium text-[16px]">By: {book.author}</p>

                <div className="border border-accent border-dashed my-2"></div>

                <div className="flex justify-between font-medium text-[20px]">
                    <p>{book.category}</p>
                    <p className="flex items-center justify-end gap-2">{book.rating} <FaRegStar></FaRegStar></p>
                </div>
            </div>
        </div>
     );
}
 
export default BookCard;