import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link as RouterLink } from "react-router-dom";

const Modal = ({onClose, iconClicked, isModalOpen }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

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
      link: "/Shop",
      title: "BALLONS",
    },
    {
      id: 6,
      link: "/Contact",
      title: "TEDDY BEARS",
    },
    {
      id: 7,
      link: "/Contact",
      title: "CHOCOLATES",
    },
    {
      id: 8,
      link: "CARD",
      title: "CARDS",
    },
    {
      id: 9,
      link: "PLANTS",
      title: "PLANTS",
    },
    {
      id: 9,
      link: "ABOUT",
      title: "ABOUT US",
    },
  ];


  return (
    <div className="absolute inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-white text-3xl">
        {iconClicked === 'search' ? (
          <div className="p-4 relative">
            <input
              type="text"
              label="search"
              className="bg-white/20 rounded-full p-3 w-96 focus:outline-none"
              placeholder="Search ..."
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
        ) : iconClicked === 'nav' ? (
          <div className="p-4">
            <ul className="flex flex-col gap-4">
              {links.map(({ id, link, title, to }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
                >
                    <RouterLink to={link}>{title}</RouterLink>
                </li>
              ))}
            </ul> 
          </div>
        ) : (
          <div className="p-4">
            This is why nothing is showing
          </div>
        )}
        <button onClick={onClose} className="absolute top-0 right-0 m-4">
          <FaTimes size={30} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
