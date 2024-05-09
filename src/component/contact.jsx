import React from 'react'
import pexels from '../assets/pexels.jpg'

const Contact = () => {
  return (
    <div  className='w-full my-16 relative'>
            <img src={pexels}
            className='top-o left-0  h-full min-h-[750px] object-cover' alt="" />
            <div className='absolute md:w-1/2  top-0 flex flex-col p-10 text-black'>
                <div>
                    <h2 className='font-signature text-5xl text-center m-5'>Contact us</h2>
                    <div className='flex flex-col gap-6 w-full'>
                        <div className='flex  gap-1'>
                            <p className='font-bold text-xl'>Phone Number</p>
                            <p>-</p>
                            <p className='font-bold'>0806 052 1476</p>
                        </div>
                        <div className='flex  gap-1'>
                            <p className='font-bold text-xl'>Email</p>
                            <p>-</p>
                            <p className='font-bold'>Flowersimperial34@gmail.com</p>
                        </div>
                        <div className='flex  gap-1'>
                            <p className='font-bold text-xl'>Address</p>
                            <p>-</p>
                            <p className='font-bold'>Shop E112 Giwa shopping complex, 117 Alfred Rewane road, Falomo, Ikoyi, Lagos, Nigeria</p>
                        </div>
                        <form   action="https://getform.io/f/warkrzjb" 
                                method="POST"
                                className='py-5 flex flex-col gap-6 w-full'>
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
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Contact