import React, { useState } from 'react';
import Modal from '../../component/modal';
import teddy1 from '../../assets/teddy1.jpg';
import teddy2 from '../../assets/teddy2.jpg';
import teddy3 from '../../assets/teddy3.jpg';
import teddy4 from '../../assets/teddy4.jpg';
import teddy5 from '../../assets/teddy5.jpg';
import teddy6 from '../../assets/teddy6.jpg';
import teddy7 from '../../assets/teddy7.jpg';
import teddy8 from '../../assets/teddy8.jpg';
import teddy9 from '../../assets/teddy9.jpg';
import teddy10 from '../../assets/teddy10.jpg';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';



const Teddy = () => {

  const [showModal, setShowModal] = useState(false);
  const [iconClicked, setIconClicked] = useState(null); // Initially set to null
  const [modalData, setModalData] = useState([]);
  const [newData, setNewData] = useState([]);

  const openModal = (clickedIcon) => {
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

  const handleItemPicking = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleItemClick = (id, src, title, price) => {
    openModal("preview"); // Pass src, title, and price only
    dynamic({id, src, title, price }); // Pass src, title, and price only
  };
    
    const links = [
        {
          id: 1,
          src: teddy1 ,
          title: "Teddy 001",
          price: "₦50,000",
        },
        {
          id: 2,
          src: teddy2,
          title: "Teddy 002",
          price: "#70,000",
        },
        {
          id: 3,
          src: teddy3,
          title: "Teddy 003",
          price: "#100,000",
        },
        {
          id: 4,
          src: teddy4,
          title: "Teddy 004",
          price: "#60,000",
        },
        {
          id: 5,
          src: teddy5,
          title: "Teddy 005",
          price: "#85,000",
        },
        {
          id: 6,
          src: teddy6,
          title: "Teddy 006",
          price: "#150,000",
        },
        {
          id: 7,
          src: teddy7,
          title: "Teddy 007",
          price: "#80,000",
        },
        {
          id: 8,
          src: teddy8,
          title: "Teddy 008",
          price: "#60,000",
        },
        {
          id: 9,
          src: teddy9,
          title: "Teddy 009(35cm)",
          price: "#50,000",
        },
        {
          id: 10,
          src: teddy10,
          title: "Teddy 010",
          price: "#70,000",
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
        <Modal id={modalData.id} price={modalData.price} onClose={closeModal} iconClicked={iconClicked} openModal={openModal} dynamic={dynamic} modalData={modalData} setModalData={setModalData} newData={newData}>
        </Modal>
      )}
    <div name="menu" className='flex flex-col items-center gap-12 sm:p-16 p-5'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
        { links.map(({ id, src, title, price}, item, index) => {
            const formattedPrice = new Intl.NumberFormat('en-NG', {
              style: 'currency',
              currency: 'NGN'
            }).format(parseInt(price.replace(/[^\d.-]/g, ""), 10));

        return(
            <div key={id} className='flex flex-col drop-shadow-xl '>
                <div key={index} onClick={() => handleItemPicking(item)} className='relative'>
                    <img src={src} alt='products' className='  ' />
                    <button className='absolute bottom-0 bg-black/90 text-white p-1 text-sm font-bold  w-full' onClick={() => handleItemClick(id, src, title, price)}>Quick View</button>
                </div>
                <div className='flex flex-col sm:flex-row sm:gap-3 justify-between font-semibold text-sm py-3 bg-gradient-to-t from-black/5 via-white to-white'>
                    <p className='p-2'>{title}</p >
                    <p className='p-2'>{formattedPrice}</p >
                </div>
            </div>
            )}
          )}
        </div>
    </div>
    < Footer />
    </>
  )
}

export default Teddy