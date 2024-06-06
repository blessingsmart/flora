import React, { useState } from 'react'
import { Link } from "react-router-dom";
import flower13 from '../assets/flower13.jpg';
import flower14 from '../assets/flower14.jpg';
import flower15 from '../assets/flower15.jpg';
import flower16 from '../assets/flower16.jpg';
import flower17 from '../assets/flower17.jpg';
import flower18 from '../assets/flower18.jpg';
import flower19 from '../assets/flower19.jpg';
import flower20 from '../assets/flower20.jpg';
import flower21 from '../assets/flower21.jpg';
import flower22 from '../assets/flower22.jpg';
import flower23 from '../assets/flower23.jpg';
import flower24 from '../assets/flower24.jpg';
import shop from '../assets/contact.jpg';



const Gift = ({openModal, dynamic}) => {

    
    const links = [
        {
          id: 1,
          src: flower13 ,
          title: "013",
          price: '150000',
        },
        {
          id: 2,
          src:flower14,
          title: "014",
          price: '220000',
        },
        {
          id: 3,
          src: flower15,
          title: "015",
          price: '150000',
        },
        {
          id: 4,
          src: flower16,
          title: "016",
          price: '50000',
        },
        {
          id: 5,
          src: flower17,
          title: "017",
          price: '500000',
        },
        {
          id: 6,
          src: flower18,
          title: "018",
          price: '35000',
        },
        {
          id: 7,
          src: flower19,
          title: "019",
          price: '125000',
        },
        {
          id: 8,
          src: flower20,
          title: "020",
          price: '100000',
        },
        {
          id: 9,
          src: flower21,
          title: "021",
          price: '90000',
        },
        {
          id: 10,
          src: flower22,
          title: "022",
          price: '250000',
        },
        {
          id: 11,
          src: flower23,
          title: "023",
          price: '35000',
        },
        {
          id: 12,
          src: flower24,
          title: "024",
          price: '150000',
        },
      ];


      const handleItemClick = (id, src, title, price) => {
        openModal("preview"); // Pass src, title, and price only
        dynamic({ src, title, price }); // Pass src, title, and price only
      };

  return (
    <>
    <div name="menu" className='flex flex-col items-center gap-12 sm:p-16 p-5'>
        <h1 className='font-signature text-5xl text-center'>Shop For Gifts</h1>
        <pre className='text-sm'>
                          -Happy birthday
                          -Apology
                          -Just because
        </pre>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 '>
            { links.map(({ id, src, title, price}) => {
              const formattedPrice = new Intl.NumberFormat('en-NG', {
                style: 'currency',
                currency: 'NGN'
              }).format(parseInt(price.replace(/[^\d.-]/g, ""), 10));

            return(
                <div key={id} className='flex flex-col drop-shadow-xl cursor-pointer ' onClick={() => handleItemClick(id, src, title, price)}>
                    <div className='relative'>
                        <img src={src} alt='products' className='  ' />
                        {/* <button className='absolute bottom-0 bg-black/90 text-white p-1 text-sm font-bold  w-full' >Quick View</button> */}
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
    <div className=" my-20 relative">
        <img src={shop} alt=""
                className='top-o left-0  w-full h-[250px] object-cover' />
        <div className='absolute md:w-1/2 top-10 md:right-0'>
          <div  className='text-black flex flex-col items-center gap-5'>
            <h1 className='text-lg md:text-3xl px-10 items-center font-bold text-center' >Perfect Flower Plants</h1>
            <p className='text-lg text-center'>Buy indoor and outdoor plants in Lagos, Nigeria for your home or office space</p>
            <a href=""
                className='place-self-center'>
                <Link to='/fresh-flower-bouquets' className='w-fit flex items-center text-sm md:text-lg  bg-black px-5 py-3 rounded-lg text-white font-bold'>
                SHOP NOW
                </Link>
            </a>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Gift