
import BooksCard from "./BooksCard";
import useBookData from "../../hooks/useBookData";
import { useState } from "react";

const Books = () => {
    const [showAll, setShowAll] = useState(false)
    const { data, loading } = useBookData();
    return (
        <div className="container mx-auto py-6 md:py-10 lg:py-16">
            <div className="text-center">
                <h2 className="text-3xl lg:text-4xl text-black font-extrabold">Books</h2>
            </div>
            <div className="flex justify-center items-center">
                {
                    loading ? <div className="w-16 mt-16  h-16 border-4 border-dashed border-second rounded-full animate-spin dark:border-violet-600"></div> : null
                }
            </div>
            <div className="grid grid-cols-1 px-3 md:px-2 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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