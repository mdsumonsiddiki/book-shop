import { Link} from 'react-router-dom';
// import { FaRegStar } from "react-icons/fa6";
import PropTypes from 'prop-types';

const BooksCard = ({book}) => {
    const {id, book_name, author, image, rating, category, tags} = book || {};
    return (
        <Link to={`/books/${id}`} className='border-2 border-[#13131326] p-6 rounded-xl'>
            <div className='bg-black bg-opacity-5 rounded-xl flex items-center justify-center py-16'>
                <img className='w-[168px] h-[200px] object-cover' src={image} alt="" />
            </div>
            <div className='space-y-5 mt-5'>
                <ul className='flex items-center flex-wrap lg:flex-nowrap gap-2'>
                    {
                    tags.map((tag,idx) => <li key={idx} className='text-praimary rounded-2xl bg-praimary bg-opacity-5 font-medium py-2 px-3'>{tag}</li>)
                    }
                </ul>
                <h2 className='text-2xl lg:text-3xl text-black font-extrabold'>{book_name}</h2>
                <p className='text-black font-medium'>By : {author}</p>
                <div className='flex items-center justify-between border-t-2 border-dashed border-black border-opacity-15 pt-5'>
                    <h3 className='text-black font-medium'>{category}</h3>
                    <p className='text-black font-medium text-lg flex items-center gap-5'><span>{rating}</span></p>
                </div>
            </div>
        </Link>
    );
};
BooksCard.propTypes = {
    book: PropTypes.object,
}
export default BooksCard;
