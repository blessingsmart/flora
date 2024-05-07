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
import flower37 from '../../assets/flower37.jpg';
import flower38 from '../../assets/flower38.jpg';
import flower39 from '../../assets/flower39.jpg';
import flower40 from '../../assets/flower40.jpg';
import flower41 from '../../assets/flower41.jpg';
import flower42 from '../../assets/flower42.jpg';
import flower43 from '../../assets/flower43.jpg';
import flower44 from '../../assets/flower44.jpg';
import flower45 from '../../assets/flower45.jpg';
import flower46 from '../../assets/flower46.jpg';
import flower47 from '../../assets/flower47.jpg';
import flower48 from '../../assets/flower48.jpg';
import flower49 from '../../assets/flower49.jpg';
import flower50 from '../../assets/flower50.jpg';
import flower51 from '../../assets/flower51.jpg';
import flower52 from '../../assets/flower52.jpg';
import flower53 from '../../assets/flower53.jpg';
import flower54 from '../../assets/flower54.jpg';
import flower55 from '../../assets/flower55.jpg';
import flower56 from '../../assets/flower56.jpg';
import flower57 from '../../assets/flower57.jpg';
import flower58 from '../../assets/flower58.jpg';
// import flower59 from '../../assets/flower59.jpg';
import flower60 from '../../assets/flower60.jpg';
import flower61 from '../../assets/flower61.jpg';
import flower62 from '../../assets/flower62.jpg';
import flower63 from '../../assets/flower63.jpg';
import flower64 from '../../assets/flower64.jpg';
import flower65 from '../../assets/flower65.jpg';
import flower66 from '../../assets/flower66.jpg';
import flower67 from '../../assets/flower67.jpg';
import flower68 from '../../assets/flower68.jpg';
import flower69 from '../../assets/flower69.jpg';
import flower70 from '../../assets/flower70.jpg';
import flower71 from '../../assets/flower71.jpg';
import flower72 from '../../assets/flower72.jpg';
import flower73 from '../../assets/flower73.jpg';
import flower74 from '../../assets/flower74.jpg';
import flower75 from '../../assets/flower75.jpg';
import flower76 from '../../assets/flower76.jpg';
import flower77 from '../../assets/flower77.jpg';
import flower78 from '../../assets/flower78.jpg';
// import flower79 from '../../assets/flower79.jpg';
import flower80 from '../../assets/flower80.jpg';
import flower81 from '../../assets/flower81.jpg';
import flower82 from '../../assets/flower82.jpg';
import flower83 from '../../assets/flower83.jpg';
import flower84 from '../../assets/flower84.jpg';
import flower85 from '../../assets/flower85.jpg';
import flower86 from '../../assets/flower86.jpg';
import flower87 from '../../assets/flower87.jpg';
import flower88 from '../../assets/flower88.jpg';
import flower89 from '../../assets/flower89.jpg';
import flower90 from '../../assets/flower90.jpg';
import flower91 from '../../assets/flower91.jpg';
import flower92 from '../../assets/flower92.jpg';
import flower93 from '../../assets/flower93.jpg';
import flower94 from '../../assets/flower94.jpg';
import flower95 from '../../assets/flower95.jpg';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';



const Fresh = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');

    
    const links = [
        {
          id: 1,
          src: flower25 ,
          title: "Apology Flowers 002",
          price: "₦200,000",
          category: "Boxed",
        },
        {
          id: 2,
          src: flower26,
          title: "Apology Flowers 003",
          price: "#90,000",
          category: "Occassions",        
        },
        {
          id: 3,
          src: flower27,
          title: "Apology Flowers 004",
          price: "#150,000",
          category: "Occassions",
        },
        {
          id: 4,
          src: flower28,
          title: "Aqua Pack 001",
          price: "#80,000",
          category: "Vase",        
        },
        {
          id: 5,
          src: flower29,
          title: "Aqua Pack 002",
          price: "#115,000",
          category: "Vase",
        },
        {
          id: 6,
          src: flower30,
          title: "Aqua Pack 003",
          price: "#50,000",

category: "Vase",        },
        {
          id: 7,
          src: flower31,
          title: "Aqua Pack 004",
          price: "#50,000",

category: "Food Items",        },
        {
          id: 8,
          src: flower32,
          title: "Aqua Pack 005",
          price: "#260,000",
          category: "Food Items",
        },
        {
          id: 9,
          src: flower33,
          title: "Aqua Pack 006",
          price: "#95,000",

category: "Food Items",        },
        {
          id: 10,
          src: flower34,
          title: "Aqua Pack 007",
          price: "#70,000",

category: "Food Items",        },
        {
          id: 11,
          src: flower35,
          title: "Aqua Pack 008",
          price: "#115,000",
          category: "Food Items",
        },
        {
          id: 12,
          src: flower36,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 13,
          src: flower37,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 14,
          src: flower38,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 15,
          src: flower39,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 16,
          src: flower40,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 17,
          src: flower41,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 18,
          src: flower42,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 19,
          src: flower43,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 20,
          src: flower44,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 21,
          src: flower45,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 22,
          src: flower46,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 23,
          src: flower47,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 24,
          src: flower48,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 25,
          src: flower49,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 26,
          src: flower50,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 27,
          src: flower51,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 28,
          src: flower52,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 29,
          src: flower53,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 30,
          src: flower54,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 31,
          src: flower55,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 32,
          src: flower56,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 33,
          src: flower57,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 34,
          src: flower58,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        // {
        //   id: 35,
        //   src: flower59,
        //   title: "Aqua Pack 009",
        //   price: "#130,000",
        //category: "Food Items",
        // },
        {
          id: 36,
          src: flower60,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 37,
          src: flower61,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 38,
          src: flower62,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 39,
          src: flower63,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 40,
          src: flower64,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 41,
          src: flower65,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 42,
          src: flower66,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 43,
          src: flower67,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 44,
          src: flower68,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 45,
          src: flower69,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 46,
          src: flower70,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 47,
          src: flower71,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 48,
          src: flower72,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 49,
          src: flower73,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 50,
          src: flower74,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 51,
          src: flower75,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 52,
          src: flower76,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 53,
          src: flower77,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 54,
          src: flower78,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        // {
        //   id: 55,
        //   src: flower79,
        //   title: "Aqua Pack 009",
        //   price: "#130,000",
        //category: "Food Items",
        // },
        {
          id: 56,
          src: flower80,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 57,
          src: flower81,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 58,
          src: flower82,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 59,
          src: flower83,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 60,
          src: flower84,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 61,
          src: flower85,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 62,
          src: flower86,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 63,
          src: flower87,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 54,
          src: flower88,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 65,
          src: flower89,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 66,
          src: flower90,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 67,
          src: flower91,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 68,
          src: flower92,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 69,
          src: flower93,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 70,
          src: flower94,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
        {
          id: 71,
          src: flower95,
          title: "Aqua Pack 009",
          price: "#130,000",
          category: "Food Items",
        },
      ];

      const filteredLinks = links.filter(link => {
        return selectedCategory === 'All' || link.category === selectedCategory;
      });

      
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
    <div className='font-medium text-center py-5 cursor-pointer md:hidden'>FILTER</div>
    <div className='flex sm:p-16 p-5 justify-between'>
      <div className='md:flex flex-col pr-10 hidden '>
        <h2 className='py-10 font-medium text-gray-600 text-center text-lg cursor-pointer'
            onClick={() => setSelectedCategory('All')}>PRODUCT CATEGORIES</h2>
        <div className='flex flex-col gap-3 text-left'>
          <button onClick={() => setSelectedCategory('Boxed')}>Boxed Flowers</button>
          <button onClick={() => setSelectedCategory('Occassions')}>Occassions</button>
          <button onClick={() => setSelectedCategory('Vase')}>Vase Arrangements</button>
        </div>
      </div>
      <div name="menu" className='flex flex-col items-center gap-12 md:basis-4/5'>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-8'>
              {
              filteredLinks.map(({ id, src, title, price}) => (
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
    </div>
    < Footer />
    </>
  )
}

export default Fresh