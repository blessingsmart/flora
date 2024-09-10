import React from 'react'
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";
import logo from "../assets/logo.png"


const Footer = () => {

    const links = [
        {
          id: 1,
          link: "/about",
          title: "About",
        },
        {
          id: 2,
          link: "/fresh-flower-bouquets",
          title: "Shop",
        },
        {
          id: 3,
          link: "/contact",
          title: "Contact us",
        },
        {
          id: 3,
          link: "/Terms-and-Conditions",
          title: "Terms & Conditions",
        },
      ];

      

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

    
  return (
    <div className='md:h-40 flex flex-col '>
        <div className='h-3/5 bg-black/40 lg:px-16 p-10 sm:flex-row flex flex-col gap-5 text-white items-center justify-around'>
            <img src={logo} alt="imperial flower logo"
                className='size-14' />
            <div>
            <ul className="flex flex-col md:gap-4 md:flex-row items-center">
              {links.map(({ id, link, title }) => (
                <li
                  key={id}
                  className="px-4 md:py-2 cursor-pointer capitalize font-medium hover:scale-105 duration-200 "
                >
                    <Link to={link}>{title}</Link>
                </li>
              ))}
            </ul> 
            </div>
            <div>
                <ul className='flex justify-between items-center '>
                          {social.map(({id, child, href, classname}) => (
                            <li 
                              key={id} 
                              className={
                                `hover:scale-105 m-1 ${classname} `
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
        <div className='bg-black/60 h-2/5 flex px-16'>
            <div>
                <h2 className='p-3 text-white/60 text-sm'>FLOWERS IMPERIAL @ Copyright 2024</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer