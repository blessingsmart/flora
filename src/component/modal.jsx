import React from 'react'
import { FaTimes } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Modal = ({open,onClose}) => {
  if (!open) return null 
  return (
    <div>
      <div>
        <input type="text"
        label="search"
        className='bg-white/20 text-white rounded-3xl p-3 max-w-96' 
        placeholder="Search ..."/>
        <FaSearch size={25} />
      </div>
      <button onClick={onClose}>
        <FaTimes size={30} /> 
      </button>
    </div>
  )
}

export default Modal