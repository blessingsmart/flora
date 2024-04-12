import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";
const Footer = () => {

    const links = [
        {
          id: 1,
          link: "/",
          title: "About",
        },
        {
          id: 2,
          link: "/",
          title: "Shop",
        },
        {
          id: 3,
          link: "/",
          title: "Contact us",
        },
      ];

      

    const social = [
    {
      id: 1,
      child: (
        <>
           <FaTwitter size={25}/>
        </>
      ),
      href: 'https://www.twitter.com/sourcereflect1'
    },
    {
      id: 2,
      child: (
        <>
           <FaWhatsapp size={25}/>
        </>
      ),
      href: 'https://wa.me/message/YL3HPLETTPM5O1?src=qr',
    },
    {
      id: 3,
      child: (
        <>
           <FaInstagram size={25}/>
        </>
      ),
      href: 'https://instagram.com/sourcereflect?igshid=MmIzYWVlNDQ5Yg==',
    },
    {
      id: 4,
      child: (
        <>
           <FaFacebook size={25}/>
        </>
      ),
      href: 'https://www.facebook.com/sourcereflec?mibextid=LQQJ4d',
    },
  ];

    
  return (
    <div className='h-40 flex flex-col '>
        <div className='h-3/5 bg-black/90 px-16 flex text-white items-center justify-around'>
            <h1>logo</h1>
            <div>
            <ul className="flex gap-4">
              {links.map(({ id, link, title }) => (
                <li
                  key={id}
                  className="px-4 py-2 cursor-pointer capitalize font-medium hover:scale-105 duration-200 "
                >
                    <RouterLink to={link}>{title}</RouterLink>
                </li>
              ))}
            </ul> 
            </div>
            <div>
                <ul className='flex justify-between items-center '>
                          {social.map(({id, child, href}) => (
                            <li 
                              key={id} 
                              className={
                                `hover:scale-105 m-1`
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
                <h2 className='p-3 text-white/60'>lorem @ Copyright 2024</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer