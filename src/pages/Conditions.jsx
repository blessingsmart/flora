import React, { useState } from 'react';
import Modal from '../component/modal';
import Navbar from '../component/navbar';
import Footer from '../component/footer';

const Conditions = () => {
  const [showModal, setShowModal] = useState(false);
  const [iconClicked, setIconClicked] = useState(null);

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
          <Modal onClose={closeModal} iconClicked={iconClicked}>
          </Modal>
      )}
      <div className='font-semi-bold mx-5 my-8 text-gray-500 md:mx-72'>
        <strong className='text-2xl font-bold'>Terms And Conditions</strong>
        <p className='my-4 text-xl'>1. General: All our prices are already inclusive of VAT. However, a delivery fee will be added on <br/>
          during checkoutOur delivery rates for areas in Lagos, Nigeria are as listed below:</p>
        <p className='text-xl'>Lekki Phase 1-  ₦1000 <br/>
          Lekki Phase 2/Ajah – ₦1500 <br/>
          Victoria Island – ₦2000 <br/>
          Ikoyi –  ₦2000 <br/>
          Lagos Island – ₦2500 <br/>
          Lagos Central (Yaba, Surulere, Mushin) – ₦3500 <br/>
          Apapa – ₦5000 <br/>
          Lagos mainland (Gbagada, Anthony, Ilupeju, Maryland) – ₦4000 <br/>
          Ikeja (Opebi, Allen,Adeniyi jones, secretariat) – ₦4000 <br/>
          Ikeja 2 (Omole,Magodo, Isheri)  – ₦5000 <br/>
          Festac – ₦6000 <br/>
          Agege – ₦4500 <br/>
          Ogba  – ₦4500 <br/>
          Ajao/Airport – ₦4500 <br/>
          Iyanapaja/Akowonjo – ₦5000 <br/>
          Idimu  – ₦6000 <br/>
          Ikorodu – ₦4500 <br/>
          Isolo/Okota – ₦5500 <br/>
          Ogudu/Ojota –  ₦4000 <br/>
          Ketu  – ₦4500 <br/>
          Akute – ₦4500 <br/>
          Ojodu/Berger – ₦5500 <br/>
          Mowe/Ofada –  ₦6000.
          </p>
        <p className='my-4 text-xl'>Even though our florists team select only the best fresh flowers available in our flower shop in<br/>
        Lagos, Nigeria, please note that delivered floral products may vary slightly in appearance when<br/>
        compared to images on the website.This is due to the nature of the product, with factors such<br/>
        as non-availability of certain products being taken into account. That being said, we take great<br/>
        care in ensuring flowers, greenery, fillers, containers, accessories and gifts are substituted with<br/>
        equal or greater value and look as similar as possible to the product displayed on the website.<br/><br />

        We reserve the right to make these substitutions without notifying the customer, unless<br/>
        substitution is significant. In these cases, we will attempt to contact you although we are not<br/>
        obligated to do so.If you would like to discuss any substitutions we have made, please contact<br/>
        our customer services team and they will be happy to assist.<br/><br />

        2. For Lovebug Florist to process your order, we need information such as your full name, email<br/>
        address, contact number, your billing address, delivery address and payment confirmed. We<br/>
        may subsequently require further details to enable the processing of any orders that you make. <br/>
        You agree to provide Lovebug Florist with current, complete and accurate customer information<br/>
        when asked to do so by the website or an employee of Lovebug Florist.<br/><br />

        Please note, if you do not receive an email confirmation or phone call, your order has not been<br/>
        processed. Please contact Lovebug Florist by phoning <span className='text-black'>08131883002</span> or by emailing:<br/>
        lovebugflorist@gmail.com3. Orders will not be dispatched until payment in full has been<br/>
        received and Lovebug Florist is satisfied with the integrity of the order.<br/><br />

        4. Flower delivery in Lagos, Nigeria- To ensure same day flower delivery, please ensure that<br/>
        you send your proof of payment to us. Orders taken before 4 o’clock are delivered on the same<br/>
        day. (For VI, Ikoyi, Lekki/Ajah delivery areas only)All orders taken by 2 o’ clock are delivered<br/>
        same day (For Mainland delivery areas only).All orders taken after these times will be treated<br/>
        as next day delivery except where specific delivery dates are stated Delivery starts at 10am<br/>
        from Monday to Friday.. To ensure same day delivery in Lagos, Nigeria,  please ensure that you<br/>
        send your proof of payment to us before 12pm that same day.<br/><br />

        5. Orders for whole cakes and/or Cupcakes should be placed a minimum of 24 hours before<br/>
        the delivery date.<br/><br />

        6. It is your obligation to enter the correct delivery address details at the time of ordering. If the<br/>
        delivery details you have given are incorrect Lovebug Florist will not refund you. Should you<br/>
        wish to send the flowers again it will be at full expense to the customer.<br/><br />

        7. Unfortunately, we can’t leave deliveries unattended at the recipient’s front door. We will,<br/>
        however, try our best to deliver at reception or with a security if they aren’t available.<br/><br />

        8. Changes to Orders – If you wish to make any changes to your order, please do so by either<br/>
        phoning our flower shop in Lagos, Nigeria on <span className='text-black'>08131883002</span> or by emailing:<br/>
        <span className='text-black'>Lovebugflorist@gmail.com</span> Please note that any changes to your order (delivery address, card <br/>
        message, or additional items) must be made by 5pm the day before the scheduled  flower <br/>
        delivery date. This ensures that we have enough time to amend your order before delivery.<br/><br />

        9. Cancellation of Orders – Should you need to cancel your order, money will be refunded less<br/>
        N5000 administrative fee, ONLY IF notice is received by Lovebug Florist by 1pm the day before<br/>
        the scheduled delivery date. Cancellations received after 1pm the day before the scheduled<br/>
        delivery date will be charged at 50% of the total order value. We are unable to cancel orders<br/>
        that are already prepared and are with our courier for delivery.<br/><br />

        10. Refunds – We value our customers and attempt to meet their unique requirements and<br/>
        deliver the best products available. In the unlikely event that you are not satisfied with your<br/>
        order, please contact us to discuss your concerns within 24 hours of receipt by phone on<br/>
        <span className='text-black'>08131883002</span>, or by emailing: <span className='text-black'>Lovebugflorist@gmail.com</span>. A number of resolutions may be<br/>
        available to you depending on the particular situation. We may redeliver the same flower<br/>
        arrangement, or offer a store credit in our flower shop in Lagos, Nigeria for all or part the order <br/>
        value but we must be notified within 24 hours of receipt.<br/><br />

        11. Because each day is unique and we can never predict what awaits us, we unfortunately<br/>
        can’t guarantee delivery  times.Flower Delivery hours for Lovebug Florist are between 10am<br/>
        and 6pm Monday-Saturday and between 1pm- 4pm Sunday.<br/>
        </p>
      </div>
      < Footer />
    </>
  );
};

export default Conditions