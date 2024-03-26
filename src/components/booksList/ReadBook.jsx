
import { useEffect, useState } from "react";
import Card from "./Card";

const ReadBook = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('read-books')) || [];
        setBooks(localData);
        setBooks(localData);
    }, [])
    console.log(books);
    return (
        <div className="mt-10 space-y-6">
            {
                books.map((book, idx) => <Card key={idx} book={book} />)
            }
        </div>
    );
};

export default ReadBook;