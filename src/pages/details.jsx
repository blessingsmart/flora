import React, { useState } from 'react'
import Navbar from '..//component/navbar'
import { FaGreaterThan } from "react-icons/fa";

function Details() {
    const [coupon, setCoupon] = useState(false)

    const handleCoupon = () => {
        setCoupon(!coupon)
    }
  return (
    <>
        <Navbar/>
        <div className='pt-[140px] text-center mx-5'>
            <div className='flex flex justify-center items-center'>
                <a href="/cart"className='flex justify-center hidden md:flex pt-2 font-normal text-3xl pr-4'><span className='pr-2'>SHOPPING CART</span> <FaGreaterThan size={20} color="gray" className='h-10'/></a>
                <a href="/details"className='flex justify-center pt-2 font-normal text-3xl'><span className='pr-2'>CHECKOUT DETAILS</span> <FaGreaterThan size={20} color="gray" className='h-10'/></a>
            </div>
            <div>
                <h4><span className='text-gray-500'>Have a coupon?</span> <span className='hover:cursor-pointer' onClick={handleCoupon}>Click here to enter your code</span></h4>
            </div>
            <div>
                <div className={coupon ? 'border-dashed border-2 border-gray-900 mb-5 mt-2 ease-in duration-1000': 'fixed top-[-20%] ease-out duration-100'}>
                <p className='text-start pl-8 mt-3'>if you have a coupon code, please apply it below.</p>
                <div className='border mx-8 mt-4'>
                    <input 
                        type="text"
                        placeholder='Coupon code'
                        className='text-gray-500 pl-3 py-2 w-full focus:border-gray-300'
                    />
                </div>
                <div className='bg-black mx-8 border mt-4 mb-8'>
                    <button className='py-2 text-white text-md font-bold'>APPLY COUPON</button>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Details;