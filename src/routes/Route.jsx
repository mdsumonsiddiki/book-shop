import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import BooksDetails from "../pages/BooksDetails";
import BookList from "../pages/BookList";
import ReadBook from "../components/booksList/ReadBook";
import BooksWhishlist from "../components/booksList/BooksWhishlist";
import Chart from "../pages/Chart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/books/:id',
                element: <BooksDetails />,
                loader: ()=> fetch('../books.json')
            },
            {
                path: '/booklist',
                element: <BookList />,
                children: [
                    {

                        path: '',
                        element: <ReadBook />,
                        loader: ()=> fetch('../books.json'),
                    },
                    {

                        path: 'wishlist',
                        element: <BooksWhishlist />,
                        loader: ()=> fetch('../books.json'),
                    }
                ]
            },
            {
                path:'/chart',
                element: <Chart/>,
                loader: ()=> fetch('../books.json')
            }
        ]
    },
]);