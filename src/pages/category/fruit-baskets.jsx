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
          src: fruit1 ,
          title: "Fruit 001",
          price: "200000",
        },
        {
          id: 2,
          src: fruit2,
          title: "Fruit 002",
          price: "90000",
        },
        {
          id: 3,
          src: fruit3,
          title: "Fruit 003",
          price: "90000",
        },
        {
          id: 4,
          src: fruit4,
          title: "Fruit 004",
          price: "120000",
        },
        {
          id: 5,
          src: fruit5,
          title: "Fruit 005",
          price: "90000",
        },
        {
          id: 6,
          src: fruit6,
          title: "Fruit 006",
          price: "250000",
        },
        {
          id: 7,
          src: fruit7,
          title: "Fruit 007",
          price: "60000",
        },
        {
          id: 8,
          src: fruit8,
          title: "Fruit 008",
          price: "130000",
        },
        {
          id: 9,
          src: fruit9,
          title: "Fruit 009",
          price: "150000",
        },
        {
          id: 10,
          src: fruit10,
          title: "Fruit 010",
          price: "180000",
        },
        {
          id: 11,
          src: fruit11,
          title: "Fruit 011",
          price: "200000",
        },
        {
          id: 12,
          src: fruit12,
          title: "Fruit 012",
          price: "90000",
        },
        {
          id: 13,
          src: fruit13,
          title: "Fruit 013",
          price: "100000",
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

export default Fruit