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
      <div className='px-52 text-gray-500 flex flex-col gap-5 py-10'>
          <h1 className='font-bold text-lg '>Terms And Conditions</h1>
          <p>{"1. General: All our prices are already inclusive of VAT. However, a delivery fee will be added on during checkoutOur delivery rates for areas in Lagos, Nigeria are as listed below:"}</p>
          <div>
            <p>{"Lekki Phase 1-  ₦1000"}</p>
            <p>{"Lekki Phase 2/Ajah – ₦1500"}</p>
            <p>{"Victoria Island – ₦2000"}</p>
            <p>{"Ikoyi –  ₦2000"}</p>
            <p>{"Lagos Island – ₦2500"}</p>
            <p>{"Lagos Central (Yaba, Surulere, Mushin) – ₦3500"}</p>
            <p>{"Apapa – ₦5000"}</p>
            <p>{"Lagos mainland (Gbagada, Anthony, Ilupeju, Maryland) – ₦4000"}</p>
            <p>{"Ikeja (Opebi, Allen,Adeniyi jones, secretariat) – ₦4000"}</p>
            <p>{"Ikeja 2 (Omole,Magodo, Isheri)  – ₦5000"}</p>
            <p>{"Festac – ₦6000"}</p>
            <p>{"Agege – ₦4500"}</p>
            <p>{"Ogba  – ₦4500"}</p>
            <p>{"Ajao/Airport – ₦4500"}</p>
            <p>{"Iyanapaja/Akowonjo – ₦5000"}</p>
            <p>{"Idimu  – ₦6000"}</p>
            <p>{"Ikorodu – ₦4500"}</p>
            <p>{"Isolo/Okota – ₦5500"}</p>
            <p>{"Ogudu/Ojota –  ₦4000"}</p>
            <p>{"Ketu  – ₦4500"}</p>
            <p>{"Ojodu/Berger – ₦5500"}</p>
            <p>{"Mowe/Ofada –  ₦6000."}</p>
          </div>
          <p>{"Even though our florists team select only the best fresh flowers available in our flower shop in Lagos, Nigeria, please note that delivered floral products may vary slightly in appearance when compared to images on the website.This is due to the nature of the product, with factors such as non-availability of certain products being taken into account. That being said, we take great care in ensuring flowers, greenery, fillers, containers, accessories and gifts are substituted with equal or greater value and look as similar as possible to the product displayed on the website."}</p>
          <p>{"We reserve the right to make these substitutions without notifying the customer, unless substitution is significant. In these cases, we will attempt to contact you although we are not obligated to do so.If you would like to discuss any substitutions we have made, please contact our customer services team and they will be happy to assist."}</p>
          <p>{"2. For Lovebug Florist to process your order, we need information such as your full name, email address, contact number, your billing address, delivery address and payment confirmed. We may subsequently require further details to enable the processing of any orders that you make.  You agree to provide Lovebug Florist with current, complete and accurate customer information when asked to do so by the website or an employee of Lovebug Florist."}</p>
          <p>{"Please note, if you do not receive an email confirmation or phone call, your order has not been processed. Please contact Flowers Imperial by phoning 08060521476 or by emailing: "} <span className='text-black'>Flowersimperial34@gmail.com</span></p>
          <p>{"3. Orders will not be dispatched until payment in full has been received and Lovebug Florist is satisfied with the integrity of the order."}</p>
          <p>{"4. Flower delivery in Lagos, Nigeria- To ensure same day flower delivery, please ensure that you send your proof of payment to us. Orders taken before 4 o’clock are delivered on the same day. (For VI, Ikoyi, Lekki/Ajah delivery areas only)All orders taken by 2 o’ clock are delivered same day (For Mainland delivery areas only).All orders taken after these times will be treated as next day delivery except where specific delivery dates are stated Delivery starts at 10am from Monday to Friday.. To ensure same day delivery in Lagos, Nigeria,  please ensure that you send your proof of payment to us before 12pm that same day."}</p>
          <p>{"5. Orders for whole cakes and/or Cupcakes should be placed a minimum of 24 hours before the delivery date."}</p>
          <p>{"6. It is your obligation to enter the correct delivery address details at the time of ordering. If the delivery details you have given are incorrect Flowers Imperial will not refund you. Should you wish to send the flowers again it will be at full expense to the customer."}</p>
          <p>{"7. Unfortunately, we can’t leave deliveries unattended at the recipient’s front door. We will, however, try our best to deliver at reception or with a security if they aren’t available."}</p>
          <p>{"8. Changes to Orders – If you wish to make any changes to your order, please do so by either phoning our flower shop in Lagos, Nigeria on 08060521476 or by emailing: Flowersimperial34@gmail.com Please note that any changes to your order (delivery address, card message, or additional items) must be made by 5pm the day before the scheduled  flower delivery date. This ensures that we have enough time to amend your order before delivery."}</p>
          <p>{"9. Cancellation of Orders – Should you need to cancel your order, money will be refunded less N5000 administrative fee, ONLY IF notice is received by Flowers Imperial by 1pm the day before the scheduled delivery date. Cancellations received after 1pm the day before the scheduled delivery date will be charged at 50% of the total order value. We are unable to cancel orders that are already prepared and are with our courier for delivery."}</p>
          <p>{"10. Refunds – We value our customers and attempt to meet their unique requirements and deliver the best products available. In the unlikely event that you are not satisfied with your order, please contact us to discuss your concerns within 24 hours of receipt by phone on 08060521476, or by emailing:"} <span className='text-black'>Flowersimperial34@gmail.com</span>{". A number of resolutions may be available to you depending on the particular situation. We may redeliver the same flower arrangement, or offer a store credit in our flower shop in Lagos, Nigeria for all or part the order value but we must be notified within 24 hours of receipt."}</p>
          <p>{"11. Because each day is unique and we can never predict what awaits us, we unfortunately can’t guarantee delivery  times.Flower Delivery hours for Flowers Imperial are between 10am and 6pm Monday-Saturday and between 1pm- 4pm Sunday."}</p>
      </div>
      
      < Footer />
    </>
  )
}

export default Conditions