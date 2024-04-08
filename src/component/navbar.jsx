import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
// import logo from "../assets/logo.png";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
// import Modal from "../component/modal";

export const Navbar = ( { toggleModal }) => {
  const [nav, setNav] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (to) => {
    setNav(false); // Close the mobile menu when clicking a link
    scroll.scrollTo(to);
  };

  const links = [
    {
      id: 1,
      link: "/",
      title: "HOME",
    },
    //   {
    //       id: 2,
    //       link: "Testimonials",
    //   },
    //   {
    //       id: 3,
    //       link: "Trainings",
    //   },
    {
      id: 4,
      link: "/about",
      title: "ABOUT US",
    },
    {
      id: 5,
      to: "Shop",
      title: "SHOP",
    },
    {
      id: 7,
      to: "Contact",
      title: "CONTACT",
    },
  ];
  const links1 = [
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
    <div className="flex justify-between drop-shadow-md sm:px-20 px-5 items-center w-screen h-32 text-white bg-black fixed z-30">
      <IoReorderThreeOutline size={35} />
      <h1>LOGO</h1>
      <div className="flex gap-4">
        <button onClick={() => toggleModal()}>
          <FaSearch size={25} />
        </button>
        <BsBasket size={25} />
      </div>
      {/* <Modal open={isOpen} onClose={() => setIsOpen(false)} /> */}
      {/* <RouterLink to="/" className="flex items-center">
        <h1 className="text-4xl font-signature md:text-5xl "></h1>
      </RouterLink> */}
      {/* <ul className="hidden md:flex md:flex-col md:gap-4">
        {links.map(({ id, link, title, to }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
          >
            {to ? (
              <ScrollLink
                to={to}
                smooth="true"
                duration={500}
                className="cursor-pointer"
              >
                {title}
              </ScrollLink>
            ) : (
              <RouterLink to={link}>{title}</RouterLink>
            )}
          </li>
        ))}
      </ul> */}

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center py-20 fixed top-0 left-0 bg-gray-100 w-screen ease-in-out duration-500">
          {links1.map(({ id, link, title}) => (
            <li
              key={id}
              className="px-4 cursor-pointer text-gray-700 capitalize py-3 text-xl"
            >
              <RouterLink to={link}>{title}</RouterLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
