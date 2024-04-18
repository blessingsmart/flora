import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { BsBasket } from 'react-icons/bs';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = ({ openModal }) => {


  return (
    <>
      <div className="flex justify-between drop-shadow-md sm:px-20 px-5 items-center h-24 sm:h-32 text-white bg-black z-30">
        <button onClick={() => openModal("nav")}>
          <IoReorderThreeOutline size={35} />
        </button>
        <Link to="/" className='h-24 flex py-2'>
          <img src={logo} alt="logo "/>
        </Link>
        <div className="flex gap-4">
          <button onClick={() => openModal("search")}>
            <FaSearch size={25} />
          </button>
          <Link to="/cart">
            <BsBasket size={25} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
