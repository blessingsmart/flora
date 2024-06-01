import React from 'react';

const Selected = ({ src, title, prices, totalPrices, optionItem, name, contact, message, address, date, time, increase, handleQuantityChange }) => {
    return (
        <>
            <div className='md:flex'>
              <FaTimes size={20} className='mt-3 mx-2 md:mt-[70px]' style={{color: '#808080'}}/>
              <img src={src} className='w-[75px] h-[100px] mx-2 mt-7' alt="" />
            </div>
            <div className='pl-2 text-gray-500 text-xs'>
                <h5 className='font-bold text-[17px]'>{title}</h5>
                <p className='font-bold text-[11px] pt-[3px]'>Edit options</p>
                <h6 className='pt-3'>EXTRAS +<span className='text-black font-bold'>{optionItem}</span></h6>
                <h6 className='pt-[2px]'>NAME OF RECIPIENT: <span className='text-black font-bold'>{name}</span></h6>
                <h6 className='pt-[2px]'>TELEPHONE NUMBER OF RECIPIENT: <span className='text-black font-bold'>{contact}</span></h6>
                <h6 className='pt-[2px]'>MESSAGE TO BE WRITTEN ON THE CARD: <span className='text-black font-bold'>{message}</span></h6>
                <h6 className='pt-[2px]'>DELIVERY ADDRESS: <span className='text-black font-bold'>{address}</span></h6>
                <h6 className='pt-[2px]'>DATE OF DELIVERY: <span className='text-black font-bold'>{date}</span></h6>
                <h6 className='pt-[2px]'>TIME: <span className='text-black font-bold'>{time}</span></h6>
                <h3 className='font-bold md:hidden text-[15px] pt-[10px]'>{increase} x <span className='text-black'>{prices}</span></h3>
            </div>
            <div className='pt-[74px] ml-8 hidden md:flex'>
              <span className='text-black text-sm font-bold pl-2'>{prices}</span>
            </div>
            <div className="flex items-center pl-12 md:pl-3">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-normal px-3 rounded-l w-[2px] h-[43px]" onClick={() => handleQuantityChange(-1)}>-</button>
              <input 
                  className="appearance-none border text-black border-gray-300 w-10 text-center py-[10px] rounded-none" 
                  value={increase}
              />
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-normal px-3 rounded-r w-[2px] h-[43px]" onClick={() => handleQuantityChange(+1)}>+</button>
            </div>
            <div className='pt-[74px] ml-2 hidden md:flex'>
              <span className='text-black text-sm font-bold pl-2'>{totalPrices}</span>
            </div>
        </>
    );
};

export default Selected;
