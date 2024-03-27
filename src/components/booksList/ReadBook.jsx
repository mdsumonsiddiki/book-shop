
import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { useLoaderData } from "react-router-dom";
import { getLocalData } from "../../utility/utility";
import ReadNotFound from "./ReadNotFound";
import { ShortContext } from "../../pages/BookList";

const ReadBook = () => {
    const shortData = useContext(ShortContext)
    const [books, setBooks] = useState([])
    const [shortBooks, setShortBooks] = useState([])
    const [showAll, setShowAll] = useState(false)
    const data = useLoaderData()
    useEffect(() => {
        const localData = getLocalData();
        if (data.length > 0) {
            const books = data.filter(book => localData.includes(book.id))
            setBooks(books);
            setShortBooks(books);
            if (shortData === 'rating') {
                const rating = books.sort((a, b) => a.rating - b.rating);
                setShortBooks(rating);
            }
            else if (shortData === 'year') {
                const year = books.sort((a, b) => a.year_of_publishing - b.year_of_publishing);
                setShortBooks(year);
            }
            else if (shortData === 'page') {
                const pages = books.sort((a, b) => a.total_pages - b.total_pages);
                setShortBooks(pages);
            }
        }
    }, [shortData, data]);
    return (
        <>
            {
                shortBooks.length == 0 ? <div>
                    <ReadNotFound />
                </div> : null
            }
            <div className="mt-10 space-y-6">
                {
                    shortBooks.slice(0, showAll ? books.length : 6).map((book, idx) => <Card key={idx} book={book} />)
                }
            </div>
            <div>
                {
                    shortBooks.length > 6 ? <div className="text-center mt-8 pb-10">
                        <button onClick={() => setShowAll(!showAll)} className="btn btn-secondary text-2xl font-medium">{!showAll ? "ShowAll" : "ShowLess"}</button>
                    </div> : null
                }
            </div>
        </>
    );
};

export default ReadBook;