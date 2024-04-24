import React, { useState } from 'react';
import Modal from '../../component/modal';
import flower25 from '../../assets/flower25.jpg';
import flower26 from '../../assets/flower26.jpg';
import flower27 from '../../assets/flower27.jpg';
import flower28 from '../../assets/flower28.jpg';
import flower29 from '../../assets/flower29.jpg';
import flower30 from '../../assets/flower30.jpg';
import flower31 from '../../assets/flower31.jpg';
import flower32 from '../../assets/flower32.jpg';
import flower33 from '../../assets/flower33.jpg';
import flower34 from '../../assets/flower34.jpg';
import flower35 from '../../assets/flower35.jpg';
import flower36 from '../../assets/flower36.jpg';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';



const Fresh = () => {

    
    const links = [
        {
          id: 1,
          src: flower25 ,
          title: "Apology Flowers 002",
          price: "₦200,000",
        },
        {
          id: 2,
          src: flower26,
          title: "Apology Flowers 003",
          price: "#90,000",
        },
        {
          id: 3,
          src: flower27,
          title: "Apology Flowers 004",
          price: "#150,000",
        },
        {
          id: 4,
          src: flower28,
          title: "Aqua Pack 001",
          price: "#80,000",
        },
        {
          id: 5,
          src: flower29,
          title: "Aqua Pack 002",
          price: "#115,000",
        },
        {
          id: 6,
          src: flower30,
          title: "Aqua Pack 003",
          price: "#50,000",
        },
        {
          id: 7,
          src: flower31,
          title: "Aqua Pack 004",
          price: "#50,000",
        },
        {
          id: 8,
          src: flower32,
          title: "Aqua Pack 005",
          price: "#260,000",
        },
        {
          id: 9,
          src: flower33,
          title: "Aqua Pack 006",
          price: "#95,000",
        },
        {
          id: 10,
          src: flower34,
          title: "Aqua Pack 007",
          price: "#70,000",
        },
        {
          id: 11,
          src: flower35,
          title: "Aqua Pack 008",
          price: "#115,000",
        },
        {
          id: 12,
          src: flower36,
          title: "Aqua Pack 009",
          price: "#130,000",
        },
      ];

      
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
    <div name="menu" className='flex flex-col items-center gap-12 sm:p-16 p-5'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {
            links.map(({ id, src, title, price}) => (
                <div key={id} className='flex flex-col drop-shadow-xl '>
                    <div className='relative'>
                        <img src={src} alt='products' className='  ' />
                        <button className='absolute bottom-0 bg-black/90 text-white p-1 text-sm font-bold  w-full'>Quick View</button>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-3 justify-between font-semibold text-sm py-3 bg-gradient-to-t from-black/5 via-white to-white'>
                        <p className='p-2'>{title}</p >
                        <p className='p-2'>{price}</p >
                    </div>
                </div>
                ))}
        </div>
    </div>
    < Footer />
    </>
  )
}

export default Fresh