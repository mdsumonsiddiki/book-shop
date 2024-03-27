import { Link } from 'react-router-dom';
import bookSelf from '../assets/bookSelf.jpg';
import other from '../assets/other.png';
import video from '../assets/video.mp4';
import { FaBook } from "react-icons/fa6";
import { FaUserFriends, FaCartPlus } from "react-icons/fa";
import { BsEmojiSmileFill } from "react-icons/bs";



const AboutUs = () => {
    return (
        <div className="container mx-auto pb-16">
            <div className="relative w-full">
                <img className="h-96 w-full object-cover rounded-md" src={bookSelf} alt="" />
                <div className="absolute inset-0 bg-black opacity-15 rounded-md"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                        <h2 className="text-white text-3xl font-bold">& Read Books <br />& Gain Valuable Knowledge  <br />& Improve Your Memory</h2>
                        <Link to={'/'} className='btn bg-second hover:bg-second text-white font-bold text-xl mt-4'>Read Books</Link>
                    </div>
                </div>
            </div>
            <div className='mt-10 bg-black py-10 rounded-full bg-opacity-15 flex items-center justify-around'>
                <div className='flex items-center gap-4'>
                    <div className='p-4 rounded-full bg-second bg-opacity-25 text-second'>
                        <FaBook className='text-2xl' />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>8,254</h1>
                        <p className='text-lg font-medium'>total books</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='p-4 rounded-full bg-praimary bg-opacity-25 text-praimary'>
                        <FaUserFriends className='text-2xl' />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>1,456</h1>
                        <p className='text-lg font-medium'>authors</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='p-4 rounded-full bg-second bg-opacity-25 text-second'>
                        <FaCartPlus className='text-2xl' />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>7,489</h1>
                        <p className='text-lg font-medium'>books sold</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='p-4 rounded-full bg-praimary bg-opacity-25 text-praimary'>
                        <BsEmojiSmileFill className='text-2xl' />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>95%</h1>
                        <p className='text-lg font-medium'>happy customer</p>
                    </div>
                </div>
            </div>
            <div className='mt-7 space-y-10'>
                <div>
                    <video className='w-full h-96 object-fill rounded-2xl' controls autoPlay>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className='text-center'>
                    <h3 className='text-2xl font-medium mb-3'>STILL HAVE A QUESTION?</h3>
                    <h2 className='text-4xl font-bold'>CONTACT US TODAY</h2>
                    <p className='text-xl my-6'>Our friendly team aim to get back to you within 48 hours.</p>
                    <Link to={'/contact'} className='bg-second py-2 px-6 rounded-full text-xl font-bold text-white'>Go to Contact Us</Link>
                </div>
                <div>
                    <div className="relative w-full flex items-center justify-center">
                        <img className="w-full object-cover rounded-md" src={other} alt="" />
                        <div className='absolute text-center'>
                            <h2 className='text-white text-4xl font-bold'>Get <span className='text-[#FA7070]'>10%</span> Off Your Order!</h2>
                            <p className='text-white text-xl mt-4'>Enter your email and receive a 10% discount on your next order!</p>
                            <div className='rounded-full relative flex items-center mt-5'>
                                <input type="text" placeholder="Your Email Address" className="input pl-6 input-info w-full rounded-l-full focus:outline-none" />
                                <button className='bg-[#FA7070] py-3 rounded-r-full px-6 text-white'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;