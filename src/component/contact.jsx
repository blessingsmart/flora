import React from 'react'

const Contact = () => {
  return (
    <div  className='w-full my-16 relative'>
            <img src='https://images.pexels.com/photos/62279/pexels-photo-62279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='top-o left-0  w-full object-cover' alt="" />
            <div className='absolute w-1/2  top-0 flex flex-col p-16 text-black'>
                <div>
                    <h2 className='font-signature text-5xl text-center m-5'>Contact us</h2>
                    <div className='flex flex-col gap-6'>
                        <div className='flex  gap-1'>
                            <p className='font-bold'>Phone Number</p>
                            <p>-</p>
                            <p>0801 567 8973</p>
                        </div>
                        <div className='flex  gap-1'>
                            <p className='font-bold'>Email</p>
                            <p>-</p>
                            <p>flower@gmail.com</p>
                        </div>
                        <div className='flex  gap-1'>
                            <p className='font-bold'>Address</p>
                            <p>-</p>
                            <p>victoria Island Lagos, Nigeria</p>
                        </div>
                        <div className='py-5 flex flex-col gap-10'>
                            <input type="text" 
                                    name="Name" 
                                    id="Name" 
                                    className="bg-white p-3 sm:w-96 focus:outline-none"
                                    placeholder="FULL NAME" />
                            <input type="number" 
                                    name="number" 
                                    id="number" 
                                    className="bg-white p-3 sm:w-96 focus:outline-none"
                                    placeholder="PHONE NO." />
                            <input type="text" 
                                    name="message" 
                                    id="message" 
                                    className="bg-white p-3 sm:w-96 focus:outline-none"
                                    placeholder="MESSAGE" />
                            <button  className='text-white bg-black'>SEND</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Contact