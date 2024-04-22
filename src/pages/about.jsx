import React, { useEffect, useState } from 'react';
import Contact from "../component/contact"
import Footer from '../component/footer';
import Navbar from '../component/navbar';
import about from '../assets/about.jpg'


const About = () => {
const [showModal, setShowModal] = useState(false);
const [iconClicked, setIconClicked] = useState(null); // Initially set to null


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
      <div className='flex flex-col items-center px-16'>
        <h1 className='font-signature text-4xl text center p-10'>About Us</h1>
        <div className='flex gap-5'>
            <div className='basis-1/2 flex flex-col gap-5 text-xl'>
                <p>Flowers Imperial is a unique floral shop specializing in handcrafted floral arrangements using only the freshest and most vibrant blooms. This is an idea birthed out of love for fresh flowers and flowery plants from childhood. Studies have shown that the presence of flowers or plants in ones space is very beneficial to the health hence we find this worthy of extending to the world around us.</p>
                <p>Flowers Imperial is a thriving fresh flowers shop located in Ikoyi, Lagos Nigeria. We have a wide range of fresh flowers for any occasion such as birthday, wedding anniversary, just because, bridal bouquet, funeral wreath, events, etc.)available for pick up and delivery within Lagos and neighboring States . Our major priority is to ensure every client gets value for money spent with an excellent customer service.</p>
            </div>
            <div className='basis-1/2'>
            <img src={about} alt="flower" className='' />
            </div>
        </div>
      </div>
      < Contact />
      < Footer />
    </>
  )
}

export default About