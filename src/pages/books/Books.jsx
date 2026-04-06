import { useContext } from "react";
import { BookContext } from "../../contexts/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookCard from "../../components/ui/BookCard";
import { FaBookmark } from "react-icons/fa";
import ListedReadList from "../../components/listedBooks/ListedReadList";
import ListedWishList from "../../components/listedBooks/ListedWishList";

const Books = () => {
    const {wishList, readBooks} = useContext(BookContext);
    // console.log(wishList, readBooks);

    if(readBooks.length === 0){
        return (
            <div>
                <FaBookmark></FaBookmark>
                <h2 className="font-bold text-3xl">No Books in Read List</h2>
            </div>
        )
    }

    return ( 
        <div className="container mx-auto">

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList></ListedWishList>
                </TabPanel>
            </Tabs>

        </div>
     );
}
 
export default Books;