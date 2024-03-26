import UseData from "../../hooks/UseData";
import BooksCard from "./BooksCard";

const Books = () => {
    const {books} = UseData();
    return (
        <div className="container mx-auto py-16">
            <div className="text-center">
                <h2 className="text-4xl text-black font-extrabold">Books</h2>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
                {
                books.map(book => <BooksCard key={book.id} book={book}></BooksCard>)
                } 
            </div>
        </div>
    );
};

export default Books;