// import { FaAngleDown } from "react-icons/fa6";
import sendBanner from '../assets/secondBanner.jpg'
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
            <div className="relative w-full">
                <img className="h-96 w-full object-cover rounded-md" src={sendBanner} alt="" />
                <div className="absolute inset-0 bg-black opacity-45 rounded-md"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-3xl font-bold">{tabIndex == 0 ? "Read books" : 'Wishlist Books'}</h2>
                </div>
            </div>
            <div className="mt-16 text-center flex items-center px-7">
                <div className="flex items-center w-4/12 -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
                    <Link to='' onClick={() => setTabIndex(0)} className={`px-5 py-3 text-2xl text-black font-bold ${tabIndex === 0 ? 'border-2 border-b-0 rounded-t-xl' : "border-b"}`}>
                        Read Books
                    </Link>
                    <Link to={'wishlist'} onClick={() => setTabIndex(1)} className={`px-5 py-3 text-2xl text-black font-bold ${tabIndex === 1 ? 'border-2 border-b-0 rounded-t-xl' : "border-b"}`}>
                        Wishlist Books
                    </Link>
                </div>
                <div className='border-b w-8/12 -ml-9 flex justify-end items-center'>
                    <details className="dropdown mr-12">
                        <summary className="m-1 py-2 px-7 font-bold text-2xl rounded-xl flex justify-center items-center gap-2 bg-second text-white cursor-pointer">Sort By
                        </summary>
                        <ul className="menu dropdown-content z-[1] text-2xl bg-black rounded-xl space-y-1 bg-opacity-55">
                            <li><button onClick={() => handleShort('rating')} className="btn bg-second">Number of Rating</button></li>
                            <li><button onClick={() => handleShort('year')} className="btn bg-second">Publishing Years</button></li>
                            <li><button onClick={() => handleShort('page')} className="btn bg-second">Number of Pages</button></li>
                        </ul>
                    </details>
                </div>
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