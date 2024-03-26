
import { useEffect, useState } from "react";
import Card from "./Card";
import { useLoaderData } from "react-router-dom";
import { getLocalData } from "../../utility/utility";

const ReadBook = () => {
    const [books, setBooks] = useState([])
    const data = useLoaderData()
    useEffect(() => {
       const localData = getLocalData();
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

export default ReadBook;