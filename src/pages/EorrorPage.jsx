import { Link } from "react-router-dom";

const EorrorPage = () => {
    return (
        <div className="container mx-auto w-screen h-screen flex items-center justify-center text-center">
            <div className="space-y-5 bg-praimary p-20 rounded-xl shadow-2xl bg-opacity-20">
                <h1 className="text-6xl font-extrabold text-black">404 - Page Not Found</h1>
                <p className="text-4xl font-bold text-black">Oops! The page youre looking for doesn t exist.</p>
                <p className=" text-3xl font-semibold text-black">Please check the URL and try again.</p>
                <div className="pt-10">
                    <Link to='/' className=" bg-second text-white text-2xl font-medium py-3 px-7 rounded-xl">Back To Home</Link>
                </div>
            </div>
        </div>
    );

};

export default EorrorPage;