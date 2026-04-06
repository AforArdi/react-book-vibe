import { useContext, useState } from "react";
import { BookContext } from "../../contexts/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../components/listedBooks/ListedReadList";
import ListedWishList from "../../components/listedBooks/ListedWishList";

const Books = () => {
    const [sortingType, setSortingType] = useState('');

    return ( 
        <div className="container mx-auto">
            {/* sorting dropdown */}
            <div className="flex justify-center items-center my-5">
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By: </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=>setSortingType('rating')}><a>Rating</a></li>
                        <li onClick={()=>setSortingType('pages')}><a>Number of Pages</a></li>
                        <li onClick={()=>setSortingType('year')}><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList sortingType={sortingType}></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList sortingType={sortingType}></ListedWishList>
                </TabPanel>
            </Tabs>

        </div>
     );
}
 
export default Books;