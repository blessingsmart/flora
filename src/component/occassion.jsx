import React, { useState } from 'react'
import { Link } from "react-router-dom";
import  shop from "..//assets/shop.jpg";
import occassions from "./data"



const Occassion = ({openModal, dynamic}) => {
    const [selectedItems, setSelectedItems] = useState([]);

    

      const handleItemPicking = (item) => {
        if (selectedItems.includes(item)) {
          setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
        } else {
          setSelectedItems([...selectedItems, item]);
        }
      };

      const handleItemClick = (id, src, title, price) => {
        openModal("preview"); // Pass src, title, and price only
        dynamic({ src, title, price }); // Pass src, title, and price only
      };

  return (
    <>
    <div name="menu" className='flex flex-col items-center gap-12 sm:p-16 p-5'>
        <h1 className='font-signature text-5xl text-center'>Shop For Occassion</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          { occassions.map(({ id, src, title, price}, item, index) => {
            const formattedPrice = new Intl.NumberFormat('en-NG', {
              style: 'currency',
              currency: 'NGN'
            }).format(parseInt(price.replace(/[^\d.-]/g, ""), 10));

        return(
            <div key={id} className='flex flex-col drop-shadow-xl '>
                <div key={index} onClick={() => handleItemPicking(item)} className='relative'>
                    <img src={src} alt='products' className='  ' />
                    <button className='absolute bottom-0 bg-black/90 text-white p-1 text-sm font-bold  w-full' onClick={() => handleItemClick(id, src, title, price)}>Quick View</button>
                </div>
                <div className='flex flex-col sm:flex-row sm:gap-3 justify-between font-semibold text-sm py-3 bg-gradient-to-t from-black/5 via-white to-white'>
                    <p className='p-2'>{title}</p >
                    <p className='p-2'>{formattedPrice}</p >
                </div>
            </div>
            )}
          )}
        </div>  
        <Link to="/fresh-flower-bouquets" className='bg-black text-xl text-center w-full p-3 text-white font-bold'>SEE MORE</Link> 
    </div>
    <div className="my-20 w-full relative">
        <img src={shop} alt=""
                className=' top-o left-0  w-full h-[250px] object-cover' />
        <div className='absolute md:w-1/2 top-10 md:right-0'>
          <div className='text-black flex flex-col items-center gap-5'>
            <h1 className='text-lg md:text-3xl px-10 items-center font-bold text-center' >For Your Occasions</h1>
            <p className='text-lg text-center'>Buy fresh flowers in Lagos, Nigeria for your special occasion</p>
            <a href=""
                className='place-self-center'>
                <a href="https://wa.me/2348060521476">
                <button className='w-fit flex items-center text-sm md:text-lg  bg-black px-5 py-3 rounded-lg text-white font-bold'>
                SHOP NOW
                </button>
                </a>
            </a>
          </div>
        </div>
    </div> 
    </>
  )
}

export default Occassion