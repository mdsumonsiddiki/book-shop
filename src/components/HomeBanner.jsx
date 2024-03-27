import { Link } from 'react-router-dom';
import bannerImg from '../assets/bannerbook.svg';
const HomeBanner = () => {
    return (
        <div className="container mx-auto bg-[#1313130D] py-14 lg:py-20 rounded-xl mt-4 lg:mt-10 flex flex-col lg:flex-row items-center px-5 md:px-7 lg:px-28">
            <div className='w-full lg:w-3/4 order-2 lg:order-1 text-center lg:text-left mt-4 lg:mt-0'>
                <h1 className='text-black font-extrabold text-3xl md:text-4xl lg:text-6xl mb-10 lg:mb-16'>Explore Our Vast Collection of Books Today!</h1>
                <Link to={'booklist'} className="py-3 px-5 lg:py-5 lg:px-7 rounded-lg font-bold text-[#ffff] bg-praimary hover:bg-praimary">View The List</Link>
            </div>
            <img className='order-1 lg:order-2' src={bannerImg} alt="" />
        </div>
    );
};

export default HomeBanner;