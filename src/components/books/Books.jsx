
import BooksCard from "./BooksCard";
import useBookData from "../../hooks/useBookData";
import { useState } from "react";

const Books = () => {
    const [showAll, setShowAll] = useState(false)
    const { data } = useBookData();
    return (
        <div className="container mx-auto py-16">
            <div className="text-center">
                <h2 className="text-4xl text-black font-extrabold">Books</h2>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
                {
                    data.slice(0, showAll ? data.length : 6).map(book => <BooksCard
                        key={book.id}
                        book={book}
                    ></BooksCard>)
                }
            </div>
            {
                data.length > 6 ? <div className="text-center mt-8">
                    <button onClick={() => setShowAll(!showAll)} className="btn btn-secondary text-2xl font-medium">{!showAll ? "ShowAll" : "ShowLess"}</button>
                </div> : null
            }
        </div>
    );
};

export default Books;