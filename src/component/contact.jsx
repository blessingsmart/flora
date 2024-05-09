import React from 'react'
import contact from '../assets/contact.jpg'
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";


const social = [
    {
      id: 1,
      classname: 'text-[#1DA1F2]',
      child: (
        <>
           <FaTwitter size={25}/>
        </>
      ),
      href: ''
    },
    {
      id: 2,
      classname: 'text-[#25D366]',
      child: (
        <>
           <FaWhatsapp size={25}/>
        </>
      ),
      href: 'https://wa.me/2348060521476',
    },
    {
      id: 3,
      classname: 'text-[#C13584]',
      child: (
        <>
           <FaInstagram size={25}/>
        </>
      ),
      href: 'https://www.instagram.com/flowersimperial',
    },
    {
      id: 4,
      classname: 'text-[#4267B2]',
      child: (
        <>
           <FaFacebook size={25}/>
        </>
      ),
      href: 'https://web.facebook.com/profile.php?id=100069380672418',
    },
  ];

const Contact = () => {
  return (
    <div  className='w-full my-16 relative'>
            <img src={contact}
            className='  h-full min-h-[750px] object-cover' alt="" />
            <div className='absolute md:w-1/2  top-0 right-0 flex flex-col p-10 text-black'>
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
                        <div className='flex  gap-5'>
                            <p className='font-bold text-xl'>Follow us</p>
                            <div>
                                    <ul className='flex  items-center '>
                                            {social.map(({id, child, href, classname}) => (
                                                <li 
                                                key={id} 
                                                className={
                                                    `hover:scale-105 m-1 ${classname}`
                                                }
                                                >
                                                <a 
                                                    href={href} 
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    {child}
                                                </a>
                                                </li>
                                            ))} 
                                    </ul>
                                </div>
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