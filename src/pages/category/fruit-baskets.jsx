import React, { useState } from 'react';
import Modal from '../../component/modal';
import flower1 from '../../assets/flower1.jpg';
import flower2 from '../../assets/flower2.jpg';
import flower3 from '../../assets/flower3.jpg';
import flower4 from '../../assets/flower4.jpg';
import flower5 from '../../assets/flower5.jpg';
import flower6 from '../../assets/flower6.jpg';
import flower7 from '../../assets/flower7.jpg';
import flower8 from '../../assets/flower8.jpg';
import flower9 from '../../assets/flower9.jpg';
import flower10 from '../../assets/flower10.jpg';
import flower11 from '../../assets/flower11.jpg';
import flower12 from '../../assets/flower12.jpg';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';



const Fruit = () => {

    
    const links = [
        {
          id: 1,
          src: flower1 ,
          title: "Apology Flowers 002",
          price: "₦200,000",
        },
        {
          id: 2,
          src: flower2,
          title: "Apology Flowers 003",
          price: "#90,000",
        },
        {
          id: 3,
          src: flower3,
          title: "Apology Flowers 004",
          price: "#150,000",
        },
        {
          id: 4,
          src: flower4,
          title: "Aqua Pack 001",
          price: "#80,000",
        },
        {
          id: 5,
          src: flower5,
          title: "Aqua Pack 002",
          price: "#115,000",
        },
        {
          id: 6,
          src: flower6,
          title: "Aqua Pack 003",
          price: "#50,000",
        },
        {
          id: 7,
          src: flower7,
          title: "Aqua Pack 004",
          price: "#50,000",
        },
        {
          id: 8,
          src: flower8,
          title: "Aqua Pack 005",
          price: "#260,000",
        },
        {
          id: 9,
          src: flower9,
          title: "Aqua Pack 006",
          price: "#95,000",
        },
        {
          id: 10,
          src: flower10,
          title: "Aqua Pack 007",
          price: "#70,000",
        },
        {
          id: 11,
          src: flower11,
          title: "Aqua Pack 008",
          price: "#115,000",
        },
        {
          id: 12,
          src: flower12,
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

export default Fruit