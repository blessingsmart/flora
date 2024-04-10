import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({onClose, iconClicked, isModalOpen }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };


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
            this part is working
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
