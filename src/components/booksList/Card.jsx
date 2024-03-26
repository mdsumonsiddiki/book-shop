import img from '../../assets/bannerbook.svg';
// import { FaLocationDot, FaUserCheck, FaBookOpen  } from "react-icons/fa6";




const Card = () => {
    return (
        <div className='flex items-start gap-12 p-6 border-2 border-black border-opacity-15 rounded-xl'>
            <div className='bg-black bg-opacity-5 flex items-center justify-center py-16 rounded-lg w-3/12'>
                <img className='w-2/3 h-2/3' src={img} alt="" />
            </div>
            <div className='space-y-10 mt-3'>
                <h2 className='text-2xl font-bold text-black'>The Catcher in the Rye</h2>
                <p className='text-lg font-medium'>By : Awlad Hossain</p>
                <div className='flex items-center gap-6'>
                    <ul className='flex items-center gap-4'>
                        <li className='text-black text-2xl font-bold'>Tag</li>
                        <li className='text-praimary rounded-2xl bg-praimary bg-opacity-5 font-medium py-2 px-3'><a>Young Adult</a></li>
                        <li className='text-praimary rounded-2xl bg-praimary bg-opacity-5 font-medium py-2 px-3'><a>Identity</a></li>
                    </ul>
                    <p className='text-lg font-medium flex items-center gap-5'>
                        <span>Year of Publishing: 1924</span></p>
                </div>
                <div className='flex items-center gap-6'>
                    <p className='text-lg font-medium flex items-center gap-5'><span>Publisher: Scribner</span></p>
                    <p className='text-lg font-medium flex items-center gap-5'><span>Page 192</span></p>
                </div>
                <ul className='flex items-center gap-7 pt-5 border-t-2 border-black border-opacity-15'>
                    <li className='text-[#328EFF] font-medium bg-[#328EFF] bg-opacity-10 py-3 px-4 rounded-full'>Category: Classic</li>
                    <li className='text-[#FFAC33] font-medium bg-[#FFAC33] bg-opacity-10 py-3 px-4 rounded-full'>Rating: 4.5</li>
                    <li className='text-[#23BE0A] font-medium bg-[#23BE0A] bg-opacity-10 py-3 px-4 rounded-full'>View Details</li>
                </ul>
            </div>
        </div>
    );
};

export default Card;