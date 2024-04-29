import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

function Flutter({ title, totalPrices, contact }) {
    // Destructure props if needed
    //const { price } = props;

    const config = {
        public_key: 'FLWPUBK_TEST-a48050707c79f539429d871d89a1d840-X',
        tx_ref: Date.now(),
        amount: totalPrices, // Use the price prop here
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: "ali********@mail.com",
          phone_number: contact,
          name: 'customer',
        },
        customizations: {
          title: title,
          description: 'Payment for items in cart',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    return (
        <div className="App">
            <button
                onClick={() => {
                    handleFlutterPayment({
                        callback: (response) => {
                            console.log(response);
                            closePaymentModal();
                        },
                        onClose: () => {},
                    });
                }}
            >
             PROCEED TO CHECKOUT
            </button>
        </div>
    );
}

export default Flutter;
