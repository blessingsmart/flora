import React, { useState } from 'react';
import Modal from '../../component/modal';
import fruit1 from '../../assets/fruit1.jpg';
import fruit2 from '../../assets/fruit2.jpg';
import fruit3 from '../../assets/fruit3.jpg';
import fruit4 from '../../assets/fruit4.jpg';
import fruit5 from '../../assets/fruit5.jpg';
import fruit6 from '../../assets/fruit6.jpg';
import fruit7 from '../../assets/fruit7.jpg';
import fruit8 from '../../assets/fruit8.jpg';
import fruit9 from '../../assets/fruit9.jpg';
import fruit10 from '../../assets/fruit10.jpg';
import fruit11 from '../../assets/fruit11.jpg';
import fruit12 from '../../assets/fruit12.jpg';
import fruit13 from '../../assets/fruit13.jpg';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';



const Fruit = () => {

    
    const links = [
        {
          id: 1,
          src: fruit1 ,
          title: "Fruit 001",
          price: "₦200,000",
        },
        {
          id: 2,
          src: fruit2,
          title: "Fruit 002",
          price: "#90,000",
        },
        {
          id: 3,
          src: fruit3,
          title: "Fruit 003",
          price: "#90,000",
        },
        {
          id: 4,
          src: fruit4,
          title: "Fruit 004",
          price: "#120,000",
        },
        {
          id: 5,
          src: fruit5,
          title: "Fruit 005",
          price: "#90,000",
        },
        {
          id: 6,
          src: fruit6,
          title: "Fruit 006",
          price: "#250,000",
        },
        {
          id: 7,
          src: fruit7,
          title: "Fruit 007",
          price: "#60,000",
        },
        {
          id: 8,
          src: fruit8,
          title: "Fruit 008",
          price: "#130,000",
        },
        {
          id: 9,
          src: fruit9,
          title: "Fruit 009",
          price: "#150,000",
        },
        {
          id: 10,
          src: fruit10,
          title: "Fruit 010",
          price: "#180,000",
        },
        {
          id: 11,
          src: fruit11,
          title: "Fruit 011",
          price: "#200,000",
        },
        {
          id: 12,
          src: fruit12,
          title: "Fruit 012",
          price: "#90,000",
        },
        {
          id: 13,
          src: fruit13,
          title: "Fruit 013",
          price: "#100,000",
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