import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { RiHome2Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';
import logo from '../../../assets/logo.png';

const Navbar = () => {

    const navLinks = (
        <>
            <li>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        isActive ? "bg-[#1d4233] text-white font-semibold" : "text-gray-600"
                    }
                >
                    <RiHome2Line className="text-lg" /> Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/timeline" 
                    className={({ isActive }) => 
                        isActive ? "bg-[#1d4233] text-white font-semibold" : "text-gray-600"
                    }
                >
                    <IoTimeOutline className="text-lg" /> Timeline
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/stats" 
                    className={({ isActive }) => 
                        isActive ? "bg-green-900 text-white font-semibold" : "text-gray-600 "
                    }
                >
                    <TfiStatsUp className="text-lg" /> Stats
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-white border-b border-gray-100 px-4 md:px-12 py-3"> 

            <div className="navbar-start">
                <img src={logo} alt="logo"/>
            </div>

            <div className="navbar-end">
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 ">
                        {navLinks}
                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-gray-100">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;