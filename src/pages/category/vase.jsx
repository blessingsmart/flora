import React, { useState } from 'react';
import Modal from '../../component/modal';
import vase1 from '../../assets/vase/clearVase.jpg';
import vase2 from '../../assets/vase/goldVase.jpg'; 
import vase3 from '../../assets/vase/Vase1.jpg';
import vase4 from '../../assets/vase/Vase2.jpg';
import vase5 from '../../assets/vase/Vase3.jpg'; 
import vase6 from '../../assets/vase/Vase4.jpg';
import vase7 from '../../assets/vase/Vase5.jpg'; 
import vase8 from '../../assets/vase/Vase6.jpg'; 
import vase9 from '../../assets/vase/Vase7.jpg';
import vase10 from '../../assets/vase/Vase8.jpg'; 
import vase11 from '../../assets/vase/Vase9.jpg'; 
import vase12 from '../../assets/vase/Vase10.jpg';
import vase13 from '../../assets/vase/Vase11.jpg';
import vase14 from '../../assets/vase/Vase12.jpg';
import vase15 from '../../assets/vase/Vase13.jpg';
import vase16 from '../../assets/vase/Vase14.jpg';
import vase17 from '../../assets/vase/Vase15.jpg';
import vase18 from '../../assets/vase/Vase16.jpg';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';


const Vase = () => {

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
          src: vase1 ,
          title: "vase 001",
          price: "20000",
        },
        {
          id: 2,
          src: vase2 ,
          title: "Gold Vase 002",
          price: "30000",
        },
        {
          id: 3,
          src: vase3,
          title: "Gold Vase 003",
          price: "40000",
        },
        {
          id: 4,
          src: vase4,
          title: "Vase 004",
          price: "28000",
        },
        {
          id: 5,
          src: vase5,
          title: "Vase 005",
          price: "30000",
        },
        {
          id: 6,
          src: vase6,
          title: "Vase 006",
          price: "28000",
        },
        {
          id: 7,
          src: vase7,
          title: "Vase 007",
          price: "35000",
        },
        {
          id: 8,
          src: vase8,
          title: "Vase 008",
          price: "27000",
        },
        {
          id: 9,
          src: vase9,
          title: "Vase 009",
          price: "27000",
        },
        {
          id: 10,
          src: vase10,
          title: "Vase 010",
          price: "35000",
        },
        {
          id: 11,
          src: vase11,
          title: "Vase 011",
          price: "28000",
        },
        {
          id: 12,
          src: vase12,
          title: "Vase 012",
          price: "30000",
        },
        {
          id: 13,
          src: vase13,
          title: "Vase 013",
          price: "25000",
        },
        {
          id: 14,
          src: vase14,
          title: "Vase 014",
          price: "25000",
        },
        {
          id: 15,
          src: vase15,
          title: "Vase 015",
          price: "28000",
        },
        {
          id: 16,
          src: vase16,
          title: "Vase 016",
          price: "35000",
        },
      ];

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
              <div key={id} className='flex flex-col drop-shadow-xl cursor-pointer' onClick={() => handleItemClick(id, src, title, price)}>
                <div key={index} onClick={() => handleItemPicking(item)} className='relative'>
                    <img src={src} alt='products' className='  ' />
                    <button className='absolute bottom-0 bg-black/90 text-white p-1 text-sm font-bold  w-full'></button>
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

export default Vase