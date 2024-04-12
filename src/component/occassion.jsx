import React, { useState } from 'react'
import redrose from '../assets/redrose.jpg';
import  food1 from "..//assets/food1.jpg";



const Occassion = () => {

    
    const links = [
        {
          id: 1,
          src: redrose ,
          title: "Apology Flowers 002",
          price: "#50,000",
        },
        {
          id: 2,
          src:redrose,
          title: "Apology Flowers 002",
          price: "#50,000",
        },
        {
          id: 3,
          src: redrose,
          title: "Apology Flowers 002",
          price: "#50,000",
        },
        {
          id: 4,
          src: redrose,
          title: "Apology Flowers 002",
          price: "#50,000",
        },
        {
          id: 5,
          src: redrose,
          title: "Apology Flowers 002",
          price: "#50,000",
        },
        {
          id: 6,
          src: redrose,
          title: "Apology Flowers 002",
          price: "#50,000",
        },
        {
          id: 7,
          src: redrose,
          title: "Apology Flowers 002",
          price: "#50,000",
        },
        {
          id: 8,
          src: redrose,
          title: "Apology Flowers 002",
          price: "#50,000",
        },
        {
          id: 9,
          src: redrose,
          title: "Apology Flowers 002",
          price: "#50,000",
        },
        {
          id: 10,
          src: redrose,
          title: "Apology Flowers 002",
          price: "#50,000",
        },
        {
          id: 11,
          src: redrose,
          title: "Apology Flowers 002",
          price: "#50,000",
        },
        {
          id: 12,
          src: redrose,
          title: "Apology Flowers 002",
          price: "#50,000",
        },
      ];



  return (
    <>
    <div name="menu" className='flex flex-col items-center gap-12 p-16'>
        <h1 className='font-signature text-5xl text-center'>Shop For Occassion</h1>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:px-0'>
            {
            links.map(({ id, src, title, price}) => (
                <div key={id} className='flex flex-col drop-shadow-xl '>
                    <div className='relative'>
                        <img src={src} alt='products' className='  ' />
                        <button className='absolute bottom-0 bg-black/90 text-white p-1 text-sm font-bold  w-full'>Quick View</button>
                    </div>
                    <div className='flex gap-3 justify-between font-semibold text-sm py-3 bg-gradient-to-t from-black/5 via-white to-white'>
                        <p className='p-2'>{title}</p >
                        <p className='p-2'>{price}</p >
                    </div>
                </div>
                ))}
        </div>  
        <button className='bg-black text-xl w-full p-3 text-white font-bold'>SEE MORE</button> 
    </div>
    <div className="my-20 w-full">
        <img src={food1} alt=""
                className=' top-o left-0  w-full object-cover' />
        <div className=''>
          <div>
            <p className='text-lg md:text-3xl px-10 items-center text-white font-bold text-center' >For Your Occasions</p>
            <p className='text-lg text-white'>Buy fresh flowers in Lagos, Nigeria for your special occasion</p>
            <a href=""
                className='place-self-center'>
                <button className='w-fit flex items-center text-sm md:text-lg  bg-black px-5 py-3 rounded-lg text-white font-bold'>
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