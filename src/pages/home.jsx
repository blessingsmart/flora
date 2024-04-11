import React, { useEffect, useState } from 'react';
import Modal from '../component/modal';
import Navbar from '../component/navbar';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import water from '../assets/water1.jpg';
import pink from '../assets/pink1.jpg';
import redrose from '../assets/redrose.jpg';
import rose from '../assets/rose.jpg';
import purple from '../assets/purple.jpg';
import Occassion from '../component/occassion';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [iconClicked, setIconClicked] = useState(null); // Initially set to null

  useEffect(() => {
    const splide1 = new Splide('#splide1', {
      type: 'loop',
      perMove: 1,
      drag: 'free',
      focus: 'center',
      autoplay: true,
      perPage: 3,
    }).mount();

    return () => {
      splide1.destroy();
    };
  }, []);

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
      <div name="hero" id="splide1" className="splide px-16 ">
        <div className="splide__track">
          <ul className="splide__list ">
            <li className="splide__slide">
              <div className="">
                <img src={pink} alt="Image 1" className="h-screen w-screen relative" />
              </div>
            </li>
            <li className="splide__slide">
              <div className="">
                <img src={water} alt="Image 2" className="h-screen w-screen" />
              </div>
            </li>
            <li className="splide__slide">
              <div className="">
                <img src={rose} alt="Image 3" className=" h-screen w-screen" />
              </div>
            </li>
            <li className="splide__slide">
              <div className="">
                <img src={purple} alt="Image 3" className=" h-screen w-screen" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      {showModal && (
        <Modal onClose={closeModal} iconClicked={iconClicked}>
        </Modal>
      )}
      <div className='flex justify-between gap-5 p-16 text-xl'>
        <div className='pt-16'>
          <h1 className='font-signature py-6 text-4xl text-center'>Introducing Love Bug Florist</h1>
          <p className='leading-relaxed'>Lovebug Florist is the leading online Flower Shop in Lagos, <br/>Nigeria that specializes in premium Fresh flowers and gifts  <br/> for all occasions such as birthdays, anniversaries, Romance,<br/> Get well soon, Funerals and so much more.</p>
          <p className='leading-relaxed'>We are the top fresh flowers company with a wide array of<br/> flowers including roses, Lilies, Carnations, Alstromerias, <br/>Peonies, hydrangeas, potted plants and so much more.<br/> Buy online or Call/WhatsApp: +234 8131883002 <br/>or +2349064514150. Buy flowers in Lagos, <br/>Nigeria online – Shop from our Fresh Flower & <br/>Rose Bouquets today! <button> read more… </button></p>
        </div>
        <div className='flex gap-10'>
          <img src={redrose} alt="rose"  className='size-72 drop-shadow-2xl'/>
          <img src={redrose} alt="rose" className='size-72 drop-shadow-2xl' />
        </div>
      </div>
      <Occassion />
    </>
  );
};

export default Home;
