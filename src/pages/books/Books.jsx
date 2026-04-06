import { useContext } from "react";
import { BookContext } from "../../contexts/BookProvider";

const Books = () => {
    const {wishList, readBooks} = useContext(BookContext);
    console.log(wishList, readBooks);
    return ( 
        <div>
            Books
        </div>
     );
}
 
export default Books;