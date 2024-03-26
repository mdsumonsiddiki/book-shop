import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Card = ({ book }) => {
    const { book_name, author, image, rating, total_pages, category, publisher, year_of_publishing, tags, id } = book;

    return (
        <div className='flex items-center gap-12 p-6 border-2 border-black border-opacity-15 rounded-xl'>
            <div className='bg-black bg-opacity-5 flex items-center justify-center py-16 rounded-lg w-3/12'>
                <img className='w-2/4 h-2/6' src={image} alt="" />
            </div>
            <div className='space-y-8 mt-3'>
                <h2 className='text-2xl font-bold text-black'>{book_name}</h2>
                <p className='text-lg font-medium'>By : {author}</p>
                <div className='flex items-center gap-6'>
                    <ul className='flex items-center gap-4'>
                    <li className='text-black text-2xl font-bold'>Tag</li>
                        {
                            tags.map((tag, idx) => <li key={idx} className='text-praimary rounded-2xl bg-praimary bg-opacity-5 font-medium py-2 px-3'>{tag}</li>)
                        }
                    </ul>
                    <p className='text-lg font-medium flex items-center gap-5'>
                        <span>Year of Publishing: {year_of_publishing}</span></p>
                </div>
                <div className='flex items-center gap-6'>
                    <p className='text-lg font-medium flex items-center gap-5'><span>Publisher: {publisher}</span></p>
                    <p className='text-lg font-medium flex items-center gap-5'><span>Page {total_pages}</span></p>
                </div>
                <ul className='flex items-center gap-7 pt-5 border-t-2 border-black border-opacity-15'>
                    <li className='text-[#328EFF] font-medium bg-[#328EFF] bg-opacity-10 py-3 px-4 rounded-full'>Category: {category}</li>
                    <li className='text-[#FFAC33] font-medium bg-[#FFAC33] bg-opacity-10 py-3 px-4 rounded-full'>Rating: {rating}</li>
                    <li><Link to={`/books/${id}`} className='text-[#23BE0A] font-medium bg-[#23BE0A] bg-opacity-10 py-3 px-4 rounded-full'> View Details</Link></li>
                </ul>
            </div>
        </div>
    );
};
Card.propTypes = {
    book: PropTypes.o,
}
export default Card;