import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import pexels from '../assets/pexels.jpg'

const Contactus = () => {
  return (
    <>
    <Navbar />
    <h1>Contact us</h1>
    <div  className='w-full my-16 relative'>
            <img src={pexels}
            className='top-o left-0  h-full min-h-[650px] object-cover' alt="" />
            <div className='absolute md:w-1/2  top-0 flex flex-col p-10 text-black'>
                <div>
                    <h2 className='font-signature text-5xl text-center m-5'>Send Us a Message</h2>
                    <div className='flex flex-col gap-6 w-full'>
                        <div className='py-5 flex flex-col gap-6 w-full'>
                            <input type="text" 
                                    name="Name" 
                                    id="Name" 
                                    className="bg-white p-3 focus:outline-none"
                                    placeholder="FULL NAME" />
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
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <Footer />
    </>
  )
}

export default Contactus