
import { CiLocationOn } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { SlHandbag } from "react-icons/sl";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";


const NavBar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setDarkMode(savedTheme === "dark");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        const newTheme = newDarkMode ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        if (newDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    const navLink = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/shop"}>Shop</NavLink></li>
        <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
        <li><NavLink to={"/about"}>About Us</NavLink></li>
        <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>

    </>


    return (
        <div>
            {/* Top Header  bg-[#333333]*/}

            <div className='text-[#666666] dark:text-gray-400 text-xs p-4 bg-white dark:bg-gray-900 transition-colors'>
                <div className='flex flex-col items-center justify-between mx-auto all-container md:flex-row'>
                    <div className='flex items-center gap-2'>
                        <CiLocationOn />
                        <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <select className='p-1 bg-transparent border-none outline-none' name="" id="">
                            <option value="">Eng</option>
                            <option value="">Ban</option>
                        </select>
                        <select className='p-1 bg-transparent border-none outline-none' name="" id="">
                            <option value="">USD</option>
                            <option value="">Tk</option>

                        </select>
                        <span>
                            |
                        </span>
                        <Link to='/login'>
                            Sign In
                        </Link>
                        <span>/</span>
                        <Link to='/register'>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>


            {/* Middle nav bar */}
            <div className='py-2 transition-colors bg-white border-gray-200 border-y dark:bg-gray-800 dark:border-gray-700'>
                <div className="mx-auto navbar all-container">
                    <div className="navbar-start">
                        <h2 className="flex items-center gap-2 text-3xl font-semibold text-gray-900 dark:text-white"><img src="/fav.png" alt="" /> Coffee Brand</h2>
                    </div>
                    <div className="hidden navbar-center lg:flex">
                        <label className="flex items-center gap-2 text-gray-900 border-gray-300 input input-bordered bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <input type="text" className="text-gray-900 placeholder-gray-500 bg-transparent grow dark:text-white dark:placeholder-gray-400" placeholder="Search coffee" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                    <div className="navbar-end">
                        <button
                            onClick={toggleTheme}
                            className="p-2 mr-4 text-yellow-600 transition-colors bg-gray-200 rounded-full dark:bg-gray-700 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
                        </button>
                        <div className='flex items-center gap-3 text-2xl text-gray-700 dark:text-gray-300'>
                            <Link to="/wishList">
                                <IoMdHeartEmpty className='transition-colors cursor-pointer hover:text-amber-600 dark:hover:text-amber-400' />
                            </Link>
                            <span>|</span>
                            <div className='flex items-center gap-4'>
                                <div className='relative cursor-pointer'>

                                    <Link to="/shopping-cart">
                                        <SlHandbag />
                                    </Link>
                                  <div className='absolute z-10 flex items-center justify-center text-sm text-white rounded-full -top-2 -right-2 bg-amber-700 size-5'>
                                    5
                                    </div>
                                </div>
                                <div className='text-xs text-gray-700 dark:text-gray-300'>
                                    <p>Shopping cart</p>
                                    <h3 className='text-base font-semibold'>$ 574.20</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* End Nav bar */}

            <div className='bg-[#333333] dark:bg-gray-900 text-[#999999] dark:text-gray-400 transition-colors'>
                <div className="mx-auto navbar all-container">
                    <div className="navbar-start lg:hidden">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="text-gray-700 btn btn-ghost lg:hidden dark:text-gray-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:shadow-lg">
                                {navLink}
                            </ul>
                        </div>
                    </div>
                    <div className="hidden navbar-start lg:flex">
                        <ul className="px-1 menu menu-horizontal text-gray-700 dark:text-gray-300 hover:[&_a]:dark:text-amber-400">
                            {navLink}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='flex items-center gap-2 text-white dark:text-gray-300'>
                            <LuPhoneCall className='text-2xl' />
                            <p>(+880) 17XXX</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NavBar;