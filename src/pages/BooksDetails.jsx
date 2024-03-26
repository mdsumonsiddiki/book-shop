import { Link, useParams } from 'react-router-dom';
import UseData from '../hooks/UseData';
import { useEffect, useState } from 'react';
const BooksDetails = () => {
    const [book , setBook] = useState([]);
    const {books} = UseData()
    const {id} = useParams();
    useEffect(()=>{
        const getBooks = books.find(item => item.id == parseInt(id));
        setBook(getBooks)
    },[books, id]);
    
    console.log(book)

    return (
        <div className='container mx-auto flex gap-8 mt-16 pb-16'>
            <div className='w-1/2 bg-black bg-opacity-5 rounded-2xl flex items-center justify-center'>
                <img className='w-2/3 h-2/3 object-contain' src={book.image} alt="" />
            </div>
            <div className='space-y-7 w-1/2'>
                <h2 className='text-black font-bold text-4xl'>{book.book_name}</h2>
                <p className='text-black text-2xl font-medium'>By : {"author"}</p>
                <p className='text-black text-2xl font-medium py-5 border-y-2 border-dashed border-black border-opacity-15'>{"category"}</p>
                <p className='text-black text-xl font-medium'><span className='font-bold text-2xl'>Review :</span> {"review"}</p>
                <ul className='flex items-center gap-4 border-b-2 pb-7 border-dashed border-black border-opacity-15'>
                    <li className='text-black text-2xl font-bold'>Tag</li>
                    <li  className='text-praimary rounded-2xl bg-praimary bg-opacity-5 font-medium py-2 px-3'><a>{"fdhfg"}</a></li>
                </ul>
                <div className='w-4/6 space-y-5 pb-7'>
                    <p className='text-black text-xl font-medium flex items-center justify-between'>Number of Pages: <span className='font-bold text-2xl'>{"total_pages"}</span></p>
                    <p className='text-black text-xl font-medium flex items-center justify-between'>Publisher: <span className='font-bold text-2xl'>{"publisher"}</span></p>
                    <p className='text-black text-xl font-medium flex items-center justify-between'>Year of Publishing: <span className='font-bold text-2xl'>{"year_of_publishing"}</span></p>
                    <p className='text-black text-xl font-medium flex items-center justify-between'>Rating: <span className='font-bold text-2xl'>{"rating"}</span></p>
                </div>
                <div className='space-x-7'>
                    <Link className="py-5 px-7 rounded-lg font-bold text-[#ffff] bg-praimary hover:bg-praimary">Read</Link>
                    <Link className="py-5 px-7 rounded-lg font-bold text-[#ffff]  bg-second hover:bg-second">Wishlist</Link>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;