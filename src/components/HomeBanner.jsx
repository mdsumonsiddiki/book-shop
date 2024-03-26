import { Link } from 'react-router-dom';
import bannerImg from '../assets/bannerbook.svg';
const HomeBanner = () => {
    return (
        <div className="container mx-auto bg-[#1313130D] py-20 rounded-xl mt-10 flex items-center justify-around">
            <div>
                <h1 className='text-black font-extrabold text-6xl mb-16'>Books to freshen up <br /> your bookshelf</h1>
                <Link className="py-5 px-7 rounded-lg font-bold text-[#ffff] bg-praimary hover:bg-praimary">View The List</Link>
            </div>
            <img src={bannerImg} alt="" />
        </div>
    );
};

export default HomeBanner;