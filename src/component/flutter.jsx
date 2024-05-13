import React, { useEffect, useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import axios from 'axios';


const Flutter = ({ src, sendersName, sendersPhone,
    sendersEmail, title, totalPrices, customerName,
    contact, message, address, date, time
}) => {
    const [keys, setKeys] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const totalPrice = parseFloat(totalPrices.replace(/[^\d.-]/g, ''));


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
        amount: totalPrice,
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
                        callback: async (response) => {
                            console.log(response);
                            if (response.status === "successful") {
                                try {
                                    // Make an HTTP request to your backend endpoint
                                    await axios.post('http://localhost:3001/api/transaction', {
                                        transactionDetails: response,
                                        userDetails: {
                                            name: sendersName,
                                            email: sendersEmail,
                                            phone: sendersPhone,
                                            title: title,
                                            totalPrices: totalPrices,
                                            reciever: customerName,
                                            contact: contact,
                                            message: message,
                                            address: address,
                                            date: date,
                                            time: time
                                        }
                                    });
                                     // Show Preview component on successful payment
                                } catch (error) {
                                    console.error('Error sending transaction details to backend:', error);
                                }
                            }
                             // this will close the modal programmatically
                        },
                        onClose: () => { },
                    });
                }}
            >
                PROCEED TO PAYMENT
            </button>
        </>
    );
};

export default Flutter;
