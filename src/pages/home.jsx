import React, { useEffect, useState } from 'react';
import Modal from '../component/modal';
import Navbar from '../component/navbar';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import water from '../assets/water1.jpg';
import pink from '../assets/pink1.jpg';
import rose from '../assets/rose.jpg';
import purple from '../assets/purple.jpg';

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
      perPage: 1,
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
      <div name="hero" id="splide1" className="splide">
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
    </>
  );
};

export default Home;
