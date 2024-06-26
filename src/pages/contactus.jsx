import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import contact from '../assets/contact.jpg'
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import { PiHouseLine} from "react-icons/pi";
import { LuFlower } from "react-icons/lu";


const Contactus = () => {
  return (
    <>
    <Navbar />
    <div className='text-center items-center gap-5 text-5xl p-10 flex flex-col'>
      <h1>Contact us</h1>
      <LuFlower size={30}/>
    </div>
    <div className='font-bold text-lg'>
      <div className='flex gap-5 p-5 items-center'>
        <IoCallOutline size={30} />
        <p>0806 052 1476</p>
      </div>
      <div className='flex gap-5 p-5 items-center'>
        <IoMailOpenOutline size={30} />
        <p>Flowersimperial34@gmail.com</p>
      </div>
      <div className='flex gap-5 p-5 items-center'>
        <PiHouseLine size={30} />
        <p>Shop E112 Giwa shopping complex, 117 Alfred Rewane road, Falomo, Ikoyi, Lagos, Nigeria</p>
      </div>
      <div className='flex gap-5 p-5 items-center'>
        <PiHouseLine size={30} />
        <p>24/7</p>
      </div>
    </div>
    <div  className='w-full my-16 relative'>
            <img src={contact}
            className=' h-full min-h-[650px] object-cover' alt="" />
            <div className='absolute md:w-1/2  top-0 right-0 flex flex-col p-10 text-black'>
                <div>
                    <h2 className='font-signature text-5xl text-center m-5'>Send Us a Message</h2>
                    <div className='flex flex-col gap-6 w-full'>
                        <form
                            action="https://getform.io/f/warkrzjb" 
                            method="POST"
                            className='py-5 flex flex-col gap-6 w-full'
                          >
                            <input type="text" 
                                    name="Name" 
                                    id="Name" 
                                    className="bg-white p-3 focus:outline-none"
                                    placeholder="FULL NAME"
                                     />
                            <input type="number" 
                                    name="number" 
                                    id="number" 
                                    className="bg-white p-3 focus:outline-none"
                                    placeholder="PHONE NO." />
                            <textarea type="text" 
                                    name="message" 
                                    id="message" 
                                    className="bg-white p-3 focus:outline-none"
                                    placeholder="MESSAGE"
                                    rows="4" />
                            <button  className='text-white bg-black py-3 rounded-lg'>SEND</button>
                            </ form >
                    </div>
                </div>
            </div>
    </div>
    <Footer />
    </>
  )
}

export default Contactus