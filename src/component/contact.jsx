import React from 'react'
import pexels from '../assets/pexels.jpg'

const Contact = () => {
  return (
    <div  className='w-full my-16 relative'>
            <img src={pexels}
            className='top-o left-0  h-full min-h-[700px] object-cover' alt="" />
            <div className='absolute md:w-1/2  top-0 flex flex-col p-10 text-black'>
                <div>
                    <h2 className='font-signature text-5xl text-center m-5'>Contact us</h2>
                    <div className='flex flex-col gap-6 w-full'>
                        <div className='flex  gap-1'>
                            <p className='font-bold'>Phone Number</p>
                            <p>-</p>
                            <p>0806 052 1476</p>
                        </div>
                        <div className='flex  gap-1'>
                            <p className='font-bold'>Email</p>
                            <p>-</p>
                            <p>Flowersimperial34@gmail.com</p>
                        </div>
                        <div className='flex  gap-1'>
                            <p className='font-bold'>Address</p>
                            <p>-</p>
                            <p>Shop E112 Giwa shopping complex, 117 Alfred Rewane road, Falomo, Ikoyi, Lagos, Nigeria</p>
                        </div>
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
  )
}

export default Contact