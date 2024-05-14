import React, { useState } from 'react'
import { funeral } from "../../component/data"
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';
import Modal from '../../component/modal';

const Funeral = () => {
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

      const [selectedItems, setSelectedItems] = useState([]);

    

      const handleItemPicking = (item) => {
        if (selectedItems.includes(item)) {
          setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
        } else {
          setSelectedItems([...selectedItems, item]);
        }
      };

      const handleItemClick = (id, src, title, price) => {
        openModal("preview"); // Pass src, title, and price only
        dynamic({ src, title, price }); // Pass src, title, and price only
      };

    

    
  return (
    <>
        <Navbar openModal={openModal} />
        {showModal && (
        <Modal onClose={closeModal} iconClicked={iconClicked} id={modalData.id} src={modalData.src} title={modalData.title} price={modalData.price} prices={modalData.prices} openModal={openModal}>
        </Modal>
      )}
    <div name="menu" className='flex flex-col items-center gap-12 sm:p-16 p-5'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {
            funeral.map(({ id, src, title, price}) =>{
                const formattedPrice = new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN'
                }).format(parseInt(price.replace(/[^\d.-]/g, ""), 10));
    
            return(
                <div key={id} className='flex flex-col drop-shadow-xl cursor-pointer ' onClick={() => handleItemClick(id, src, title, price)}>
                    <div onClick={() => handleItemPicking(item)} className='relative'>
                        <img src={src} alt='products' className='' />
                        {/* <button className='absolute bottom-0 bg-black/90 text-white p-1 text-sm font-bold  w-full'>Quick View</button> */}
                    </div>
                    <div className='flex flex-col sm:flex-row gap-3 justify-between font-semibold text-sm py-3 bg-gradient-to-t from-black/5 via-white to-white'>
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

export default Funeral