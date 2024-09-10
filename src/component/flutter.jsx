import React, { useEffect, useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import axios from 'axios';


const Flutter = ({ sendersName, sendersPhone,
    sendersEmail, title, totalPrices, customerName,
    contact, message, address, date, time, modalData, newData,
    FinaltotalPrice
}) => {
    const [keys, setKeys] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const totalPrice = parseFloat(totalPrices.replace(/[^\d.-]/g, ''));
    const FinaltotalPrices = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN'
    }).format(FinaltotalPrice);

    useEffect(() => {
        const fetchKeys = async () => {
            try {
                const response = await axios.get('https://server.flowersimperial.com/api/keys');
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
        amount: FinaltotalPrice,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: sendersEmail,
            phone_number: sendersPhone,
            name: customerName,
        },
        customizations: {
            title: title,
            description: 'Payment for items in cart',
            logo: modalData.src,
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
                                    const userDetail = modalData.map(item => ({
                                        name: item.sendersName,
                                        email: item.sendersEmail,
                                        phone: item.sendersPhone,
                                        title: item.title,
                                        price: item.totalPrices,
                                        reciever: item.name,
                                        contact: item.contact,
                                        message: item.message,
                                        address: item.address,
                                        date: item.date,
                                        time: item.time
                                    }));
                                    // Make an HTTP request to your backend endpoint
                                    userDetail.map(async user => {
                                        await axios.post('https://server.flowersimperial.com/api/transaction', {
                                            transactionDetails: response,
                                            userDetails: userDetail, // Pass userDetail directly as an array
                                            FinaltotalPrices: FinaltotalPrices // Move totalPrices outside userDetail
                                        });
                                })
                                     // Show Preview component on successful payment
                                } catch (error) {
                                    console.error('Error sending transaction details to backend:', error);
                                }
                            }
                            closePaymentModal() // this will close the modal programmatically
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
