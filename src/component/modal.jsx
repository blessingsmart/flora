import React from 'react'
import { FaTimes } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Modal = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div className='absolute inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='text-white text-3xl'>
                <div className='p-4'>
                    <input type="text"
                           label="search"
                           className='bg-white/20  rounded-full p-3 w-96 focus:outline-none'
                           placeholder="Search ..."/>
                    <FaSearch size={25} />
                </div>
                <button onClick={onClose} className='absolute top-0 right-0 m-4'>
                    <FaTimes size={30} />
                </button>
            </div>
        </div>
    );
};

export default Modal;
