import React, { useState } from 'react'
import { Link } from "react-router-dom";
import  shop from "..//assets/shop.jpg";
import flower1 from '../assets/flower1.jpg';
import flower2 from '../assets/flower2.jpg';
import flower3 from '../assets/flower3.jpg';
import flower4 from '../assets/flower4.jpg';
import flower5 from '../assets/flower5.jpg';
import flower6 from '../assets/flower6.jpg';
import flower7 from '../assets/flower7.jpg';
import flower8 from '../assets/flower8.jpg';
import flower9 from '../assets/flower9.jpg';
import flower10 from '../assets/flower10.jpg';
import flower11 from '../assets/flower11.jpg';
import flower12 from '../assets/flower12.jpg';



const Occassion = ({openModal, dynamic}) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const links = [
        {
          id: 1,
          src: flower1 ,
          title: "Forever my love 001",
          price: 150000,
        },
        {
          id: 2,
          src: flower2,
          title: "My love you 002",
          price: 100000,
        },
        {
          id: 3,
          src: flower3,
          title: "Ivory aqua pack 003",
          price: 120000,
        },
        {
          id: 4,
          src: flower4,
          title: "Table top arrangement 004",
          price: 90000,
        },
        {
          id: 5,
          src: flower5,
          title: "Box arrangement 005",
          price: 200000,
        },
        {
          id: 6,
          src: flower6,
          title: "Box arrangement 006",
          price: 250000,
        },
        {
          id: 7,
          src: flower7,
          title: "Aqua Pack 007",
          price: 60000,
        },
        {
          id: 8,
          src: flower8,
          title: "Centerpiece 008",
          price: 70000,
        },
        {
          id: 9,
          src: flower9,
          title: "Aqua Pack 009",
          price: 70000,
        },
        {
          id: 10,
          src: flower10,
          title: "Aqua Pack 010",
          price: 100000,
        },
        {
          id: 11,
          src: flower11,
          title: "Aqua Pack 011",
          price: 120000,
        },
        {
          id: 12,
          src: flower12,
          title: "Throw in bouquet 012",
          price: 150000,
        },
      ];

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
            {
            links.map(({ id, src, title, price}, item, index) => (
                <div key={id} className='flex flex-col drop-shadow-xl '>
                    <div key={index} onClick={() => handleItemPicking(item)} className='relative'>
                        <img src={src} alt='products' className='  ' />
                        <button className='absolute bottom-0 bg-black/90 text-white p-1 text-sm font-bold  w-full' onClick={() => handleItemClick(id, src, title, price)}>Quick View</button>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-3 justify-between font-semibold text-sm py-3 bg-gradient-to-t from-black/5 via-white to-white'>
                        <p className='p-2'>{title}</p >
                        <p className='p-2'>{price}</p >
                    </div>
                </div>
                ))}
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
                <button to="/about" className='w-fit flex items-center text-sm md:text-lg  bg-black px-5 py-3 rounded-lg text-white font-bold'>
                SHOP NOW
                </button>
            </a>
          </div>
        </div>
    </div> 
    </>
  )
}

export default Occassion