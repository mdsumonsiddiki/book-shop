// import { FaAngleDown } from "react-icons/fa6";
import { createContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

export const ShortContext = createContext();

const BookList = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [shortValue, setShortValue] = useState('')
    const handleShort = (text) => {
        setShortValue(text)
    }
    return (
        <div className="container mx-auto mt-7">
            <div className="bg-black bg-opacity-5 text-center p-8 rounded-xl">
                <h2 className="text-black text-3xl font-bold">Books</h2>
            </div>
            <div className="mt-7 text-center">
                <details className="dropdown">
                    <summary className="m-1 py-2 px-7 font-bold text-2xl rounded-xl flex justify-center items-center gap-2 bg-praimary text-white cursor-pointer">Sort By
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-black bg-opacity-5 rounded-box w-52 text-2xl">

                        <li><button onClick={() => handleShort('rating')} className="btn">Number of Rating</button></li>
                        <li><button onClick={() => handleShort('year')} className="btn">Publishing Years</button></li>
                        <li><button onClick={() => handleShort('page')} className="btn">Number of Pages</button></li>
                    </ul>
                </details>
            </div>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap mt-10">
                <Link to='' onClick={() => setTabIndex(0)} className={`px-5 py-3 text-2xl text-black font-bold ${tabIndex === 0 ? 'border-2 border-b-0 rounded-t-xl' : "border-b"}`}>
                    Read Books
                </Link>
                <Link to={'wishlist'} onClick={() => setTabIndex(1)} className={`px-5 py-3 text-2xl text-black font-bold ${tabIndex === 1 ? 'border-2 border-b-0 rounded-t-xl' : "border-b"}`}>
                    Wishlist Books
                </Link>
            </div>
            <div>
                <ShortContext.Provider value={shortValue}>
                    <Outlet />
                </ShortContext.Provider>
            </div>
        </div>
    );
};
BookList.propTypes = {
    hangleFiter: PropTypes.func,
}
export default BookList;