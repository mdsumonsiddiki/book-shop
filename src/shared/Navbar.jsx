import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const link = <>
        <NavLink className={`text-black text-lg`}>Home</NavLink>
        <NavLink className={`text-black text-lg`}>Listed Books</NavLink>
        <NavLink to={'/chart'} className={`text-black text-lg`}>Pages to Read</NavLink>
    </>
    return (
        <nav className="container mx-auto pt-4">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <Link to={'./'} className="text-black font-bold text-3xl">Book Vibe</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <button className="btn font-bold text-[#ffff]  bg-praimary hover:bg-praimary">Sign In</button>
                    <button className="btn font-bold text-[#ffff] bg-second hover:bg-second">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;