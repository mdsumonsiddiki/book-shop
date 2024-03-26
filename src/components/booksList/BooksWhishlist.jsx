import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
import { getWhishData } from "../../utility/utility";


const BooksWhishlist = () => {
    const [books, setBooks] = useState([])
    const data = useLoaderData()
    useEffect(() => {
       const localData = getWhishData();
       if(data.length > 0){
        const books = data.filter(book => localData.includes(book.id))
        setBooks(books);
        }
        
    }, [data]);
    return (
        <div className="mt-10 space-y-6">
            {
                books.map((book, idx) => <Card key={idx} book={book} />)
            }
        </div>
    );
};

export default BooksWhishlist;