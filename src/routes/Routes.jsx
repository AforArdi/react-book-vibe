import { createBrowserRouter } from "react-router";
import Homepage from "../pages/homepage/Homepage";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {index: true, Component: Homepage},
            {path: 'books', Component: Books},
        ]
    }
])