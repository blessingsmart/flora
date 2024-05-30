import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Modal from '../component/modal';
import Navbar from '../component/navbar';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import flower3 from '../assets/flower03.jpg';
import flower4 from '../assets/flower04.jpg';
import splide1 from '../assets/splide1.jpg';
import splide2 from '../assets/splide2.jpg';
import splide3 from '../assets/splide3.jpg';
import splide4 from '../assets/splide4.jpg';
import splide5 from '../assets/splide5.jpg';
import splide6 from '../assets/splide6.jpg';
import splide7 from '../assets/splide7.jpg';
import splide8 from '../assets/splide8.jpg';
import splide9 from '../assets/splide9.jpg';
import splide10 from '../assets/splide10.jpg';
import splide11 from '../assets/splide11.jpg';
import splide12 from '../assets/splide12.jpg';
import splide13 from '../assets/splide13.jpg';
import splide14 from '../assets/splide14.jpg';
import splide15 from '../assets/splide15.jpg';
import splide16 from '../assets/splide16.jpg';
import splide17 from '../assets/splide17.jpg';
import splide18 from '../assets/splide18.jpg';
import splide19 from '../assets/splide19.jpg';
import splide20 from '../assets/splide20.jpg';
import splide21 from '../assets/splide21.jpg';
import splide22 from '../assets/splide22.jpg';
import splide23 from '../assets/splide23.jpg';
import splide24 from '../assets/splide24.jpg';
import splide25 from '../assets/splide25.jpg';
import splide26 from '../assets/splide26.jpg';
import splide27 from '../assets/splide27.jpg';
import splide28 from '../assets/splide28.jpg';
import splide29 from '../assets/splide29.jpg';
import splide30 from '../assets/splide30.jpg';
import splide31 from '../assets/splide31.jpg';
import splide32 from '../assets/splide32.jpg';
import splide33 from '../assets/splide33.jpg';
import splide34 from '../assets/splide34.jpg';
import splide35 from '../assets/splide35.jpg';
import splide36 from '../assets/splide36.jpg';
import splide37 from '../assets/splide37.jpg';
import splide38 from '../assets/splide38.jpg';
import splide39 from '../assets/splide39.jpg';
import splide40 from '../assets/splide40.jpg';
import splide41 from '../assets/splide41.jpg';
import splide42 from '../assets/splide42.jpg';
import splide43 from '../assets/splide43.jpg';
import splide44 from '../assets/splide44.jpg';
import splide45 from '../assets/splide45.jpg';
import splide46 from '../assets/splide46.jpg';
import splide47 from '../assets/splide47.jpg';
import splide48 from '../assets/splide48.jpg';
import splide49 from '../assets/splide49.jpg';
import splide50 from '../assets/splide50.jpg';
import Contact from "../component/contact"
import Footer from '../component/footer';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [iconClicked, setIconClicked] = useState(null); // Initially set to null
  const [modalData, setModalData] = useState({});



  useEffect(() => {
    const splide1 = new Splide('#splide1', {
      type: 'loop',
      perMove: 1,
      drag: 'free',
      focus: 'center',
      autoplay: true,
      perPage: 3,
      breakpoints: {
        640: {
          perPage: 1,},
        },
    }).mount();

    return () => {
      splide1.destroy();
    };
  }, []);

  const openModal = ( clickedIcon ) => {
    setShowModal(true);
    setIconClicked(clickedIcon);
  };
  const dynamic = ( {id, src, title, price, prices} ) => {
    setModalData({ id, src, title, price, prices });
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <>
      <Navbar openModal={openModal} />
      <div id="splide1" className="splide sm:px-16 px-5 ">
        <div className="splide__track">
          <ul className="splide__list ">
            <li className="splide__slide">
              <div >
                <img src={splide1} alt="Image 1"/>
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide2} alt="Image 2" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide3} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide4} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide5} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide6} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide7} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide8} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide9} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide10} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide11} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide12} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide13} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide14} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide15} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide16} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide17} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide18} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide19} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide20} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide21} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide22} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide23} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide24} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide25} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide26} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide27} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide28} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide29} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide30} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide31} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide32} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide33} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide34} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide35} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide36} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide37} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide38} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide39} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide40} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide41} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide42} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide43} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide44} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide45} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide46} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide47} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide48} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide49} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={splide50} alt="Image 3" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      {showModal && (
        <Modal onClose={closeModal} iconClicked={iconClicked} id={modalData.id} src={modalData.src} title={modalData.title} price={modalData.price} prices={modalData.prices} openModal={openModal}>
        </Modal>
      )}
      <div className='lg:flex justify-between gap-5 sm:p-16 p-5 text-xl'>
        <div className='pt-16 text-center lg:text-start lg:w-1/2'>
          <h1 className='font-signature py-6 text-4xl text-center'>Introducing Flowers Imperial</h1>
          <div className='text-left leading-relaxed text-lg'>
            <p className=''>Flowers Imperial is a unique floral shop specialized in handcrafted floral arrangements using only the freshest and most vibrant blooms. This is an idea birthed out of love for fresh flowers and flowery plants from childhood. Studies have shown that the presence of flowers or plants in ones space is very beneficial to the health hence we find this worthy of extending to the world around us.</p>
            <p className=''>Flowers Imperial is a thriving fresh flowers shop located in Ikoyi, Lagos Nigeria. We have a wide range of fresh flowers for any occasion such as birthday, wedding anniversary, just because, bridal bouquet, funeral wreath, events, etc.)available for pick up and delivery within Lagos and neighboring States . Our major priority is to ensure every client gets value for money spent with an excellent customer service.
              <Link to="/about">read more… </Link>
            </p>
          </div>
        </div>
        <div className='lg:flex gap-10 hidden '>
          <img src={flower3} alt="rose"  className='size-72 drop-shadow-2xl'/>
          <img src={flower4} alt="rose" className='size-72 drop-shadow-2xl' />
        </div>
      </div>
      <Occassion openModal={openModal} dynamic={dynamic}/>
      < Gift openModal={openModal} dynamic={dynamic}/>
      < Contact />
      < Footer />
    </>
  );
};

export default Home;
