import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link as RouterLink } from "react-router-dom";
import Preview from './preview';

const Modal = ({onClose, iconClicked, src, title, price}) => {
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
      title: "WINES",
    },
    {
      id: 7,
      link: "/Contact",
      title: "TEDDY BEARS",
    },
    {
      id: 8,
      link: "/Contact",
      title: "CHOCOLATES",
    },
    {
      id: 9,
      link: "CARD",
      title: "CARDS",
    },
    {
      id: 10,
      link: "PLANTS",
      title: "PLANTS",
    },
    {
      id: 11,
      link: "/about",
      title: "ABOUT US",
    },
  ];


  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center ">
      <div className="text-white text-sm">
        {iconClicked === 'search' ? (
          <div className="p-4 relative">
            <input
              type="text"
              label="search"
              className="bg-white/20 rounded-full p-3 sm:w-96 focus:outline-none"
              placeholder="Search ..."
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
        ) : iconClicked === 'nav' ? (
          <div className="py-16 px-4 absolute left-0 top-0 bg-black/80 max-h-screen h-screen overflow-y-auto ">
            <div className="p-4 relative">
              <input
                type="text"
                label="search"
                className="bg-white/20 rounded-full py-2 px-3 w-52 focus:outline-none text-sm"
                placeholder="Search ..."
                value={searchValue}
                onChange={handleSearchChange}
              />
            </div>
            <ul className="flex flex-col gap-4">
              {links.map(({ id, link, title }) => (
                <li
                  key={id}
                  className="px-4 py-2 cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-white/70 hover:text-white"
                >
                    <RouterLink to={link}>{title}</RouterLink>
                </li>
              ))}
            </ul> 
          </div>
        ) : iconClicked === 'preview' ? (
          <div className="py-16 px-4 absolute left-0 top-0 bg-black/80 max-h-screen h-screen overflow-y-auto ">
            <Preview src={src} title={title} price={price}/>
          </div>
        ) : (
          <div className="p-4">
            This is why nothing is showing
          </div>
        )}
        <button onClick={onClose} className="absolute top-0 right-0 m-4 text-white/70 hover:text-white">
          <FaTimes size={30} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
