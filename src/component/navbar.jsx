import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { BsBasket } from 'react-icons/bs';
import { Link as RouterLink } from "react-router-dom";

const Navbar = ({ openModal }) => {


  return (
    <>
      <div className="flex justify-between drop-shadow-md sm:px-20 px-5 items-center w-screen h-32 text-white bg-black z-30">
        <button onClick={() => openModal("nav")}>
          <IoReorderThreeOutline size={35} />
        </button>
        <h1>LOGO</h1>
        <div className="flex gap-4">
          <button onClick={() => openModal("search")}>
            <FaSearch size={25} />
          </button>
          <RouterLink to="/cart">
            <BsBasket size={25} />
          </RouterLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
