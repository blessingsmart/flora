import React, { useState } from 'react'
import redrose from '../assets/redrose.jpg';



const Occassion = () => {

    
    const links = [
        {
          id: 1,
          src: redrose ,
          title: "Food tray",
          price: "",
        },
        {
          id: 2,
          src:redrose,
          title: "Mixed fruits",
          price: "",
        },
        {
          id: 3,
          src: redrose,
          title: "Mixed nuts",
          price: "",
        },
        {
          id: 4,
          src: redrose,
          title: "Chop Money Jollof",
          price: "",
        },
        {
          id: 5,
          src: redrose,
          title: "Soup and stew combo",
          price: "",
        },
        {
          id: 6,
          src: redrose,
          title: "Yam and goat pepper soup",
          price: "",
        },
        {
          id: 7,
          src: redrose,
          title: "Diet meal plan",
          price: "",
        },
        {
          id: 8,
          src: redrose,
          title: "Wechora Greek yogurt",
          price: "",
        },
        {
          id: 9,
          src: redrose,
          title: "Drinking yogurt",
          price: "",
        },
        {
          id: 10,
          src: redrose,
          title: "Smoothies",
          price: "",
        },
        {
          id: 11,
          src: redrose,
          title: "Surprise birthday gift box",
          price: "",
        },
        {
          id: 12,
          src: redrose,
          title: "Special gift box",
          price: "",
        },
      ];



  return (
    <>
    <div name="menu" className='flex flex-col items-center gap-12 p-16'>
        <h1 className='font-signature text-5xl text-center'>Shop For Occassion</h1>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:px-0'>
            {
            links.map(({ id, src, title, price}) => (
                <div key={id} className=' relative flex flex-col items-center rounded-3xl bg-gradient-to-t from-orange-100 via-white to-white my-3 px-3'>
                    <div>
                        <img src={src} alt='products' className=' absolute border-8 border-white top-4 right-7 -translate-x-1 rounded-full h-56 w-56' />
                    </div>
                    <p className='w-full text-center py-3 font-bold text-orange-600 text-2xl '>{title}</p >
                    <p className='w-full text-center pb-5 py-3 '>{price}</p >
                    <button className='bg-orange-600 text-white px-4 py-2 rounded-full duration-200 hover:scale-105 w-fit flex justify-center items-center gap-2'>Order Now</button>
                </div>
                ))}
        </div>    
    </div>
    </>
  )
}

export default Occassion