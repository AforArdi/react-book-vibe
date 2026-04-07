import { createBrowserRouter } from "react-router";
import Homepage from "../pages/homepage/Homepage";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";
import PagesToReadCharts from "../components/PagesToReadCharts/PagesToReadCharts";

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {index: true, Component: Homepage},
            {path: 'books', Component: Books},
            {
                path: 'bookDetails/:id', 
                Component: BookDetails,
                loader: ()=> fetch('/booksData.json')
            },
            {
                path: 'read',
                Component: PagesToReadCharts,
                loader: ()=> fetch('/booksData.json')
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
])