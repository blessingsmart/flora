import React, { useState } from 'react'
import { FaTimes, FaArrowLeft, FaWhatsapp, FaTag, FaGreaterThan } from "react-icons/fa";
import Navbar from '..//component/navbar'
import Modal from '../component/modal';
import purple from '../assets/purple.jpg'
import Footer from '../component/footer';

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const [iconClicked, setIconClicked] = useState(null);
  const openModal = (clickedIcon) => {
    setShowModal(true);
    setIconClicked(clickedIcon);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Navbar openModal={openModal} />
      {showModal && (
        <Modal onClose={closeModal} iconClicked={iconClicked}>
        </Modal>
      )}
      <div className='pt-[140px] text-center mx-5'>
        <div className='flex flex justify-center items-center'>
          <a href="/cart"className='flex justify-center pt-2 font-normal text-3xl pr-4'><span className='pr-2'>SHOPPING CART</span> <FaGreaterThan size={20} color="gray" className='h-10'/></a>
          <a href="/details"className='flex justify-center pt-2 hidden md:flex font-normal text-3xl'><span className='pr-2'>CHECKOUT DETAILS</span> <FaGreaterThan size={20} color="gray" className='h-10'/></a>
        </div>
        <div className='md:flex md:justify-between md:px-[50px]'>
        <div>
          <div className='md:w-[610px]'>
            <div className='text-xs font-semibold flex justify-between mt-7 px-2'>
              <h6>PRODUCT</h6>
              <div className='flex'>
              <h6 className='hidden md:flex px-4'>PRICE</h6>
              <h5 className=' px-4'>QUANTITY</h5>
              <h6 className='hidden md:flex pl-2'>SUBTOTAL</h6>
              </div>
            </div>
            <hr className='h-px my-2 bg-gray-200 border dark:bg-gray-700 w-[97%] mx-auto'/>
          </div>
          <div className='flex text-start'>
            <div className='md:flex'>
              <FaTimes size={20} className='mt-3 mx-2 md:mt-[70px]' style={{color: '#808080'}}/>
              <img src={purple} className='w-[75px] h-[90px] mx-2 mt-10' alt="" />
            </div>
            <div className='pl-2 text-gray-500 text-xs'>
                <h5 className='font-bold'>Flower 001</h5>
                <p className='font-bold text-[10px]'>Edit options</p>
                <h6 className='pt-2'>EXTRAS +N60,000</h6>
                <h6>NAME OF RECIPIENT:</h6>
                <h6>TELEPHONE NUMBER OF RECIPIENT:</h6>
                <h6>MESSAGE TO BE WRITTEN ON THE CARD:</h6>
                <h6>DELIVERY ADDRESS:</h6>
                <h6>DATE OF DELIVERY:</h6>
                <h6>TIME:</h6>
                <span className='font-bold md:hidden'>1 x N150,000</span>
            </div>
            <div className='pt-[74px] ml-8 hidden md:flex'>
              <span className='text-sm font-bold pl-2'>N150,000</span>
            </div>
            <div className="flex items-center pl-10 md:pl-3">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-normal px-3 rounded-l w-[2px] h-[43px]">-</button>
              <input className="appearance-none border border-gray-300 w-10 text-center py-2 rounded-none" type="" value=""/>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-normal px-3 rounded-r w-[2px] h-[43px]">+</button>
            </div>
            <div className='pt-[74px] ml-2 hidden md:flex'>
              <span className='text-sm font-bold pl-2'>N150,000</span>
            </div>
          </div>
          <hr className='h-px mt-5 bg-gray-200 border dark:bg-gray-700 w-[97%] mx-auto'/>
          <div className='flex mt-5'>
            <button className='flex font-semibold border border-gray-600 p-2 mx-2 hover:bg-black hover:text-white'><FaArrowLeft size={20} style={{ color: 'gray' }} className='mt-[3px]'/> <span className='ml-3'>CONTINUE SHOPPING</span></button>
            <button className='bg-gray-500 font-semibold text-white border border-gray-600 px-5 mx-2'>UPDATE CART</button>
          </div>
        </div>
        <div className='hidden md:flex border h-[475px] mt-7'></div>
        <div className='text-gray-400'>
          <div className='text-xs font-semibold flex justify-between mt-7 px-2'>
            <h6 className='text-sm text-gray-500'>CART TOTAL</h6>
          </div>
          <hr className='h-px my-2 bg-gray-200 border dark:bg-gray-700 w-[97%] mx-auto'/>
          <div>
              <ul className='ml-2'>
                <li className='flex justify-between'><span>Subtotal</span><span className='text-black'>N150,000</span></li>
                <hr className='h-px my-2 bg-gray-200 border dark:bg-gray-700 w-[97%] mx-auto'/>
                <li className='flex justify-between'><span>Shipping</span><span className='pl-[100px] text-end'>Enter your address to view shipping options</span></li>
                <li className='text-end'>Calculate shipping</li>
                <hr className='h-px my-2 bg-gray-200 border dark:bg-gray-700 w-[97%] mx-auto'/>
                <li className='flex justify-between'><span>Total</span><span className='text-black'>N150,000</span></li>
                <hr className='h-px my-2 bg-gray-200 border dark:bg-gray-700 w-[97%] mx-auto'/>
              </ul>
          </div>
          <div className='bg-[#c7889d] ml-2 border mt-5 bg-white hover:bg-[#b06981]'>
            <button className='text-white py-2 font-bold'>PROCEED TO CHECKOUT</button>
          </div>
          <div className='bg-[#0aad66] ml-2 border mt-5 hover:bg-[#0c985b]'>
            <button className='flex ml-[120px] text-center text-white py-2 font-bold'><FaWhatsapp className='mx-2 mt-[4px]'/><span>ASK IN WHATSAPP</span></button>
          </div>
          <p className='flex text-start mt-5 ml-2'><FaTag size={15} color="gray" className='translate-x-0.5 rotate-90 mt-[6px]'/><span className='pl-3'>Coupon</span></p>
          <hr className='h-px my-2 bg-gray-200 border dark:bg-gray-700 w-[97%] mx-auto'/>
          <div className='bg-white text-start border mt-3 ml-2'>
            <input 
              type="text"
              placeholder='Coupon code'
              className='text-gray-500 pl-3 py-2 w-full focus:border-gray-300'
            />
          </div>
          <div className='bg-white ml-2 hover:bg-gray-300 border mt-5 mb-5'>
            <button className='py-2'>Apply coupon</button>
          </div>
        </div>
        </div>
      </div>
      < Footer />
    </>
  )
}

export default Cart