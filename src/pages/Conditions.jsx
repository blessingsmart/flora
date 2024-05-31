import React, { useEffect, useState } from 'react';
import Footer from '../component/footer';
import Navbar from '../component/navbar';
import Modal from '../component/modal';

const Conditions = () => {
  const [showModal, setShowModal] = useState(false);
  const [iconClicked, setIconClicked] = useState(null); // Initially set to null
  const [modalData, setModalData] = useState({});
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
      {showModal && (
        <Modal onClose={closeModal} iconClicked={iconClicked} id={modalData.id} src={modalData.src} title={modalData.title} price={modalData.price} prices={modalData.prices} openModal={openModal}>
        </Modal>
      )}
      <div className='px-52'>
          <h1 className='font-bold'>Terms And Conditions</h1>
          <p>{"1. General: All our prices are already inclusive of VAT. However, a delivery fee will be added on during checkoutOur delivery rates for areas in Lagos, Nigeria are as listed below:"}</p>
      </div>
      
      < Footer />
    </>
  )
}

export default Conditions