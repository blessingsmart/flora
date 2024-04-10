import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { BsBasket } from 'react-icons/bs';
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = ({ openModal }) => {

  const links = [
    {
      id: 1,
      link: "/",
      title: "HOME PAGE",
    },
    {
      id: 2,
      title: "FALL FLOWERS",
    },
    {
      id: 3,
      title: "FRESH FLOWER BOUQUETS",
    },
    {
      id: 4,
      link: "/about",
      title: "FRUIT BASKETS",
    },
    {
      id: 5,
      link: "Shop",
      title: "BALLONS",
    },
    {
      id: 6,
      link: "Contact",
      title: "TEDDY BEARS",
    },
    {
      id: 7,
      link: "Contact",
      title: "CHOCOLATES",
    },
    {
      id: 8,
      link: "Contact",
      title: "CARDS",
    },
    {
      id: 9,
      link: "Contact",
      title: "PLANTS",
    },
    {
      id: 9,
      link: "Contact",
      title: "ABOUT US",
    },
  ];


  return (
    <>
      <div className="flex justify-between drop-shadow-md sm:px-20 px-5 items-center w-screen h-32 text-white bg-black fixed z-30">
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
