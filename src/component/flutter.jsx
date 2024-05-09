import React, { useEffect, useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import axios from 'axios';
import Preview from './preview';
import Notification from '../pages/notifications';


const Flutter = ({src, sendersName, sendersPhone, sendersEmail, title, totalPrices}) => {
    const [keys, setKeys] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');


    const handleButtonClick = () => {
        setShowNotification(true);
        setNotificationMessage('This is a notification!');
    };

    useEffect(() => {
        const fetchKeys = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/keys');
            setKeys(response.data);
        } catch (error) {
            console.error('Error fetching keys:', error);
            setError('Error fetching keys');
        } finally {
            setLoading(false);
        }
        };

        fetchKeys();
    }, []);

    // Initialize payment configuration
    const config = keys && {
        public_key: keys.publicKey,
        tx_ref: Date.now(),
        amount: totalPrices,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: sendersEmail,
            phone_number: sendersPhone,
            name: sendersName,
        },
        customizations: {
            title: title,
            description: 'Payment for items in cart',
            logo: src,
        },
    };

    // Handle Flutterwave payment
    const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
       <button
            onClick={() => {
                handleFlutterPayment({
                    callback: (response) => {
                        console.log(response);
                        if (response.status === "success") {
                            setShowPreview(handleButtonClick()); // Show Preview component on successful payment
                        }
                        closePaymentModal(); // this will close the modal programmatically
                    },
                    onClose: () => {},
                });
            }}
        >
            PROCEED TO PAYMENT <Notification/>
        </button>
        {showNotification && <Notification message={notificationMessage} />}
    </>
  );
};

export default Flutter;
