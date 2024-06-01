import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Modal from '../component/modal';
import Navbar from '../component/navbar';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import flower1 from '../assets/flower01.jpg';
import flower2 from '../assets/flower02.jpg';
import flower3 from '../assets/flower03.jpg';
import flower4 from '../assets/flower04.jpg';
import Occassion from '../component/occassion';
import Gift from '../component/gift';
import Contact from "../component/contact"
import Footer from '../component/footer';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFresh, setshowFresh] = useState(false);
  const [iconClicked, setIconClicked] = useState(null); // Initially set to null
  const [modalData, setModalData] = useState([]);
  const [newData, setNewData] = useState([]);

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

  const handleAddProduct = (product) => {
    const newProductId = product;
    setNewData(newProductId);

    setModalData({ id: product.id, src: product.src, title: product.title,
                  price: product.price });

    const productExist = modalData.find((item) => item.id === product.id);
    if (productExist) {
      setModalData(
        modalData.map((item) =>
          item.id === product.id ? { ...productExist } : item
        )
      );
    } 
    else {
      setModalData([...modalData, product]);
    }
  };

  const dynamic = ({ id, src, title, price }) => {
    handleAddProduct({ id, src, title, price });
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
                <img src={flower1} alt="Image 1"/>
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={flower2} alt="Image 2" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={flower3} alt="Image 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img src={flower4} alt="Image 3" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      {showModal && (
        <Modal onClose={closeModal} iconClicked={iconClicked} openModal={openModal} dynamic={dynamic} modalData={modalData} setModalData={setModalData} newData={newData}>
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
