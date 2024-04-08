import React, { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Modal = ({ open, onClose }) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  
  if (!open) return null;
    return (
        <div className='absolute inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='text-white text-3xl'>
                <div className='p-4 relative'>
                    <input type="text"
                           label="search"
                           className='bg-white/20  rounded-full p-3 w-96 focus:outline-none'
                           placeholder="Search ..."
                           value={searchValue}
                           onChange={handleSearchChange}/>
                    <FaSearch size={25}
                    className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => {
                      // for search API
                    }}  />
                </div>
                <button onClick={onClose} className='absolute top-0 right-0 m-4'>
                    <FaTimes size={30}
                    />
                </button>
            </div>
        </div>
    );
};

export default Modal;
