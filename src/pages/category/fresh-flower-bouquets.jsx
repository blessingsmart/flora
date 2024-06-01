import React, { useState } from 'react';
import Modal from '../../component/modal';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';
import { fresh } from '../../component/data';
import Preview from '../../component/preview';



const Fresh = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItems, setSelectedItems] = useState([]);

    


  const filteredLinks = fresh.filter(link => {
    return selectedCategory === 'All' || link.category === selectedCategory;
  });

      
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
    if (selectedItems.find(selectedItem => selectedItem.id === item.id)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };


  const handleItemClick = (id, src, title, price) => {
    openModal("preview"); // Pass src, title, and price only
    dynamic({id, src, title, price }); // Pass src, title, and price only
  };
  


  return (
    <>
    <Navbar openModal={openModal} />
    {showModal && (
        <Modal id={modalData.id} price={modalData.price} onClose={closeModal} iconClicked={iconClicked} openModal={openModal} dynamic={dynamic} modalData={modalData} setModalData={setModalData} newData={newData}>
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
              filteredLinks.map(({ id, src, title, price}, item, index) => {
                const formattedPrice = new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN'
                }).format(parseInt(price.replace(/[^\d.-]/g, ""), 10));
    
            return(
                <div key={id} className='flex flex-col drop-shadow-xl cursor-pointer'>
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
    </div>
    < Footer />
    </>
  )
}

export default Fresh