import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";



const Navbar = () => {

    const link = <>
        <NavLink to='/' className={({ isActive }) => isActive ? "text-praimary text-lg btn border-praimary bg-transparent hover:bg-transparent hover:border-second" : " text-black text-lg btn"}>Home</NavLink>
        <NavLink to={'/booklist'} className={({ isActive }) => isActive ? "text-praimary text-lg btn border-praimary bg-transparent hover:bg-transparent hover:border-second" : " text-black text-lg btn"}>Listed Books</NavLink>
        <NavLink to={'/chart'} className={({ isActive }) => isActive ? "text-lg btn border-praimary bg-transparent hover:bg-transparent hover:border-second text-praimary" : " text-black text-lg btn"}>Pages to Read</NavLink>
        <NavLink to={'/about'} className={({ isActive }) => isActive ? "text-lg btn border-praimary bg-transparent hover:bg-transparent hover:border-second text-praimary" : " text-black text-lg btn"}>About Us</NavLink>
        <NavLink to={'/contact'} className={({ isActive }) => isActive ? "text-lg btn border-praimary bg-transparent hover:bg-transparent hover:border-second text-praimary" : " text-black text-lg btn"}>Contacts</NavLink>
    </>
    return (
        <nav className="container mx-auto pt-4">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden p-2 text-xl">
                            <FiMenu />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <Link to={'./'} className="text-black font-bold text-2xl lg:text-3xl ">BookShop</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end space-x-2 md:space-x-3 lg:space-x-4">
                    <button className="btn font-medium lg:font-bold text-[#ffff]  bg-praimary hover:bg-praimary">Sign In</button>
                    <button className="btn font-medium lg:font-bold text-[#ffff] bg-second hover:bg-second">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;