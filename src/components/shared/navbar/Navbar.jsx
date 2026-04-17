import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { RiHome2Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <h2 className="text-2xl font-semibold"><span className='font-bold'>Keen</span>Keeper</h2>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to={"/"}>
       <RiHome2Line />Home</NavLink></li>
      <li><NavLink to={"/timeline"}>
       <IoTimeOutline />Timeline</NavLink></li>
      <li><NavLink to={"/stats"}>
       <TfiStatsUp />Stats</NavLink></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;